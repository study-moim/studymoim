import { useState } from "react";
import PlayerQuestionComment from "./PlayerQuestionComment";
import PlayerQuestionCommentCreate from "./PlayerQuestionCommentCreate";

export default function PlayerQuestionDetail({ clickDetail }) {
  const [commentToggle, setCommentToggle] = useState(false);
  const clickMoreComment = () => {
    setCommentToggle(!commentToggle);
  };
  return (
    <div className="w-full p-5 flex flex-col justify-start items-start overflow-auto scrollbar-none gap-2.5 bg-white border border-[#898989]">
      {/* 맨위 부분, 질문 스터디 공개 여부 X */}
      <div className="w-full flex flex-row justify-between items-end">
        <p className="w-10/12 text-[14px] font-bold text-left text-black">
          피그마가 무엇인가요?
        </p>
        <p
          className="w-2/12 text-[11px] font-bold cursor-pointer hover:text-red-500"
          onClick={clickDetail}
        >
          닫기
        </p>
      </div>
      <p className="text-[9px] text-left text-[#484848]">싸피킴 | 2023.01.19</p>
      {/* 내용 부분 */}
      <div className=" max-h-[200px] overflow-auto text-[11px] text-left text-black border-t-2 pt-2 scrollbar-none">
      안녕하쇼 내용임다. 얼마나 길어지는지 보죠. 안녕하쇼 내용임다. 얼마나
        길어지는지 보죠. 안녕하쇼 내용임다. 얼마나 길어지는지 보죠. 안녕하쇼
        내용임다. 얼마나 길어지는지 보죠. 안녕하쇼 내용임다. 얼마나 길어지는지
        보죠. 안녕하쇼 내용임다. 얼마나 길어지는지 보죠.쇼 내용임다. 얼마나 길어지는지
        보죠. 안녕하쇼 내용임다. 얼마나 길어지는지 보죠.쇼 내용임다. 얼마나 길어지는지
        보죠. 안녕하쇼 내용임다. 얼마나 길어지는지 보죠.쇼 내용임다. 얼마나 길어지는지
        보죠. 안녕하쇼 내용임다. 얼마나 길어지는지 보죠.쇼 내용임다. 얼마나 길어지는지
        보죠. 안녕하쇼 내용임다. 얼마나 길어지는지 보죠.쇼 내용임다. 얼마나 길어지는지
        보죠. 안녕하쇼 내용임다. 얼마나 길어지는지 보죠.지 보죠.쇼 내용임다. 얼마나 길어지는지
        보죠. 안녕하쇼 내용임다. 얼마나 길어지는지 보죠.쇼 내용임다. 얼마나 길어지는지
        보죠. 안녕하쇼 내용임다. 얼마나 길어지는지 보죠.지 보죠.쇼 내용임다. 얼마나 길어지는지
        보죠. 안녕하쇼 내용임다. 얼마나 길어지는지 보죠.쇼 내용임다. 얼마나 길어지는지
        보죠. 안녕하쇼 내용임다. 얼마나 길어지는지 보죠.지 보죠.쇼 내용임다. 얼마나 길어지는지
        보죠. 안녕하쇼 내용임다. 얼마나 길어지는지 보죠.쇼 내용임다. 얼마나 길어지는지
        보죠. 안녕하쇼 내용임다. 얼마나 길어지는지 보죠.지 보죠.쇼 내용임다. 얼마나 길어지는지
        보죠. 안녕하쇼 내용임다. 얼마나 길어지는지 보죠.쇼 내용임다. 얼마나 길어지는지
        보죠. 안녕하쇼 내용임다. 얼마나 길어지는지 보죠.
      </div>
      {/* TODO 수정 삭제 기능은 커뮤니티에서만 되게 하기*/}
      {/* <div className="w-full flex flex-row justify-end gap-[15px] border-b-2 pb-2">

        <button className="w-[40px] p-1 rounded-[5px] bg-[#f1fd85] text-[9px] font-bold text-center text-black ">
          수정
        </button>

        <button className="w-[40px] p-1 rounded-[5px] bg-[#e84e4e] text-[9px] font-bold text-center text-white ">
          삭제
        </button>
      </div> */}

      <div className="flex justify-center items-center h-0.5 mt-2">
        {!commentToggle ? (
          <div
            className="text-indigo-500 cursor-pointer text-xs"
            onClick={clickMoreComment}
          >
            답변 보기 (답변 수) ▼
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
          <PlayerQuestionCommentCreate />
          <PlayerQuestionComment />
        </div>
      ) : null}
    </div>
  );
}
