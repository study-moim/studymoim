import { useState } from "react";

export default function Tag({ tag, isModify }) {
  const [isActive, SetIsActive] = useState(false);
  return (
    <>
      {!isModify ? (
        <div
          className={
            "min-w-[70px] w-fit flex flex-col justify-center items-center rounded-[5px] px-1 py-1 border"
          }
        >
          <div className="flex justify-center items-center gap-2">
            <img src={tag.imgurl} alt="x" className="w-4 h-4 rounded-full" />
            <p className="text-[13px]">{tag.name_eng}</p>
          </div>
        </div>
      ) : (
        <>
          {!isActive ? (
            <button
              onClick={() => {
                SetIsActive(!isActive);
              }}
              className={
                "hover:bg-gray-200 min-w-[70px] w-fit flex flex-col justify-center items-center rounded-[5px] px-1 py-1 border " +
                (isActive && "")
              }
            >
              <div className="flex justify-center items-center gap-2">
                <img src={tag.imgurl} alt="x" className="w-4 h-4 rounded-full" />

                <p className="text-[13px]">{tag.name_eng}</p>
              </div>
            </button>
          ) : (
            <button
              onClick={() => {
                SetIsActive(!isActive);
              }}
              className={
                "shadow-inner hover:bg-gray-100 bg-gray-300 min-w-[70px] w-fit flex flex-col justify-center items-center rounded-[5px] px-1 py-1 border " +
                (isActive && "")
              }
            >
              <div className="flex justify-center items-center gap-2">
                <img src={tag.imgurl} alt="x" className="w-4 h-4 rounded-full" />

                <p className="text-[13px]">{tag.name_eng}</p>
              </div>
            </button>
          )}
        </>
      )}
    </>
  );
}
