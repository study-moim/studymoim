import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userInfo from "../zustand/store";
import useToken from "../hooks/useToken";
import useFetch from "../hooks/useFetch";
import Tag from "../components/overall/Tag";

export default function FieldPage() {
  const navigate = useNavigate();
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const { setInfo } = userInfo();
  const userInformation = useToken(`http://${API_SERVER}/api/v1/oauth/info`);
  useEffect(() => {
    setInfo(userInformation);
  }, [userInformation]);

  const tags = useFetch(`http://${API_SERVER}/api/v1/category/`);

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
    // console.log(category);
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
    };
    fetch(
      `http://${API_SERVER}/api/v1/user/${userInformation.userId}/nickname`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(changeNickname),
      }
    ).then((res) => {
      if (res.ok) {
        navigate("/temp");
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
        navigate("/temp");
      }
    });
  }
  // console.log(selectedField);
  return (
    <div className="mx-auto my-auto flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[40px] font-bold text-black my-5">
          관심있는 분야를 선택해주세요!
        </p>

        <div className="grid gap-4 grid-cols-5 grid-flow-row auto-rows-auto">
          {tags.map((tag) => (
            <div
              ref={selectFieldsRef}
              key={tag.courseCategoryId}
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
                // console.log(selectedField);
              }}
            >
              <Tag tag={tag} />
            </div>
          ))}
        </div>
      </div>
      <div className="my-5 container flex flex-col justify-center items-center">
        <form
          onSubmit={submitHandler}
          className="flex flex-col justify-center items-center"
        >
          <div className="flex justify-center items-center relative gap-4">
            {preview ? (
              <img
                src={preview}
                required
                className="object-cover rounded-full w-[160px] h-[160px]"
              />
            ) : (
              <img
                src={"/logo.png"}
                className="object-cover rounded-full w-[160px] h-[160px]"
              />
            )}

            <div className="flex flex-col justify-center items-center relative gap-[5px]">
              <input
                type="text"
                className="placeholder:italic pl-3 w-full h-[66px] rounded-[10px] border-[3px] border-[#b1b2ff] mb-3"
                ref={nicknameRef}
                minLength="1"
                maxLength="6"
                placeholder="닉네임을 입력해주세요(2-6자)"
              />
              <input
                className="block file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-100 file:text-violet-700
              hover:file:bg-violet-300"
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
            </div>
          </div>
          <button className="btn mt-5 w-[526px] h-10  rounded-[20px] bg-[#b1b2ff] text-lg font-bold text-center text-white hover:bg-[#8587eb]">
            제출하기
          </button>
        </form>
      </div>
    </div>
  );
}
