import { useState } from "react";
import { Link } from "react-router-dom";

export default function StudyPageCourseItem({ propData }) {
    const [isHover, setIsHover] = useState(false);
    const slicedTitle = propData.title.substring(0, 25) + "...";
  
    return (
      <div
        className="relative w-[170px]"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="flex flex-col justify-start items-center h-[180px] relative gap-2 bg-white shadow-lg rounded-md">
          <img
            src={
              propData.thumbnail !== "path/to/image"
                ? propData.thumbnail
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebJh2gLipfb2bfmUkZSf7U39YW-7jxMH5_A&usqp=CAU"
            }
            className="w-full h-[146px] object-cover"
          />
          <p className="w-[120px] h-[50px] text-xs font-bold text-left text-black">
            {propData.title.length > 24 ? slicedTitle : propData.title}
          </p>
        </div>
      </div>
    );
  }
  