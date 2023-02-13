import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import MemoItem from "./MemoItem";
import { useEffect } from "react";
import { useParams } from "react-router";
export default function MemoCourse({ courseData }) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const [memoLectureToggle, setMemoLectureToggle] = useState(false);
  const info = useParams();
 
  // const info = userInfo();
  const clickTriangle = () => {
    setMemoLectureToggle(!memoLectureToggle);
  };
  const [lectureInfo, setLectureInfo] = useState([]);
  const slicedTitle = courseData.title.substring(0, 50) + "...";
  useEffect(() => {
    const getLectureMemo = async () => {
      await fetch(
        `http://${API_SERVER}/api/v1/note/lecture/${info.user_id}/${courseData.course_id}`
      )
        .then((res) => res.json())
        .then((json) => {
          setLectureInfo(json);
        });
    };
    getLectureMemo();
  }, [memoLectureToggle]);

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
      {memoLectureToggle ? (
        lectureInfo.map((lecture) => (
          <MemoItem key={lecture.lectureId} lectureData={lecture} userId={info.user_id}/>
        ))
      ) : null}
    </div>
  );
}
