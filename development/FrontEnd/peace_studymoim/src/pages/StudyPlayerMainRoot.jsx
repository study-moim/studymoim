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

  ////////////////////////////////////////////웹소켓 부스러기///////////////////////////////////////////
  let stompClient = null;
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  ///// 더미데이터 /////
  let studyId = 1;
  let user = {
    userId: 1,
    nickname: "이태희"
  };
  ///// 더미데이터 끝 /////
  const publisherProps = { // 메시지를 보내기 위해 PlayerNow 컴포넌트에 전달되는 props
    type: "",
    userId: user.userId,
    studyId: studyId,
    message: message,
    sendMessage,
    receiveMessage
  }
  /*
  * 웹소켓 사용법
  * 1. connect로 http://localhost:8080/ws에 접속
  * 2. 메시지를 보내는 사용자는 http://localhost:8080/ws/pub/chat으로 메시지 전송할 수 있음.
  *    사용자 정보, 스터디 ID, 메시지를 포함하여 전송하면 됨. sendMessage 함수 참고.
  * 3. http://localhost:8080/ws/sub/study/{스터디ID} 에서 subscribe를 하고있는 사용자들은 보낸 메시지를 받을 수 있음.
  *    connect() 메소드 내의 stompClient.subscribe 메소드 참고.
  * 4. 채팅을 나가려면 disconnect 함수 호출
  * */
  function connect(userId, studyId) { // 소켓 연결시 호출되어야 하는 메소드
    var socket = new SockJS(`http://${API_SERVER}/ws`);
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
      setConnected(true);
      console.log('Connected: ' + frame);
      stompClient.subscribe(`/sub/study/${studyId}`, receiveMessage);
    });
  }
  function disconnect() { // 소켓 연결 종료시 호출되어야 하는 메소드
    if (stompClient !== null) {
      stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
  }
  function sendMessage(studyId, sender, message) { // 메시지 전송시 호출되어야 하는 메소드
    stompClient.send("/pub/chat", {}, JSON.stringify({
      "type": "",
      "sender": sender,
      "studyId": studyId,
      "message": message
    }));
  }
  function receiveMessage(payload) { // 메시지 수신시 호출되는 메소드
    console.log(payload);
  }
  ////////////////////////////////////////////웹소켓 부스러기 끝///////////////////////////////////////////

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
          {currentClick === "chat" ? <PlayerNowChat{publisherProps} /> : null}
        </div>
      </div>
    </div>
  );
}
