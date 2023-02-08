import LectureTiny from "./LectureTiny.jsx";

export default function StudyPageLectureList({course, onStudyPlayerStart, state}) {
    return (
        <>
            <div className='overflow-y-scroll'>
                {course.lectures.map((lecture, idx) => (
                    <LectureTiny
                        key={lecture.lectureId}
                        propData={lecture}
                        state={state}
                        lectureIndex={idx + 1}
                        onClick={(lectureId) => {onStudyPlayerStart(lectureId)}}
                    />
                ))}
            </div>
        </>
    );
}