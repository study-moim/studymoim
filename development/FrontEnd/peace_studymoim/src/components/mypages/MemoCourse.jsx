import { useState } from "react";
import MemoLecture from "./MemoLecture";

export default function MemoCourse({ courseData }) {
  const [memoLectureToggle, setMemoLectureToggle] = useState(false);
  const clickTriangle = () => {
    setMemoLectureToggle(!memoLectureToggle);
  };
  // 강좌 -> 강의 -> 메모
  // TODO: 히스토리가 뚫려야 할 수 있음
  return (
    <div>
      <div className="flex justify-start items-center pl-3 pr-5 py-3 rounded-[10px] bg-white border-[1px] border-[#eef1ff]/[0.98] mt-2">
        <img
          className="w-[106px] h-[82px] rounded-[10px]"
          src={courseData.thumbnail}
        />
        <div className="flex justify-between w-full ml-3">
          <div className="text-lg font-bold text-left text-black">
            {courseData.title}
          </div>
          <div className="text-lg font-bold text-center">5/6</div>
          <div
            className="text-xl text-left font-bold text-[#b1b2ff] hover: scale-105 hover:text-[#7b61ff] cursor-pointer"
            onClick={clickTriangle}
          >
            {!memoLectureToggle ? "OPEN" : "CLOSE"}
          </div>
        </div>
      </div>
      {memoLectureToggle ? <MemoLecture /> : null}
    </div>
  );
}
