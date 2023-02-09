import { Link } from "react-router-dom";

export default function LectureTiny({
  propData,
  lectureIndex,
  onClick,
  state,
}) {
  return (
    <Link
      to={`/study/player/${propData.lectureId}`}
      state={{
        user: state.user,
        study: state.study,
        videoId: propData.videoId,
        videoInfo: propData,
      }}
      className="cursor-pointer w-full"
    >
      <div
        className="w-full h-[50px] flex flex-row items-center gap-2 py-2 hover:bg-gray-200 hover:rounded-[15px]"
        onClick={() => {
          onClick(propData.lectureId);
        }}
      >
        <p className="w-[2%] px-5 text-base text-center">{lectureIndex}</p>
        <img
          className="w-[10%] h-full rounded-[10px]"
          src={propData.thumbnail}
          alt="x"
        />
        <p className="w-[65%] text-base">{propData.title}</p>
      </div>
    </Link>
  );
}
