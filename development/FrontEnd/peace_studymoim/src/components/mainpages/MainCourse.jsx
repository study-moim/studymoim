import { useState } from "react";
import { Link } from "react-router-dom";

export default function MainCourse({ propData }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="relative w-[260px]"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="h-[230px] relative mb-3">
        <img
          src={
            propData.thumbnail !== "path/to/image"
              ? propData.thumbnail
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebJh2gLipfb2bfmUkZSf7U39YW-7jxMH5_A&usqp=CAU"
          }
          className="w-full h-[146px] object-cover rounded-[15px]"
        />
        <div className="w-full">
          <p className="text-[16px] px-3 pt-3 truncate"> 
            {propData.title}
    
          </p>
          <p className="text-[12px] px-3 py-1">
            {propData.courseProviderName}
          </p>
        </div>
      </div>
      {isHover ? (
        <Link
              to={`/course/${propData.course_id}`}
              state={{
                propData: propData
              }}
        >
          <div className="w-full h-[230px] absolute top-0 bg-neutral-900 opacity-90 rounded-[15px] cursor-pointer p-5">
            <p className="text-[15px] font-bold text-white">
              {propData.title}
            </p>
            <p className="text-[13px] text-white mt-3 truncate">
              {propData.content}
            </p>
            <p className="text-[13px] text-white mt-5">
                채널명: {propData.courseProviderName}
            </p> 
          </div>
        </Link>
      ) : null}
    </div>
  );
}
