import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userInfo from "../zustand/store";
import useToken from "../hooks/useToken";
import useFetch from "../hooks/useFetch";
import Tag from "../components/overall/Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function FieldPage() {
  const navigate = useNavigate();
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const userInformation = useToken(`http://${API_SERVER}/api/v1/oauth/info`);
  const tags = useFetch(`http://${API_SERVER}/api/v1/category/`);
  const [visible, setVisible] = useState(false);
  const { setInfo } = userInfo();
  const [nickname, setNickname] = useState("");
  const [nicknameMessage, setNicknameMessage] = useState("");
  const [selectedField, setSelectedField] = useState([]);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [category, setCategory] = useState([]);
  const nicknameRef = useRef();
  const saveNameRef = useRef();
  const selectFieldsRef = useRef();

  useEffect(() => {
    setInfo(userInformation);
  }, [userInformation]);

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
  }, [selectedField]);

  const onChangeNickname = (nicknameCurrent) => {
    const nicknameRegex = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,6}$/;
    setNickname(nicknameCurrent);

    if (!nicknameRegex.test(nicknameCurrent)) {
      setNicknameMessage("한글 2-6자로 입력해주세요");
    } else {
      setNicknameMessage("올바른 닉네임 형식입니다 : )");
    }
  };

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
    const imgTemp = { userId: userInformation.userId, fileName: 'filename'}; 
    const imageData = new FormData()
    imageData.append('file', image)  
    imageData.append('dto', JSON.stringify(imgTemp)) 

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

    fetch(`http://${API_SERVER}/api/v1/gcs/upload`, {
      method: "POST",
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // }, 
      body: imageData
    }).then((res) => {
      if (res.ok) {
        console.log("이미지 되냐?")
        navigate("/temp"); 
      }
    }); 
  }
  // console.log(selectedField);
  return (
    <div className="max-w-[880px] mx-auto my-[100px] px-4">
      {/* 분야 선택 창 */}
      {!visible && (
        <div className="min-w-[800px]">
          <div className="flex justify-center">
            <div className="w-[50%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-[#b1b2ff] h-2.5 rounded-full"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col justify-center items-center">
              <p className="text-[30px] font-bold my-[50px]">
                관심있는 분야를 선택해주세요!
              </p>
              <div className="flex flex-row flex-wrap w-[80%] justify-center gap-2">
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
                        setSelectedField([
                          ...selectedField,
                          tag.courseCategoryId,
                        ]);
                      }
                    }}
                  >
                    <Tag tag={tag} />
                  </div>
                ))}
              </div>
            </div>
            <button className="nextBtn" onClick={() => setVisible(true)}>
              <FontAwesomeIcon
                icon={faChevronRight}
                size="2x"
                className="animate-bounce "
              />
            </button>
          </div>
        </div>
      )}
      {/* 분야 설정 끝 */}

      {/* 프로필 설정 창 */}
      {visible && (
        <div className="min-w-[800px]">
          <div className="flex justify-center">
            <div className="w-[50%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-[#b1b2ff] h-2.5 rounded-full"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
          <div className="flex flex-row">
            <button className="prevBtn" onClick={() => setVisible(false)}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                size="2x"
                className="animate-bounce"
              />
            </button>
            <div className="min-w-[800px] flex flex-col justify-center items-center">
              <p className="text-[30px] font-bold my-[50px]">
                나만의 개성있는 프로필 완성해주세요
              </p>
              <form
                onSubmit={submitHandler}
                className="flex flex-col justify-center items-center gap-5"
              >
                {preview ? (
                  <img
                    src={preview}
                    required
                    className="object-cover border rounded-full w-[160px] h-[160px]"
                  />
                ) : (
                  <img
                    src={"/logo.png"}
                    className="object-cover border rounded-full w-[160px] h-[160px]"
                  />
                )}
                <input
                  className="file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm
              file:bg-[#b1b2ff] file:text-white
              hover:file:bg-[#8587eb]"
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
                <div className="text-center">
                  <input
                    type="text"
                    className="text-center w-[400px] border-b-2 pb-2 focus:outline-none focus:border-b-[#B1B2FF] mb-1"
                    ref={nicknameRef}
                    minLength="2"
                    maxLength="6"
                    placeholder="닉네임을 입력해주세요(2-6자)"
                    onChange={(e) => onChangeNickname(e.target.value)}
                  />
                  {nickname.length > 0 && (
                    <p className="text-[13px] text-[#8587eb]">
                      {nicknameMessage}
                    </p>
                  )}
                </div>
                <button className="btn mt-5 w-[500px] h-10 rounded-[20px] bg-[#b1b2ff] text-lg text-center text-white hover:bg-[#8587eb]">
                  공부 하러 가기!
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* 프로필 설정 끝 */}
    </div>
  );
}
