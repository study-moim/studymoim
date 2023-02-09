import { useState } from "react";
import PlayerQuestionDetail from "./PlayerQuestionDetail";

export default function PlayerQuestion({ propData, lectureId }) {
  const cutTitle = propData.title.substring(0, 8) + "...";
  const [detailToggle, setDetailToggle] = useState(false);
  const clickDetail = () => {
    setDetailToggle(!detailToggle);
  };

  return (
    <>
      {!detailToggle ? (
        <div
          onClick={clickDetail}
          className="w-full flex justify-between items-center h-[40px] relative gap-[18px] rounded-[15px] border px-[20px] border-[#b1b2ff] cursor-pointer hover:scale-105"
        >
          <p className="h-[30px] text-[16px] font-bold text-center text-[#bd6ffc]">
            {propData.time}
          </p>
          <p className="h-[30px] text-[16px] font-bold text-center text-black">
            {cutTitle}
          </p>
        </div>
      ) : (
        <PlayerQuestionDetail clickDetail={clickDetail} />
      )}
    </>
  );
}
