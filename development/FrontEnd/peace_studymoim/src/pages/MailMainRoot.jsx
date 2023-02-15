import ChatUser from "../components/mailbox/ChatUser";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import ChattingWindow from "../components/mailbox/ChattingWindowPage";

export default function MailMainRoot() {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const userInfo = useFetch(`http://${API_SERVER}/api/v1/user/1/message`);
  const [userChat, setUserChat] = useState(null);
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div
        className="md:flex-row
      flex flex-col h-[700px] justify-start items-start my-10
      "
      >
        {/* 좌측 대화 상대 목록 */}
        <div
          className="md:w-4/12 md:h-full md:flex-col
        w-full mt-4 mr-3 overflow-x-auto h-[130px] flex flex-row
        "
        >
          {/* TODO: 프롭스 주면서 map 돌려야함 */}
          {userInfo.map((user) => (
            <div onClick={() => setUserChat(user.userId)}>
              <ChatUser key={user.userId} propData={user} />
            </div>
          ))}
        </div>

        {/* 우측 대화 창 */}
        {/* TODO: 프롭스 줘야함 */}
        <ChattingWindow text={userChat} /> 
      </div>
    </div>
  );
}
