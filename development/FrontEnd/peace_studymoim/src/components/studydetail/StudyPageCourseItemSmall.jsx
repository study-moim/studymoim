import { useState } from "react";
import { Link } from "react-router-dom";

export default function StudyPageCourseItem({ course, onClick, idx }) {
    const [isHover, setIsHover] = useState(false);
    const slicedTitle = course.title.substring(0, 40) + "...";
  
    return (
      <div
        className="relative w-full"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => { onClick(course) }}
      >
        <div className="flex flex-col justify-start items-start relative border-b py-3 hover:bg-gray-100 cursor-pointer">
          {/* <img
            src={
                course.thumbnail !== "path/to/image"
                ? course.thumbnail
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebJh2gLipfb2bfmUkZSf7U39YW-7jxMH5_A&usqp=CAU"
            }
            className="w-full h-[146px] rounded-md"
          /> */}
          <p className="w-full text-[15px]">
            {idx + 1}. {course.title.length > 40 ? slicedTitle : course.title}
          </p>
        </div>
      </div>
    );
  }
  