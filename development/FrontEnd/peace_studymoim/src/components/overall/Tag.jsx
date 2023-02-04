import { useState } from "react";

export default function Tag({ tag }) {
  const [isActive, SetIsActive] = useState(false);
  return (
    <>
      {!isActive ? (
        <button
          onClick={() => {
            SetIsActive(!isActive);
          }}
          className={
            "flex flex-col justify-center items-center gap-2.5 px-5 py-1.5 rounded-[30px] bg-white border-2 border-[#b1b2ff] hover:scale-95" +
            (isActive && "")
          }
        >
          <div className="flex flex-row justify-evenly items-center w-full gap-1 m-1">
            <img
              src={tag.imgurl}
              alt="x"
              className="w-10 h-10 rounded-[9999px] object-fill"
            />

            <p className="invisible w-0 md:w-auto md:visible text-xl font-bold text-left text-black">
              {tag.name_eng}
            </p>
          </div>
        </button>
      ) : (
        <button
          onClick={() => {
            SetIsActive(!isActive);
          }}
          className={
            "flex flex-col justify-center items-center gap-2.5 px-5 py-1.5 rounded-[30px] bg-[#b1b2ff] border-2 border-[#b1b2ff] hover:scale-95" +
            (isActive && "")
          }
        >
          <div className="flex flex-row justify-evenly items-center w-full gap-1 m-1">
            <img
              src={tag.imgurl}
              alt="x"
              className="w-10 h-10 rounded-[9999px] object-fill"
            />

            <p className="invisible w-0 md:w-auto md:visible text-xl font-bold text-left text-black">
              {tag.name_eng}
            </p>
          </div>
        </button>
      )}
    </>
  );
}
