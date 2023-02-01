import { Link, useLocation } from "react-router-dom";

export default function LectureShort({ propData, lectureIndex }) {
  return (
    <div className="px-10 w-full h-[180px] flex flex-row justify-between items-center border gap-5">
      <p className="w-1/12 text-3xl font-bold">{lectureIndex}</p>
      <img className="w-4/12 h-full" src={propData.thumbnail} alt="x" />
      <p className="text-2xl font-bold w-6/12">{propData.title}</p>
      <Link
        to={`/player/${propData.lectureId}`}
        state={{
          propData: propData,
        }}
        className="text-3xl pt-1 bg-[#a294fa] text-white text-center w-1/12 h-[50px] rounded-full cursor-pointer"
      >
        ▶
      </Link>
    </div>
  );
}
