import { useState } from "react";
import MemoLecture from "./MemoLecture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

export default function MemoCourse({ courseData }) {
  const [memoLectureToggle, setMemoLectureToggle] = useState(false);
  const clickTriangle = () => {
    setMemoLectureToggle(!memoLectureToggle);
  };
  const slicedTitle = courseData.title.substring(0, 50) + "...";
  return (
    <div>
      <div
        onClick={clickTriangle}
        className="cursor-pointer flex justify-between items-center pl-3 pr-5 py-2 bg-white border-b border-[#eef1ff]/[0.98] hover:bg-gray-100"
      >
        <div className="text-[15px] font-bold text-left text-black min-w-[70%] max-w-[70%]">
          {courseData.title.length > 50 ? slicedTitle : courseData.title}
        </div>
        <div className="min-w-[5%] max-w-[5%] text-right">
          {!memoLectureToggle ? (
            <FontAwesomeIcon
              icon={faCaretDown}
              className="text-[30px] font-bold text-[#b1b2ff] hover:text-[#7b61ff] cursor-pointer"
            />
          ) : (
            <FontAwesomeIcon
              icon={faCaretUp}
              className="text-[30px] font-bold text-[#b1b2ff] hover:text-[#7b61ff] cursor-pointer"
            />
          )}
        </div>
      </div>
      {memoLectureToggle ? <MemoLecture key={courseData.course_id} props={courseData.course_id} /> : null}
    </div>
  );
}
