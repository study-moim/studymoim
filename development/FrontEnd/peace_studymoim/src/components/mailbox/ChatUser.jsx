export default function ChatUser({ propData }) {
  return (
    // TODO: 상위에서 온클릭 프롭스 받아서 누르면 화면 바뀌고 본인 스타일 변경
    <div className="border-b">
    <div className="md:w-[80] h-[70px] bg-white flex hover:scale-95 m-2">
      <img
        src="/python.png"
        alt="x"
        className="rounded-full w-[50px] h-[50px] m-3"
      />
      <div className="md:flex flex-col justify-center items-start hidden">
        <div className="text-l font-semibold mb-1">{propData.nickname}</div>
        <div className="text-xs text-gray-500">{propData.email}</div>
      </div>
      <hr />
    </div>
    </div>
  );
}
