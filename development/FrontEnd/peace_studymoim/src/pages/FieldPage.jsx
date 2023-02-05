import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userInfo } from "../zustand/store";
import useToken from "../hooks/useToken";
import useFetch from "../hooks/useFetch";
import Tag from "../components/overall/Tag";

export default function FieldPage() {
  const navigate = useNavigate();
  const { setInfo } = userInfo();
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const userInformation = useToken(`http://${API_SERVER}/api/v1/oauth/info`);
  const tags = useFetch(`http://${API_SERVER}/api/v1/category/`);

  useEffect(() => {
    setInfo(userInformation);
  }, [userInformation]);

  // TODO: 이 부분을 백엔드 쪽에 넣어서 업데이트되게 해야할 것 같음
  const [selectedField, setSelectedField] = useState([]);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [category, setCategory] = useState([]);

  const nicknameRef = useRef();
  const saveNameRef = useRef();
  const selectFieldsRef = useRef();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  useEffect(() => {
    for (let i = 0; i < selectedField.length; i++) {
      setCategory([...category, { categoryId: selectedField[i] }]);
    }
    console.log(category);
  }, [selectedField]);

  function submitHandler(event) {
    event.preventDefault();

    const enteredNickname = nicknameRef.current.value;

    const fieldData = {
      userId: userInformation.userId,
      categories: category,
    };

    const changeNickname = {
      nickname: enteredNickname, 
      userId: userInformation.userId, 

    }
    fetch(`http://${API_SERVER}/api/v1/user/${userInformation.userId}/nickname`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changeNickname),
    }).then((res) => {
      if (res.ok) {
        navigate("/");
      }
    });

    fetch(`http://${API_SERVER}/api/v1/category/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fieldData),
    }).then((res) => {
      if (res.ok) {
        navigate("/");
      }
    });
  }

  return (
    <div className="container mx-auto my-auto flex flex-col justify-center items-center">
      <p className="text-[40px] font-bold text-black my-5">
        관심있는 분야를 선택해주세요!
      </p>

      <div className="grid gap-4 grid-cols-5 grid-flow-row auto-rows-auto">
        {tags.map((tag) => (
          <div
            onClick={() => {
              if (selectedField.includes(tag.courseCategoryId)) {
                for (let i = 0; i < selectedField.length; i++) {
                  if (selectedField[i] === tag.courseCategoryId) {
                    selectedField.splice(i, 1);
                  }
                }
              } else {
                setSelectedField([...selectedField, tag.courseCategoryId]);
              }
              console.log(selectedField);
            }}
          >
            <Tag key={tag.courseCategoryId} tag={tag} ref={selectFieldsRef} />
          </div>
        ))}
      </div>
      <form
        onSubmit={submitHandler}
        className="container mx-auto my-auto flex flex-col justify-center items-center"
      >
        <div className="flex w-6/12 justify-center items-center relative gap-4">
          {preview ? (
            <img
              src={preview}
              required
              className="flex-grow-0 flex-shrink-0 object-cover rounded-full w-6/12"
            />
          ) : (
            <img
              src={"/logo.png"}
              className="flex-grow-0 flex-shrink-0 object-cover rounded-full w-6/12"
            />
          )}

          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[5px] w-8/12">
            <p className="flex-grow-0 flex-shrink-0 w-full text-[28px] font-bold text-center">
              닉네임을 입력해주세요(2-6자)
            </p>
            <input
              type="text"
              className="flex-grow-0 flex-shrink-0 w-full h-[66px] rounded-[10px] border-[3px] border-[#b1b2ff] mb-3"
              ref={nicknameRef}
              minLength="1"
              maxLength="5"
            />
            <input
              id="picture"
              type="file"
              ref={saveNameRef}
              accept="image/*"
              onChange={(event) => {
                const file = event.target.files[0];
                if (file && file.type.substring(0, 5) === "image") {
                  setImage(file);
                } else {
                  setImage(null);
                }
              }}
            />
            <button className="btn mt-5 w-[526px] h-10  rounded-[20px] bg-[#b1b2ff] text-lg font-bold text-center text-white hover:bg-[#8587eb]">
              제출하기
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
