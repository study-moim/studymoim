import { useState } from "react";
import { Link } from "react-router-dom";

export default function MainCourse({ propData }) {
  const [isHover, setIsHover] = useState(false);
  const slicedTitle = propData.title.substring(0, 25) + "...";
  const slicedContent = propData.content.substring(0, 100) + "...";

  return (
    <div
      className="relative w-[260px]"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="h-[230px] relative border p-2">
        <img
          src={
            propData.thumbnail !== "path/to/image"
              ? propData.thumbnail
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebJh2gLipfb2bfmUkZSf7U39YW-7jxMH5_A&usqp=CAU"
          }
          className="w-full h-[146px] object-cover"
        />
        <p className="w-full h-[65px] text-[16px] font-bold text-center pt-3">
          {propData.title.length > 24 ? slicedTitle : propData.title}
        </p>
      </div>
      {isHover ? (
        <Link
              to={`/course/${propData.course_id}`}
              state={{
                propData: propData
              }}
        >
          <div className="w-full h-[230px] absolute top-0 bg-neutral-800 opacity-90 cursor-pointer p-5">
            <p className="text-[16px] font-bold text-white">
              {propData.title}
            </p>
            <p className="text-[14px] font-bold text-white mt-2">
              {propData.content.length > 100 ? slicedContent : propData.content}
            </p>
            <p className="text-[14px] font-bold text-white mt-2">
                채널명: {propData.courseProviderName}
            </p> 
          </div>
        </Link>
      ) : null}
    </div>
  );
}
