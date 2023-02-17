import { useState } from "react";
import PlayerQuestionCommentList from "./PlayerQuestionCommentList";
import PlayerQuestionCommentCreate from "./PlayerQuestionCommentCreate";

export default function PlayerQuestionDetail({
  propData,
  clickDetail,
  getCreateComment
}) {
  const dateBase = new Date(propData.publishTime);
  const date = dateBase.toString().substring(0, 21);
  const [commentToggle, setCommentToggle] = useState(false);
  const clickMoreComment = () => {
    setCommentToggle(!commentToggle);
  };
  return (
    <div className="w-full p-5 flex flex-col justify-start items-start overflow-auto scrollbar-none gap-2.5 bg-white border border-[#898989]">
      {/* 맨위 부분, 질문 스터디 공개 여부 X */}
      <div className="w-full flex flex-row justify-between items-end">
        <p className="w-10/12 text-[14px] font-bold text-left text-black">
          {propData.title}
        </p>
        <p
          className="w-2/12 text-[11px] font-bold cursor-pointer hover:text-red-500"
          onClick={clickDetail}
        >
          닫기
        </p>
      </div>
      <p className="text-[9px] text-left text-[#484848]">
        {" "}
        {propData.user.nickname} | {date}
      </p>
      {/* 내용 부분 */}
      <pre className="w-full max-h-[200px] overflow-auto break-all whitespace-pre-wrap font-sans text-[11px] text-left text-black border-t-2 pt-2 scrollbar-none">
        {propData.content}
      </pre>

      <div className="flex justify-center items-center h-0.5 mt-2">
        {!commentToggle ? (
          <div
            className="text-indigo-500 cursor-pointer text-xs"
            onClick={clickMoreComment}
          >
            답변 보기 ▼
          </div>
        ) : (
          <div
            className="text-indigo-500 cursor-pointer text-xs"
            onClick={clickMoreComment}
          >
            답변 접기 ▲
          </div>
        )}
      </div>

      {/* 답변 부분 */}
      {commentToggle ? (
        <div className="w-full">
          <PlayerQuestionCommentCreate questionBoardId={propData.questionBoardId}  getCreateComment={getCreateComment}/>
          <PlayerQuestionCommentList questionBoardComments={propData.questionBoardComments} getCreateComment={getCreateComment}/>
        </div>
      ) : null}
    </div>
  );
}
