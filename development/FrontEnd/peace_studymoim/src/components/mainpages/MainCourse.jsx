import { useState } from "react";
import { Link } from "react-router-dom";

export default function MainCourse({ propData }) {
  const [isHover, setIsHover] = useState(false);
  const slicedTitle = propData.title.substring(0, 25) + "...";

  return (
    <div
      className="relative w-[234px]"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="flex flex-col justify-start items-center h-[245px] relative gap-4 bg-white shadow-lg rounded-md">
        <img
          src={
            propData.thumbnail !== "path/to/image"
              ? propData.thumbnail
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebJh2gLipfb2bfmUkZSf7U39YW-7jxMH5_A&usqp=CAU"
          }
          className="w-full h-[146px] object-cover"
        />
        <p className="w-[209px] h-[65px] text-xl font-bold text-left text-black">
          {propData.title.length > 24 ? slicedTitle : propData.title}
        </p>
      </div>
      {isHover ? (
        <div className="w-full h-[245px] absolute top-0 bg-neutral-800 opacity-90">
          <div className="h-full flex flex-col justify-between items-center pt-2">
            <Link
              to={`/course/${propData.course_id}`}
              state={{
                propData: propData
              }}
            >
              <p className="w-[209px] h-[60px] text-xl font-bold text-left text-white cursor-pointer hover:scale-105 hover:text-[#9a71fa]">
                {propData.title}
              </p>
            </Link>
            <div className="flex justify-center items-center mb-5">
              <p className="w-full h-fit text-base font-bold text-left mt-3 text-white">
                채널명: {propData.courseProviderName}
              </p>
              {/* <img src="/figma.png" alt="x" className="w-[70px] h-[70px] mt-3 rounded-full cursor-pointer hover:scale-105" /> */}
              {/* <p className="left-0 bottom-0 text-4xl text-red-700 cursor-pointer hover:scale-105 hover:skew-y-12">
                ♥
              </p> */}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
