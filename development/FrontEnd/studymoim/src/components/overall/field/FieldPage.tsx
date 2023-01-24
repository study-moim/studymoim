import { ReactElement, useState } from "react";
import FieldButton from "./FieldButton";
import { Link } from "react-router-dom";
interface FieldType {
  field: string;
  selectedField: string;
}

export default function FieldPage() {
  // TODO: 이 부분을 백엔드 쪽에 넣어서 업데이트되게 해야할 것 같음
  const [selectedField, selectField] = useState<FieldType[]>([]);

  const fieldList: string[] = [
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
      <div className="container mx-auto my-auto">
        <p className="absolute left-[465px] top-[207px] text-[40px] font-bold text-left text-black">
          관심있는 분야를 선택해주세요!
        </p>
        {/* 
          TODO1 버튼을 누르면 내 관심사가 업데이트 되게 해야함 - BACKEND와 소통하는 변수만들어야함 
          TODO2 가운데로 정렬해야함
        */}
        <div className="grid grid-cols-4 gap-4 justify-center items-center h-[290px] absolute left-[345px] top-[367px]">
          {fieldList.map((field, idx: number) => (
            <FieldButton key={idx} field={field} />
          ))}
        </div>
        <Link to="/">
          <button className="w-[526px] h-10 absolute left-[470px] top-[843px] overflow-hidden rounded-[20px] bg-[#b1b2ff] text-sm font-bold text-center text-white hover:bg-blend-darken">
            홈으로 이동하기
          </button>
        </Link>
      </div>
    </>
  );
}
