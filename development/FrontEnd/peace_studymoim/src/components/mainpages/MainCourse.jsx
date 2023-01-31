import { useState } from "react";

export default function MainCourse({propData}) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="relative w-[234px]"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="flex flex-col justify-start items-center h-[245px] relative gap-4 bg-white shadow-lg rounded-md">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebJh2gLipfb2bfmUkZSf7U39YW-7jxMH5_A&usqp=CAU"
          className="w-full h-[146px] object-cover"
        />
        <p className="w-[209px] h-[65px] text-xl font-bold text-left text-black">
          {propData.title}
        </p>
      </div>
      {isHover ? (
        <div className="w-full h-[245px] absolute top-0 bg-neutral-800 opacity-90">
          <div className="flex flex-col justify-center items-center pt-2">
            <p className="w-[209px] h-[60px] text-xl font-bold text-left text-white cursor-pointer hover:scale-105">
              {propData.title}
            </p>
            <p className=" w-[209px] h-[40px] text-base font-bold text-left text-white">
              {propData.courseProvider.name}
            </p>
            <p className="w-[209px] h-[20px] text-sm text-left text-white">
              강의1 제목
            </p>
            <p className="w-[209px] h-[20px] text-sm text-left text-white">
              강의2 제목
            </p>
            <div className="flex justify-center items-center gap-5">
              <img src="/figma.png" alt="x" className="w-[70px] h-[70px] mt-3 rounded-full cursor-pointer hover:scale-105" />
              <p className="text-4xl text-red-700 cursor-pointer hover:scale-105 hover:skew-y-12">♥</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
