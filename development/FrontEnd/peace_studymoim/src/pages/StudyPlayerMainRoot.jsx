// TODO: 이거보고 하기..
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";
import PlayerMemo from "../components/studyplayer/PlayerMemo";
import PlayerQuestionList from "../components/studyplayer/PlayerQuestionList";
import PlayingVideoFrame from "../components/studyplayer/PlayingVideoFrame";
import Stomp from "stompjs";
import userInfo from "../zustand/store";

export default function StudyPlayerMainRoot() {
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

  const props = useLocation().state;
  let study = props.study;
  let user = props.user;
  const [currentClick, setCurrentClick] = useState("memo");
  const [prevClick, setPrevClick] = useState(null);
  // 누르면 메모/질문/채팅 색이 바뀜
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

  /*
   * 웹소켓 사용법
   * 1. connect로 http://localhost:8080/ws에 접속
   * 2. 메시지를 보내는 사용자는 http://localhost:8080/ws/pub/chat으로 메시지 전송할 수 있음.
   *    사용자 정보, 스터디 ID, 메시지를 포함하여 전송하면 됨. sendMessage 함수 참고.
   * 3. http://localhost:8080/ws/sub/study/{스터디ID} 에서 subscribe를 하고있는 사용자들은 보낸 메시지를 받을 수 있음.
   *    connect() 메소드 내의 stompClient.subscribe 메소드 참고.
   * 4. 채팅을 나가려면 disconnect 함수 호출
   * */
  ////////////////////////////////////////////웹소켓 부스러기///////////////////////////////////////////
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const navigate = useNavigate();
  const [chattings, setChattings] = useState([]);
  function changeChattings(message) {
    chattings.push(message);
    setChattings([...chattings]);
  }
  const messageRef = useRef(null);

  /////////////////////////---HISTORY---////////////////////////////
  const [enterPlayer, setEnterPlayer] = useState(false);
  const [nowVideo, setNowVideo] = useState(0);
  const [startVideo, setStartVideo] = useState(0);
  const { info } = userInfo();
  // 입장 get
  useEffect(() => {
    const getHistory = async () => {
      await fetch(
        `http://${API_SERVER}/api/v1/video/study/${study.studyId}/${props.lectureId}`
      )
        .then((res) => res.json())
        .then((data) => {
          setStartVideo(data);
        });
    };
    const getHistory2 = async () => {
      await fetch(
        `http://${API_SERVER}/api/v1/video/user/${info.userId}/${props.lectureId}`
      ).then(res => res.json()).then(data=>setStartVideo(data));
    };
    getHistory2();
    getHistory();
  }, [enterPlayer]);
  // 퇴장 put
  const putHistory = () => {
    fetch(
      `http://${API_SERVER}/api/v1/video/study/${study.studyId}/${
        props.lectureId
      }/${Math.round(nowVideo * 1)}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    fetch(
      `http://${API_SERVER}/api/v1/video/user/${info.userId}/${
        props.lectureId
      }/${Math.round(nowVideo * 1)}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  /////////////////////////------------////////////////////////////

  let stomp = Stomp.client(`ws://${API_SERVER}/ws`);

  useEffect(() => {
    fetch(`http://${API_SERVER}/api/v1/study/${study.studyId}/live/start/`, {method : "PUT"})
    connect(study.studyId);
    return async () => {
      // await fetch(`http://${API_SERVER}/api/v1/study/${study.studyId}/live/end/`,
      // {
      //   method: "PUT",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // }
      // )
      disconnect();
    };
  }, []);

  async function connect(studyId) {
    //client 객체 생성 및 서버주소 입력
    await stomp.connect(
      { "user-id": user.userId, "study-id": study.studyId },
      function (frame) {
        stomp.subscribe(`/sub/study/${studyId}`, receive);
      }
    );
  }
  async function disconnect() {
    console.log("dddddddddddddddddddddddisconnect")
    await stomp.disconnect(() => {}, {
      "user-id": user.userId,
      "study-id": study.studyId,
    });
  }
  async function closeLive() {
    if (confirm("라이브를 종료하시겠습니까?") == true) {
      putHistory();
      // test
      let response = await fetch(
        `http://${API_SERVER}/api/v1/study/${study.studyId}/live/end`,
        { method: "PUT" }
      );
      console.log(response.status);
      navigate(`/studyDetail/${study.studyId}`);
    }
  }
  function clearInput() {
    const inputTag = document.getElementById("ipt");
    inputTag.value = null;
  }

  ////////////////////////////////////////////유튜브 싱크 맞추기///////////////////////////////////////////
  const [playerInfo, setPlayerInfo] = useState({});

  const videoFrameConductor = {
    onStateChange(playerInfo) {
      const newPlayerInfo = {
        type: playerInfo.type,
        currentTime: playerInfo.currentTime,
        playbackRate: playerInfo.playbackRate,
        playerState: playerInfo.playerState,
      };
      setPlayerInfo(newPlayerInfo);
      sendPlayerSync(newPlayerInfo);
    },
  };
  ////////////////////////////////////////////유튜브 싱크 맞추기 끝///////////////////////////////////////////

  function sendMessage() {
    if (messageRef.current.value.length < 1) {
      return;
    }
    const data = {
      type: "CHAT",
      studyId: study.studyId,
      sender: user.nickname,
      payload: messageRef.current.value,
    };
    //예시 - 데이터 보낼때 json형식을 맞추어 보낸다.
    stomp.send("/pub/chat", {}, JSON.stringify(data));
    clearInput();
  }
  function sendPlayerSync(playerSync) {
    const data = {
      type: "SYNC",
      studyId: study.studyId,
      userId: user.userId,
      sender: user.nickname,
      payload: playerSync,
    };
    //예시 - 데이터 보낼때 json형식을 맞추어 보낸다.
    stomp.send("/pub/sync", {}, JSON.stringify(data));
  }
  function receive(data) {
    data = JSON.parse(data.body);
    if (data.type == "CHAT") {
      const newMessage = data;
      changeChattings(newMessage);
    } else if (data.type == "SYNC") {
      const newSync = data.payload;
      setPlayerInfo(newSync);
    }
  }
  ////////////////////////////////////////////웹소켓 부스러기 끝///////////////////////////////////////////
  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      sendMessage();
    }
  };
  const scrollRef = useRef();
  useEffect(() => {
    if (scrollRef && scrollRef.current) {
      // scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
      // const chatDiv = document.getElementById("qqq");
      // chatDiv.scrollTop = chat.scrollHeight;
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
    // scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [chattings]);

  return (
    <div className="flex m-5 h-[90vh]">
      {/* 왼쪽 컴포들 */}
      <div className="flex flex-col justify-start items-start w-11/12 mx-3">
        <div className="w-full flex flex-row justify-between items-center mb-[10px]">
          <div className="text-2xl font-bold text-left text-black">
            {props.videoInfo.title}
          </div>
          <button
            className="text-[16px] font-bold text-center text-[#d15353] cursor-pointer hover:text-[#9a3c3c] hover:scale-105"
            onClick={closeLive}
          >
            종료하기
          </button>
        </div>
        <PlayingVideoFrame
          videoId={props.videoId}
          playerSync={playerInfo}
          eventHandler={videoFrameConductor}
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
          {currentClick === "memo" ? (
            <PlayerMemo lectureId={props.videoInfo.lectureId} />
          ) : null}
          {currentClick === "question" ? (
            <PlayerQuestionList lectureId={props.videoInfo.lectureId} />
          ) : null}
          {currentClick === "chat" ? (
            <div className="h-full w-full">
              <div className="mb-2 w-full">
                <input
                  id="ipt"
                  className="border w-[200px] h-10 mr-1 rounded-lg pl-2"
                  placeholder="채팅입력"
                  type="text"
                  ref={messageRef}
                  required
                  onKeyPress={onKeyPress}
                />
                <button
                  onClick={() => {
                    sendMessage();
                  }}
                  className="w-[50px] border py-1 px-2 rounded-lg hover:bg-slate-100 hover:scale-95 drop-shadow-sm shadow"
                >
                  전송
                </button>
              </div>
              <div
                id="qqq"
                ref={scrollRef}
                className="text-black text-[20px] border overflow-auto px-2 h-5/6 scrollbar-thin scrollbar-thumb-violet-200"
              >
                {chattings.map((chat) => (
                  <div className="text-xs flex flex-row w-full">
                    {chat.sender === user.nickname ? (
                      <div className="flex justify-end w-full">
                        <p className="bg-yellow-200 rounded-md p-1 m-1">
                          {chat.payload}
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-col justify-start">
                        <p>{chat.sender}</p>
                        <p className="bg-slate-200 rounded-md p-1 m-1">
                          {chat.payload}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
