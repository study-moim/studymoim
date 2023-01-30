import ChattingWindow from "../components/mailbox/ChattingWindow";
import ChatUser from "../components/mailbox/ChatUser";

export default function MailMainRoot() {
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
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
        </div>

        {/* 우측 대화 창 */}
        {/* TODO: 프롭스 줘야함 */}
        <ChattingWindow />
      </div>
    </div>
  );
}
