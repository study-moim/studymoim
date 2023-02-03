export default function OtherChatting(props) {
  return (
    <div className="ml-2 mt-2 grid justify-items-start">
      <img
        src="/python.png"
        alt="x"
        className="rounded-full w-[40px] h-[40px] mb-2"
      />
      <div className="p-3 border border-[#B1B2FF] rounded-lg text-sm max-w-xs">
        {props.text}임ㅋ
      </div>
    </div>
  );
}