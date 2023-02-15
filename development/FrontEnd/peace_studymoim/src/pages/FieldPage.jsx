import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userInfo from "../zustand/store";
import useToken from "../hooks/useToken";
import useFetch from "../hooks/useFetch";
import Tag from "../components/overall/Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function FieldPage() {
  const navigate = useNavigate();
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const userInformation = useToken(`http://${API_SERVER}/api/v1/oauth/info`);
  const tags = useFetch(`http://${API_SERVER}/api/v1/category/`);
  const [visible, setVisible] = useState(false);
  const { info, setInfo } = userInfo();
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

  if (info && info.nickname) return navigate("/");

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
    setCategory(selectedField);
  }, [selectedField]);

  const onChangeNickname = (nicknameCurrent) => {
    // const nicknameRegex = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,6}$/;
    setNickname(nicknameCurrent);
    if (nicknameCurrent.length < 2) {
      setNicknameMessage("한글 2-6자로 입력해주세요");
    } else {
      setNicknameMessage("올바른 닉네임 형식입니다 : )");
    }
  };

  function checkKeyCode(t) {
    // const keyCode = event.keyCode;
    // if (event.keyCode == 32) event.returnValue = false;
    // else if (keyCode >= 33 && keyCode <= 126) event.returnValue = false;
    var regexp = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
    t.onkeyup = function (e) {
      var v = this.value;
      this.value = v.replace(regexp, "");
    };
  }

  function submitHandler(event) {
    event.preventDefault();

    const enteredNickname = nicknameRef.current.value;

    const startInfo = {
      userId: userInformation.userId,
      nickname: enteredNickname,
      categories: category,
    };

    const imageData = new FormData();
    imageData.append("file", image);
    imageData.append("dto", JSON.stringify(startInfo));
    fetch(`http://${API_SERVER}/api/v1/user/`, {
      method: "POST",
      body: imageData,
    }).then((res) => {
      if (res.ok) {
        navigate("/temp");
      }
    });
  }

  return (
    <div className="max-w-6xl mx-auto mt-[120px] mb-[100px] px-4">
      {/* 분야 선택 창 */}
      {!visible && (
        <div className="w-full">
          <div className="flex justify-center">
            <div className="max-w-[300px] w-[50%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-[#b1b2ff] h-2.5 rounded-full" style={{ width: "50%" }}></div>
            </div>
          </div>
          <p className="text-[25px] font-bold my-[40px] text-center">STEP 1. 관심 분야 설정</p>
          <div className="flex flex-row">
            <div className="flex flex-col justify-center items-center">
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
                        setSelectedField([...selectedField, tag.courseCategoryId]);
                      }
                    }}
                  >
                    <Tag tag={tag} />
                  </div>
                ))}
              </div>
            </div>
            <button
              className="nextBtn"
              onClick={() =>
                selectedField.length !== 0
                  ? setVisible(true)
                  : alert("태그를 1개 이상 선택해주세요.")
              }
            >
              <FontAwesomeIcon icon={faChevronRight} size="2x" className="animate-bounce " />
            </button>
          </div>
        </div>
      )}
      {/* 분야 설정 끝 */}

      {/* 프로필 설정 창 */}
      {visible && (
        <div className="w-full">
          <div className="flex justify-center">
            <div className="max-w-[300px] w-[50%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-[#b1b2ff] h-2.5 rounded-full" style={{ width: "100%" }}></div>
            </div>
          </div>
          <p className="text-[25px] font-bold mt-[40px] mb-[30px] text-center">
            STEP 2. 나만의 프로필
          </p>
          <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center w-[80%]">
              <form
                onSubmit={submitHandler}
                className="flex flex-col justify-center items-center w-[80%] gap-4"
              >
                {preview ? (
                  <img src={preview} className="border rounded-full w-[160px] h-[160px]" />
                ) : (
                  <img src={"/logo.png"} className="border rounded-full w-[160px] h-[160px]" />
                )}
                <input
                  className="file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm
              file:bg-[#b1b2ff] file:text-white
              file:w-full
              hover:file:bg-[#8587eb]
              w-[60%] py-5"
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

                <div className="w-full text-center h-[50px]">
                  <input
                    type="text"
                    className="text-center text-sm w-[60%] border border-[#b1b2ff] rounded-full py-2 focus:outline-none focus:border-[#8587eb] mb-1"
                    ref={nicknameRef}
                    minLength="2"
                    maxLength="6"
                    placeholder="닉네임을 입력해주세요(한글 2-6자)"
                    required
                    onChange={(e) => onChangeNickname(e.target.value)}
                    onKeyDown={(e) => checkKeyCode(e.target)}
                  />
                  {nickname.length > 0 && (
                    <p className="text-[13px] text-[#8587eb]">{nicknameMessage}</p>
                  )}
                </div>
                <button className="btn mt-5 w-[60%] h-10 rounded-[20px] bg-[#b1b2ff] text-sm text-center text-white hover:bg-[#8587eb]">
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
