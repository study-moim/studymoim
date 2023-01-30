import { useState } from "react";

export default function PlayerQuestionDetail({ clickDetail }) {
  const [commentToggle, setCommentToggle] = useState(false);
  const clickMoreComment = () => {
    setCommentToggle(!commentToggle);
  };
  return (
    <div className="w-full p-5 flex flex-col justify-start items-start overflow-auto gap-2.5 bg-white border border-[#898989]">
      {/* 맨위 부분, 질문 스터디 공개 여부 X */}
      <div className="w-full flex flex-row justify-between items-end">
        <p className="font-bold text-left">
          <span className="text-xl font-bold text-left text-[#7b61ff]">
            질문
          </span>
          <span className="text-base font-bold text-left text-black">
            | 스터디 공개
          </span>
        </p>
        <p
          className="text-[20px] font-bold cursor-pointer hover:text-red-500"
          onClick={clickDetail}
        >
          X
        </p>
      </div>
      <p className="w-full text-xl font-bold text-left text-black">
        피그마가 무엇인가요?
      </p>
      <p className="text-base text-left text-[#484848]">싸피킴 | 2023.01.19</p>
      {/* 내용 부분 */}
      <div className=" h-[200px] overflow-auto text-base text-left text-black border-t-2 pt-2">
        안녕하쇼 내용임다. 얼마나 길어지는지 보죠. 안녕하쇼 내용임다. 얼마나
        길어지는지 보죠. 안녕하쇼 내용임다. 얼마나 길어지는지 보죠. 안녕하쇼
        내용임다. 얼마나 길어지는지 보죠. 안녕하쇼 내용임다. 얼마나 길어지는지
        보죠. 안녕하쇼 내용임다. 얼마나 길어지는지 보죠.
      </div>
      {/* 수정 삭제 */}
      <div className="w-full flex flex-row justify-end gap-[15px] border-b-2 pb-2">
        {/* TODO: 클릭시 내용 부분과 수정 삭제 버튼을 수정폼으로 바꾸기 */}
        <button className="w-[60px]  rounded-[5px] bg-[#f1fd85] text-[17px] font-bold text-center text-black ">
          수정
        </button>
        {/* TODO: 내글만 보이게 하기 */}
        <button className="w-[60px]  rounded-[5px] bg-[#e84e4e] text-[17px] font-bold text-center text-white ">
          삭제
        </button>
      </div>
      {/* TODO: 토글시 위아래로 표시*/}
      <div className="flex justify-center items-center h-0.5">
        {!commentToggle ? (
          <div
            className="text-indigo-500 cursor-pointer"
            onClick={clickMoreComment}
          >
            답변 보기 (답변 수) ▼
          </div>
        ) : (
          <div
            className="text-indigo-500 cursor-pointer"
            onClick={clickMoreComment}
          >
            답변 접기 ▲
          </div>
        )}
      </div>

      {/* 답변 부분 */}
      {commentToggle ? (
        <div className="flex flex-col justify-start items-start relative gap-[15px]">
          <p className="text-xl font-bold text-left text-[#7b61ff]">답변</p>
          <div className="flex flex-col justify-start items-start h-80 overflow-auto gap-2.5">
            <div className="flex flex-col justify-end items-end gap-2.5 p-2.5 rounded-[5px] bg-[#eef]">
              <p className="text-sm font-bold text-left text-black">
                  가자독쥬니 | 2023.01.20
              </p>
              <p className="text-base text-left text-black">
                  안녕하세요 독쥬니입니다.
                  기능을 제대로 넣어서 사용하면 날먹할 수 있어요!
                  남들이 2라고 외칠 때 1이라고 외칠 수 있는 용기!
                  남들이 2라고 외칠 때 1이라고 외칠 수 있는 용기!
                  남들이 2라고 외칠 때 1이라고 외칠 수 있는 용기!
                  남들이 2라고 외칠 때 1이라고 외칠 수 있는 용기!
                  남들이 2라고 외칠 때 1이라고 외칠 수 있는 용기!
              </p>
              {/* TODO: 토글시 답글 작성 폼이 열림 */}
              <p className="h-[15px] text-sm text-left text-black">
                답글 작성
              </p>
            </div>
          </div>

          {/* TODO: Form 으로 바꾸기 */}
          <div className="flex justify-center items-center gap-2.5">
            <div className="flex justify-start items-center h-[30px] relative px-2.5 rounded-[5px] border border-[#7b7474]">
              <p className="text-base text-left text-[#7b7474]">
                질문에 답변을 작성해보세요.
              </p>
            </div>
            <div className="flex justify-center items-center relative gap-2.5 p-2.5 rounded-[5px] bg-[#d2daff]">
              <p className="text-base text-center text-black">등록</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
