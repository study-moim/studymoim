import { useState } from "react";
import PlayerQuestionDetail from "./PlayerQuestionDetail";

export default function PlayerQuestion({ propData, lectureId,getCreateComment }) {
  const cutTitle = propData.title.substring(0, 18) + "...";
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
          <div className="h-[30px] text-[14px] font-bold text-center text-black">
            {cutTitle}
          </div>
        </div>
      ) : (
        <PlayerQuestionDetail
          clickDetail={clickDetail}
          propData={propData}
          lectureId={lectureId}
          getCreateComment={getCreateComment}
        />
      )}
    </>
  );
}
