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
            "hover:bg-gray-200 min-w-[80px] w-fit flex flex-col justify-center items-center rounded-[10px] px-3 py-2 border " +
            (isActive && "")
          }
        >
          <div className="flex justify-center items-center gap-2">
            <img
              src={tag.imgurl}
              alt="x"
              className="w-5 h-5 rounded-full"
            />

            <p className="text-base font-bold">
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
            "shadow-inner hover:bg-gray-200 bg-gray-300  min-w-[80px] w-fit flex flex-col justify-center items-center rounded-[10px] px-3 py-2 border " +
            (isActive && "")
          }
        >
          <div className="flex justify-center items-center gap-2">
            <img
              src={tag.imgurl}
              alt="x"
              className="w-5 h-5 rounded-full"
            />

            <p className="text-base font-bold">
              {tag.name_eng}
            </p>
          </div>
        </button>
      )}
    </>
  );
}
