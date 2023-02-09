import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function LectureShort({ propData, lectureIndex, courseId }) {
  return (
    <Link
      to={`/player/${propData.lectureId}`}
      state={{
        propData: propData,
        courseId: courseId,
      }}
      className="cursor-pointer w-full"
    >
      <div className="w-full h-[100px] flex flex-row items-center gap-2 py-2 hover:bg-gray-200 hover:rounded-[15px]">
        <p className="w-[2%] px-5 text-base text-center">{lectureIndex}</p>
        <img
          className="w-[23%] h-full rounded-[15px]"
          src={propData.thumbnail}
          alt="x"
        />
        <p className="w-[65%] text-base">{propData.title}</p>
        <FontAwesomeIcon
          icon={faCirclePlay}
          size="2x"
          color="#b1b2ff"
          className="w-[10%]"
        />
      </div>
    </Link>
  );
}
