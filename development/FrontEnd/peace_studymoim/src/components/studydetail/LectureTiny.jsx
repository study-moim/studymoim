import { Link } from "react-router-dom";

export default function LectureTiny({
  propData,
  lectureIndex,
  onClick,
  state,
}) {
  return (
    <Link
    // live ... 
      to={state.study.live ? "#" : `/player/study/${propData.lectureId}`}
      state={{
        user: state.user,
        study: state.study,
        videoId: propData.videoId,
        videoInfo: propData,
        lectureId: propData.lectureId
      }}
      className="cursor-pointer w-full"
    >
      <div
        className="w-full h-[50px] flex flex-row items-center gap-2 py-2 hover:bg-gray-200 hover:rounded-[15px]"
        onClick={() => {
          onClick(propData.lectureId);
        }}
      >
        <p className="w-[2%] px-5 text-[15px] text-center">{lectureIndex}</p>
        <p className="w-full text-[15px]">{propData.title}</p>
      </div>
    </Link>
  );
}
