import { useRef } from "react";
import MyPageTagItem from "./MyPageTagItem";
import { useState, useEffect } from "react";
import userInfo from "../../zustand/store";
import { useNavigate } from "react-router";

export default function MyPageUpdateForm({ userId }) {
  const IMAGE_ROOT = import.meta.env.VITE_APP_IMAGE_ROOT;
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;

  const { info } = userInfo();

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const saveNameRef = useRef();

  const [modifyNickname, setModifyNickname] = useState(false);
  const [nickname, setNickname] = useState("");
  const [nicknameMessage, setNicknameMessage] = useState("");
  const [nicknameConfirm, setNicknameConfirm] = useState("");
  const [modifyTag, setModifyTag] = useState(false);
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedField, setSelectedField] = useState([]);

  const selectFieldsRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    const getTag = async () => {
      if (modifyTag) {
        await fetch(`http://${API_SERVER}/api/v1/category/`)
          .then((res) => res.json())
          .then((json) => {
            setTags(json);
          });
      } else {
        await fetch(`http://${API_SERVER}/api/v1/user/${userId}/tags`)
          .then((res) => res.json())
          .then((json) => {
            setTags(json);
          });
      }
    };
    getTag();
  }, [modifyTag]);

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
      setCategory([...category, selectedField[i]]);
    }
  }, [selectedField]);

  function submitCategoryHandler() {
    const categoryInfo = {
      userId: userId,
      categories: category,
    };

    fetch(`http://${API_SERVER}/api/v1/category/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoryInfo),
    }).then((res) => {
      if (res.ok) {
        alert("카테고리 수정완!");
        window.location.reload();
      }
    });
  }

  function submitImageHandler(image) {
    const imageData = new FormData();
    imageData.append("file", image);

    fetch(`http://${API_SERVER}/api/v1/user/${userId}/image`, {
      method: "POST",
      body: imageData,
    }).then((res) => {
      if (res.ok) {
        alert("이미지 수정완!");
        navigate("/mypagetemp", { state: { fromWhere: userId } });
      }
    });
  }

  const onChangeNickname = (nicknameCurrent) => {
    setNickname(nicknameCurrent);
    if (nicknameCurrent.length < 2) {
      setNicknameMessage("한글 2-6자로 입력해주세요");
      setNicknameConfirm(false);
    } else {
      setNicknameMessage("올바른 닉네임 형식입니다 : )");
      setNicknameConfirm(true);
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

  function submitNicknameHandler() {
    if (nicknameConfirm) {
      setModifyNickname(false);

      const nicknameInfo = {
        nickname: nickname,
      };
      fetch(`http://${API_SERVER}/api/v1/user/${userId}/nickname`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nicknameInfo),
      }).then((res) => {
        if (res.ok) {
          alert("닉네임 수정완!");
          navigate("/mypagetemp", { state: { fromWhere: userId } });
        }
      });
    }
  }
  return (
    <>
      <div className="flex flex-col mt-5 gap-5 w-full min-w-[500px]">
        <div className="flex flex-row justify-start gap-5">
          <div className="flex flex-col gap-2 items-center pr-5 border-r">
            {preview ? (
              <img src={preview} className="border rounded-full w-[100px] h-[100px] my-4" />
            ) : (
              <img
                src={IMAGE_ROOT + info.saveName}
                className="border rounded-full w-[100px] h-[100px] my-4"
              />
            )}
            <input
              className="file:w-[150px] file:py-1
              file:rounded-[5px] file:border-0
              file:text-[13px]
              file:bg-[#b1b2ff] file:text-white
              hover:file:bg-[#8587eb]
              text-[13px] w-[150px]"
              id="picture"
              type="file"
              ref={saveNameRef}
              accept="image/*"
              onChange={(event) => {
                const file = event.target.files[0];
                if (file && file.type.substring(0, 5) === "image") {
                  setImage(file);
                  submitImageHandler(file);
                } else {
                  setImage("/logo.png");
                }
              }}
            />
            <button
              onClick={() => {
                setPreview("/logo.png");
                submitImageHandler(null);
              }}
              className="w-[150px] text-[13px] py-1 text-[#b1b2ff] hover:bg-gray-100"
            >
              이미지 제거
            </button>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div>
              <p className="text-[14px] font-bold mb-2">Email</p>
              <p className="text-[13px] mb-2 max-w-[300px] bg-gray-100 p-2 border-b">
                {info.email}
              </p>
            </div>
            <div>
              <p className="text-[14px] font-bold mb-2">닉네임</p>
              {!modifyNickname ? (
                <>
                  <p className="text-[13px] max-w-[300px] p-2 border-b">{info.nickname}</p>
                  <button
                    onClick={() => setModifyNickname(true)}
                    className="w-[30%] text-[13px] py-1 rounded-[5px] bg-[#b1b2ff] hover:bg-[#8587eb] text-white my-3"
                  >
                    수정
                  </button>
                </>
              ) : (
                <>
                  <div className="h-[60px]">
                    <input
                      type="text"
                      className="text-start text-[13px] w-[80%] border rounded-[5px] p-2 focus:outline-none focus:border-[#B1B2FF]"
                      ref={nicknameRef}
                      minLength="2"
                      maxLength="6"
                      placeholder={info.nickname}
                      required
                      onChange={(e) => onChangeNickname(e.target.value)}
                      onKeyDown={(e) => checkKeyCode(e.target)}
                    />
                    {nickname.length > 0 && (
                      <p className="text-[13px] text-[#8587eb] pl-1 pt-1">{nicknameMessage}</p>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      setModifyNickname(false);
                    }}
                    className="w-[30%] text-[13px] py-1 rounded-[5px] border border-[#b1b2ff] hover:bg-[#b1b2ff] hover:text-white my-3 mr-3"
                  >
                    취소
                  </button>
                  <button
                    onClick={() => {
                      submitNicknameHandler();
                    }}
                    className="w-[30%] text-[13px] py-1 rounded-[5px] bg-[#b1b2ff] hover:bg-[#8587eb] text-white my-3"
                  >
                    등록
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start my-5 w-ful pl-1">
          <p className="text-[15px] font-bold text-black mt-5 mb-3">나의 관심 분야</p>
          {!modifyTag ? (
            <>
              <div className="flex flex-row flex-wrap max-w-[500px] justify-start gap-2">
                {tags.map((tag) => (
                  <MyPageTagItem key={tag.courseCategoryId} tag={tag} isModify={modifyTag} />
                ))}
              </div>
              <button
                onClick={() => setModifyTag(true)}
                className="w-[30%] text-[13px] py-1 rounded-[5px] bg-[#b1b2ff] hover:bg-[#8587eb] text-white my-3"
              >
                수정
              </button>
            </>
          ) : (
            <>
              <div className="flex flex-row flex-wrap max-w-[500px] justify-start gap-2">
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
                    <MyPageTagItem key={tag.courseCategoryId} tag={tag} isModify={modifyTag} />
                  </div>
                ))}
              </div>
              <div>
                <button
                  onClick={() => {
                    setModifyTag(false);
                  }}
                  className="w-[20%] text-[13px] py-1 rounded-[5px] border border-[#b1b2ff] hover:bg-[#b1b2ff] hover:text-white my-3 mr-3"
                >
                  취소
                </button>
                <button
                  onClick={() => {
                    submitCategoryHandler();
                    setCategory([]);
                    setSelectedField([]);
                    setModifyTag(false);
                  }}
                  className="w-[20%] text-[13px] py-1 rounded-[5px] bg-[#b1b2ff] hover:bg-[#8587eb] text-white my-3"
                >
                  등록
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
