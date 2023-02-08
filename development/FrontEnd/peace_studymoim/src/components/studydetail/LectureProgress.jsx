import StudyPageCourseItemSmall from "./StudyPageCourseItemSmall.jsx";
import LectureProgressBars from "./LectureProgressBars.jsx";
import StudyPageLectureList from "./StudyPageLectureList.jsx"
import {useState} from "react";
import useFetch from "../../hooks/useFetch.jsx";

export default function LectureProgress(props) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const [selectedCourse, setSelectedCourse] = useState('');
  async function onCourseClick(course){
    if(selectedCourse!=null && selectedCourse.course_id == course.course_id){
      setSelectedCourse(null);
      return;
    }
    let response = await fetch(`http://${API_SERVER}/api/v1/course/${course.course_id}`);
    let courseDetail = await response.json();
    setSelectedCourse(courseDetail);
  }
  async function onLiveStart(lectureId) {
    let response = await fetch(`http://${API_SERVER}/api/v1/study/${props.state.study.studyId}/live/start?lectureId=${lectureId}`, {method: 'PUT'})
    console.log(response.status)
  }
  return (
    <>
      <div className="flex flex-col justify-center items-start w-full relative overflow-hidden gap-5 p-[3px] bg-[#ebefff]">
        <div className="flex justify-start items-start w-full gap-5 px-5">
          <div className="flex flex-col w-1/2 justify-start items-center flex-grow relative gap-[10px]">
            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-5 mt-8 h-[600px] overflow-auto">
              {props.curricula.map((curriculum) => (
                  <StudyPageCourseItemSmall key={curriculum.order} course={curriculum.course} onClick={onCourseClick}/>
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
          {!selectedCourse ? <LectureProgressBars /> : <StudyPageLectureList course={selectedCourse} state={props.state} onStudyPlayerStart={(lectureId) => onLiveStart(lectureId)}/>}
        </div>
      </div>
    </>
  );
}
