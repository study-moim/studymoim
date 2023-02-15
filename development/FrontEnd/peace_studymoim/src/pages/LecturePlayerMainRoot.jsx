import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PlayerMemo from "../components/studyplayer/PlayerMemo";
import PlayerQuestionList from "../components/studyplayer/PlayerQuestionList";
import PlayingVideoFrameSolo from "../components/studyplayer/PlayingVideoFrameSolo";
import userInfo from "../zustand/store";

export default function LecturePlayerMainRoot() {
  ////////////////뒤로가기막기 + 창닫기 새로고침 막기//////////////////////
  const preventClose = (e) => {
    e.preventDefault();
    e.returnValue = ""; //Chrome에서 동작하도록; deprecated
  };
  const preventGoBack = () => {
    history.pushState(null, "", location.href);
    alert("종료하기를 눌러주세요 :D");
  };

  // 브라우저에 렌더링 시 한 번만 실행하는 코드
  useEffect(() => {
    (() => {
      history.pushState(null, "", location.href);
      window.addEventListener("popstate", preventGoBack);
    })();

    return () => {
      window.removeEventListener("popstate", preventGoBack);
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
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const { info } = userInfo();
  /////////////////////////---HISTORY---////////////////////////////
  const [enterPlayer, setEnterPlayer] = useState(false);
  const [nowVideo, setNowVideo] = useState(0);
  const [startVideo, setStartVideo] = useState(0);
  // 입장 get
  useEffect(() => {
    const getHistory = async () => {
      await fetch(
        `http://${API_SERVER}/api/v1/video/user/${info.userId}/${props.lectureId}`
      ).then(res => res.json()).then(data=>setStartVideo(data));
    };
    getHistory();
  }, [enterPlayer]);
  // 퇴장 put
  const putHistory = async () => {
    await fetch(
      `http://${API_SERVER}/api/v1/video/user/${info.userId}/${props.lectureId}/${Math.round(nowVideo*1)}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  /////////////////////////------------////////////////////////////

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

  async function closeLive() {
    if (confirm("라이브를 종료하시겠습니까?") == true) {
      putHistory()
      navigate(`/course`);
    }
  }

  return (
    <div className="flex m-5 h-[90vh]">
      {/* 왼쪽 컴포들 */}
      <div className="flex flex-col justify-start items-start w-11/12 mx-3">
        <div className="w-full flex flex-row justify-between items-center mb-[10px]">
          <div className="text-2xl font-bold text-left text-black">
            {props.title}
          </div>
          <button
            className="text-[20px] font-bold text-center text-[#d15353] cursor-pointer hover:text-[#9a3c3c] hover:scale-105"
            onClick={closeLive}
          >
            종료하기
          </button>
        </div>
        <PlayingVideoFrameSolo
          videoId={props.videoId}
          setNowVideo={setNowVideo}
          startVideo={startVideo}
        />
      </div>
      {/* 오른쪽 컴포들 */}
      <div className="flex flex-col w-[400px] h-full">
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
        <div className="h-full w-[400px] p-3 bg-white border border-[#898989]">
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
