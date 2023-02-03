import { useState, useRef, useEffect } from "react";
import FieldButton from "../components/field/FieldButton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { userInfo } from "../zustand/store";
import useToken from "../hooks/useToken";
import { set } from "react-hook-form";

export default function FieldPage() {
  const navigate = useNavigate();
  const { setInfo } = userInfo();
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const userInformation = useToken(`http://${API_SERVER}/api/v1/oauth/info`);
  // console.log(userInformation)
  if (userInformation.nickname) {
    navigate("/");
  } else {
    useEffect(() => {
      setInfo(userInformation);
    }, [userInformation]);

    // TODO: 이 부분을 백엔드 쪽에 넣어서 업데이트되게 해야할 것 같음
    const [selectedField, setSelectedField] = useState([]);
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

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
    console.log(image);

    useEffect(() => {}, [selectedField]);

    function selectHandler(e) {
      if (selectedField.includes(e.target.innerText)) {
        for (let i = 0; i < selectedField.length; i++) {
          if (selectedField[i] === e.target.innerText) {
            selectedField.splice(i, 1);
          }
        }
      } else {
        setSelectedField([...selectedField, e.target.innerText]);
      }
    }

    function submitHandler(event) {
      event.preventDefault();

      const enteredNickname = nicknameRef.current.value;

      const loginData = {
        nickname: enteredNickname,
        saveName: preview,
        selectFields: selectedField,
      };
    
      navigate("/");
    }

    const fieldList = [
      "Front-End",
      "DevOps",
      "Figma",
      "Spring",
      "Node.js",
      "React",
      "Vue.js",
      "Python",
      "JPA",
      "JAVA",
      "C++",
      "C+",
    ];

    return (
      <>
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
                required
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
            </div>
          </div>

          <p className="text-[40px] font-bold text-black my-5">
            관심있는 분야를 선택해주세요!
          </p>
          {/* 
          TODO1 버튼을 누르면 내 관심사가 업데이트 되게 해야함 - BACKEND와 소통하는 변수만들어야함 
          TODO2 가운데로 정렬해야함
        */}
          <div className="grid grid-cols-4 gap-4 my-5">
            {fieldList.map((field, idx) => (
              <div onClick={selectHandler}>
                <FieldButton key={idx} field={field} ref={selectFieldsRef} />
              </div>
            ))}
          </div>

          <button className="btn mt-5 w-[526px] h-10  rounded-[20px] bg-[#b1b2ff] text-lg font-bold text-center text-white hover:bg-[#8587eb]">
            제출하기
          </button>
        </form>
      </>
    );
  }
}
