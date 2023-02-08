import StudyPageCourseItemSmall from "./StudyPageCourseItemSmall.jsx";
import LectureProgressBars from "./LectureProgressBars.jsx";
import StudyPageLectureList from "./StudyPageLectureList.jsx"
import {useState} from "react";

export default function LectureProgress(props) {
  console.log(props)
  const [selectedCourse, setSelectedCourse] = useState({});
  function onCourseClick(e){
    e.target;
    console.log("click")
  }

  return (
    <>
      <div className="flex flex-col justify-center items-start w-full relative overflow-hidden gap-5 p-[3px] bg-[#ebefff]">
        <div className="flex justify-start items-start w-full gap-5 px-5">

          <div className="flex flex-col w-1/2 justify-start items-center flex-grow relative gap-[10px]">
            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-5 mt-8 h-[600px] overflow-auto">
              {props.curricula.map((curriculum) => (
                  <StudyPageCourseItemSmall key={curriculum.course} propData={curriculum.course} onClick={onCourseClick}/>
              ))}
            </div>
            <div
              className="flex justify-start items-start flex-grow-0 flex-shrink-0 h-[37.33px] relative gap-2.5 px-3.5 py-[11px] rounded-[14px] bg-[#ffe3ba]"
              style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
            >
              <p className="flex-grow-0 flex-shrink-0 text-xl text-left text-black">
                실시간 스터디 시작
              </p>
            </div>
          </div>
        <StudyPageLectureList course={selectedCourse}/>
        <LectureProgressBars />
        </div>
      </div>
    </>
  );
}
