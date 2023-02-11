import { useState } from "react";

export default function Tag({ tag }) {
  return (
    <div
      className={
        "hover:bg-gray-200 min-w-[70px] w-fit flex flex-col justify-center items-center rounded-[5px] px-1 py-1 border"
      }
    >
      <div className="flex justify-center items-center gap-2">
        <img src={tag.imgurl} alt="x" className="w-4 h-4 rounded-full" />

        <p className="text-[13px]">{tag.name_eng}</p>
      </div>
    </div>
  );
}
