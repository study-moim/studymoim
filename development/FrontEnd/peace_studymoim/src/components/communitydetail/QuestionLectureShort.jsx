import { Link } from "react-router-dom";

export default function QuestionLectureShort({ lecture }) {
  if (!lecture) {
    return null;
  }
  return (
    <>
      <Link
        to={`/player/${lecture.lectureId}`}
        state={{
          propData: lecture,
          courseId: 1,
        }}
        className="cursor-pointer w-9/12"
        data-tooltip-target="tooltip-lecture"
      >
        <div className="w-full h-[100px] flex flex-row items-center gap-2 py-2 hover:bg-indigo-100">
          <img
            className="w-[18%] h-full rounded-[15px]"
            src={lecture.thumbnail}
            alt="x"
          />
          <div className="flex flex-col w-[65%]">
            <p className="w-full text-base font-bold">강의 보러가기</p>
            <p className="w-full text-base">{lecture.title}</p>
            <p className="w-full text-[8pt]">
              {lecture.content.substring(0, 80) + "..."}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
