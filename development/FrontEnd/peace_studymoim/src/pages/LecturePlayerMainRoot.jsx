import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PlayerMemo from "../components/studyplayer/PlayerMemo";
import PlayerQuestionList from "../components/studyplayer/PlayerQuestionList";
import PlayingVideoFrame from "../components/studyplayer/PlayingVideoFrame";

export default function LecturePlayerMainRoot() {
  ////////////////뒤로가기막기 + 창닫기 새로고침 막기//////////////////////
  const preventClose = (e) => {
    e.preventDefault();
    e.returnValue = ""; //Chrome에서 동작하도록; deprecated
  };
  const preventGoBack = () => {
    history.pushState(null, "", location.href);
  };
  useEffect(() => {
    history.pushState(null, "", location.href);
    window.addEventListener("popstate", preventGoBack);
    return () => {
      window.removeEventListener("popstate", preventGoBack);
      handleCloseDrawer();
    };
  }, []);
  useEffect(() => {
    (() => {
      window.addEventListener("beforeunload", preventClose);
    })();

    return () => {
      window.removeEventListener("beforeunload", preventClose);
    };
  }, []);
  //////////////////////////////////////////////////////////////////////
  
  const navigate = useNavigate();
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

  const [playerInfo, setPlayerInfo] = useState({});

  async function closeLive() {
    if (confirm("라이브를 종료하시겠습니까?") == true) {
      navigate(`/course`);
    }
  }

  return (
    <div className="flex m-5">
      {/* 왼쪽 컴포들 */}
      <div className="flex flex-col justify-start items-start w-11/12 mx-3">
        <div className="w-full flex flex-row justify-between items-center mb-[10px]">
          <div className="text-2xl font-bold text-left text-black">
            {props.title}
          </div>
          <button
            className="text-[16px] font-bold text-center text-[#d15353] cursor-pointer hover:text-[#9a3c3c] hover:scale-105"
            onClick={closeLive}
          >
            종료하기
          </button>
        </div>
        <PlayingVideoFrame videoId={props.videoId} playerSync={playerInfo} />
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
        </div>
        {/* 태그들 안에 큰 네모 */}
        <div className="h-full p-3 bg-white border border-[#898989]">
          {currentClick === "memo" ? (
            <PlayerMemo lectureId={props.lectureId} />
          ) : null}
          {currentClick === "question" ? (
            <PlayerQuestionList lectureId={props.lectureId} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
