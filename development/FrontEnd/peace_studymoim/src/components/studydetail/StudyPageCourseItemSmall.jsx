import { useState } from "react";
import { Link } from "react-router-dom";

export default function StudyPageCourseItem({ course, onClick, idx }) {
    const [isHover, setIsHover] = useState(false);
  
    return (
      <div
        className="relative w-full"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => { onClick(course) }}
      >
        <div className="flex flex-col justify-start items-start relative border-b py-3 hover:bg-gray-100 cursor-pointer">

          <p className="w-full text-[15px] truncate">
            {idx + 1}. {course.title}
          </p>
        </div>
      </div>
    );
  }
  