// TODO: 이거보고 하기..
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import PlayerMemo from "../components/studyplayer/PlayerMemo";
import PlayerNowChat from "../components/studyplayer/PlayerNowChat";
import PlayerQuestionList from "../components/studyplayer/PlayerQuestionList";
import PlayingVideoFrame from "../components/studyplayer/PlayingVideoFrame";

export default function StudyPlayerMainRoot() {
  const props = useLocation().state.propData;

  const [currentClick, setCurrentClick] = useState("memo");
  const [prevClick, setPrevClick] = useState(null);
  // 누르면 전체/강의/자유 색이 바뀜
  const GetClick = (event) => {
    setCurrentClick(event.target.id);
  };

  useEffect(
    (e) => {
      if (currentClick !== null) {
        let current = document.getElementById(currentClick);
        current.style.backgroundColor = "#8871f9";
      }
      if (prevClick !== null) {
        let prev = document.getElementById(prevClick);
        prev.style.backgroundColor = "#b1b2ff";
      }
      setPrevClick(currentClick);
    },
    [currentClick]
  );
  return (
    <div className="flex m-5">
      {/* 왼쪽 컴포들 */}
      <div className="flex flex-col justify-start items-start w-11/12 mx-3">
        <div className="w-full flex flex-row justify-between items-center mb-[10px]">
          <div className="text-2xl font-bold text-left text-black">
            오쌤의 피그마 강좌
          </div>
          <div className="text-xl font-bold text-right text-black cursor-pointer hover:text-[#b1b2ff] hover:scale-105">
            강의 설명이 보이는 부분 ▼
          </div>
        </div>
        <PlayingVideoFrame videoId={props.videoId}/>

        <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[185px] px-5 pt-2">
          <p className="text-[16px] font-bold text-center text-black cursor-pointer hover:text-[#b1b2ff] hover:scale-105">
            &lt; 이전 강의
          </p>
          <p className="text-[16px] font-bold text-center text-black cursor-pointer hover:text-[#b1b2ff] hover:scale-105">
            종료하기
          </p>
          <p className="text-[16px] font-bold text-center text-black cursor-pointer hover:text-[#b1b2ff] hover:scale-105">
            다음 강의 &gt;
          </p>
        </div>
      </div>
      {/* 오른쪽 컴포들 */}
      <div className="flex flex-col w-[400px] h-[700px]">
        {/* 메모 커뮤 실시간 */}
        <div className="flex justify-start items-start w-full">
          <button
            id="memo"
            onClick={GetClick}
            className="w-4/12 rounded-tl-[13px] rounded-tr-[13px] bg-[#b1b2ff] border-2 border-[#b1b2ff] text-[15px] font-bold text-center text-white"
          >
            메모
          </button>
          <button
            id="question"
            onClick={GetClick}
            className="w-4/12 rounded-tl-[13px] rounded-tr-[13px] bg-[#b1b2ff] border-2 border-[#b1b2ff] text-[15px] font-bold text-center text-white"
          >
            질문목록
          </button>
          <button
            id="chat"
            onClick={GetClick}
            className="w-4/12 rounded-tl-[13px] rounded-tr-[13px] bg-[#b1b2ff] border-2 border-[#b1b2ff] text-[15px] font-bold text-center text-white"
          >
            실시간 채팅
          </button>
        </div>
        {/* 태그들 안에 큰 네모 */}
        <div className="h-full p-3 bg-white border border-[#898989]">
          {currentClick === "memo" ? <PlayerMemo /> : null}
          {currentClick === "question" ? <PlayerQuestionList /> : null}
          {currentClick === "chat" ? <PlayerNowChat /> : null}
        </div>
      </div>
    </div>
  );
}
