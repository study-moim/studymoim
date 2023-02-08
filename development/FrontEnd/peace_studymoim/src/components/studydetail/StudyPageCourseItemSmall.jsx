import { useState } from "react";
import { Link } from "react-router-dom";

export default function StudyPageCourseItem({ course, onClick }) {
    const [isHover, setIsHover] = useState(false);
    const slicedTitle = course.title.substring(0, 25) + "...";
  
    return (
      <div
        className="relative w-[170px]"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => { onClick(course) }}
      >
        <div className="flex flex-col justify-start items-center h-[180px] relative gap-2 bg-white shadow-lg rounded-md">
          <img
            src={
                course.thumbnail !== "path/to/image"
                ? course.thumbnail
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebJh2gLipfb2bfmUkZSf7U39YW-7jxMH5_A&usqp=CAU"
            }
            className="w-full h-[146px] object-cover"
          />
          <p className="w-[120px] h-[50px] text-xs font-bold text-left text-black">
            {course.title.length > 24 ? slicedTitle : course.title}
          </p>
        </div>
      </div>
    );
  }
  