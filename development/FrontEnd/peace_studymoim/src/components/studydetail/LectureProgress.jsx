import StudyPageCourseItemSmall from "./StudyPageCourseItemSmall.jsx";
import StudyPageLectureList from "./StudyPageLectureList.jsx";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faVideo } from "@fortawesome/free-solid-svg-icons";

export default function LectureProgress(props) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const [selectedCourse, setSelectedCourse] = useState(props.curricula[0].course);

  async function onCourseClick(course) {
    let response = await fetch(
      `http://${API_SERVER}/api/v1/course/${course.course_id}`
    );
    let courseDetail = await response.json();
    setSelectedCourse(courseDetail);
  }

  async function onLiveStart(lectureId) {
    let response = await fetch(
      `http://${API_SERVER}/api/v1/study/${props.state.study.studyId}/live/start?lectureId=${lectureId}`,
      { method: "PUT" }
    );
  }

  return (
    <>
      <div className="w-full flex flex-row mx-auto justify-start items-start gap-2">
        <div className="w-5/12">
          <p className="text-[18px] font-bold pb-5">
            <FontAwesomeIcon icon={faBars}/>&nbsp;&nbsp;강좌</p>
            <div className="h-[500px] overflow-auto scrollbar-thin scrollbar-thumb-violet-200">
          {props.curricula.map((curriculum, idx) => (
            <StudyPageCourseItemSmall
             idx={idx}
              key={curriculum.order}
              course={curriculum.course}
              onClick={onCourseClick}
            />
          ))}

            </div>
        </div>
        <div className="w-7/12">
            <p className="text-[18px] font-bold pb-5 pl-4">
            <FontAwesomeIcon icon={faVideo}/>&nbsp;&nbsp;강의를 눌러 실시간 스터디를 시작하세요</p>
        {selectedCourse && (
            <StudyPageLectureList
              course={selectedCourse}
              state={props.state}
              onStudyPlayerStart={(lectureId) => onLiveStart(lectureId)}
              live={props.live}
            />
        )}
        </div>
      </div>
    </>
  );
}
