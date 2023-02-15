import StudyPageCourseItemSmall from "./StudyPageCourseItemSmall.jsx";
import StudyPageLectureList from "./StudyPageLectureList.jsx";
import { useState } from "react";

export default function LectureProgress(props) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const [selectedCourse, setSelectedCourse] = useState("");

  async function onCourseClick(course) {
    if (
      selectedCourse != null &&
      selectedCourse.course_id == course.course_id
    ) {
      setSelectedCourse(null);
      return;
    }
    let response = await fetch(
      `http://${API_SERVER}/api/v1/course/${course.course_id}`
    );
    let courseDetail = await response.json();
    setSelectedCourse(courseDetail);
  }

  async function onLiveStart(lectureId) {
    console.log("tttttttttttttttttttttttttttttttttttttttttttttttt")
    let response = await fetch(
      `http://${API_SERVER}/api/v1/study/${props.state.study.studyId}/live/start?lectureId=${lectureId}`,
      { method: "PUT" }
    );
  }

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 justify-center items-center">

          {props.curricula.map((curriculum) => (
              <StudyPageCourseItemSmall
                key={curriculum.order}
                course={curriculum.course}
                onClick={onCourseClick}
              />
          ))}


        {selectedCourse && (
          <StudyPageLectureList
            course={selectedCourse}
            state={props.state}
            onStudyPlayerStart={(lectureId) => onLiveStart(lectureId)}
          />
        )}
      </div>
    </>
  );
}