import OtherChatting from "./OtherChatting";
import MyChatting from "./MyChatting";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function ChattingWindow(props) {
  return (
    <div className="md:w-full w-full h-full flex flex-col border border-[#B1B2FF] p-5 m-5 rounded-l">
    {/* 상대방과 나의 대화 불러오기 */}
    <div className="h-full">
      <OtherChatting text={props.text}/>
      <MyChatting text={props.text} />

    </div>
    {/* 대화 인풋박스 */}
    <form className="w-full relative h-[50px] border border-slate-500 bg-white rounded-[30px] flex ">
      <button className="absolute right-0 bg-[#B1B2FF] rounded-full w-[30px] h-[30px] my-[7px] mr-[10px] text-white">
    <FontAwesomeIcon icon={faPaperPlane} size="1x"/>
      </button>
      <input type="text" className="w-full rounded-[30px] pl-4" />
    </form>
  </div>
  );
}