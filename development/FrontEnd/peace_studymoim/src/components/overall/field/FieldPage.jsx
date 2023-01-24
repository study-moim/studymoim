import { ReactElement, useState } from "react";
import FieldButton from "./FieldButton";
import { Link } from "react-router-dom";


export default function FieldPage() {
  // TODO: 이 부분을 백엔드 쪽에 넣어서 업데이트되게 해야할 것 같음
  const [selectedField, selectField] = useState([]);

  const fieldList = [
    "Figma",
    "Back-End",
    "Front-End",
    "Spring",
    "Node.js",
    "React",
    "DevOps",
    "Vue.js",
    "Python",
    "JPA",
    "JAVA",
    "C++",
    "C+",
  ];

  return (
    <>
      <div className="container mx-auto my-auto flex flex-col justify-center items-center">
        <p className="text-[40px] font-bold text-black my-5">
          관심있는 분야를 선택해주세요!
        </p>
        {/* 
          TODO1 버튼을 누르면 내 관심사가 업데이트 되게 해야함 - BACKEND와 소통하는 변수만들어야함 
          TODO2 가운데로 정렬해야함
        */}
        <div className="grid grid-cols-4 gap-4 my-5">
          {fieldList.map((field, idx) => (
            <FieldButton key={idx} field={field} />
          ))}
        </div>
        <Link to="/">
          <button className="mt-5 w-[526px] h-10  rounded-[20px] bg-[#b1b2ff] text-lg font-bold text-center text-white hover:bg-[#8587eb]">
            홈으로 이동하기
          </button>
        </Link>
      </div>
    </>
  );
}
