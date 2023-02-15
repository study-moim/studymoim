import LectureTiny from "./LectureTiny.jsx";

export default function StudyPageLectureList({
  course,
  onStudyPlayerStart,
  state,
  live,
}) {
  return (
    <>
      <div className="overflow-y-scroll scrollbar-thin scrollbar-thumb-violet-200">
        {course.lectures.map((lecture, idx) => (
          <LectureTiny
            key={lecture.lectureId}
            propData={lecture}
            state={state}
            lectureIndex={idx + 1}
            onClick={(lectureId) => {
              onStudyPlayerStart(lectureId);
            }}
            live={live}
          />
        ))}
      </div>
    </>
  );
}
