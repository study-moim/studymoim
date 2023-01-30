export default function ChatUser() {
  return (
    // TODO: 상위에서 온클릭 프롭스 받아서 누르면 화면 바뀌고 본인 스타일 변경
    <div className="md:w-full h-[70px] bg-white rounded-[30px] flex border border-black hover:scale-95">
      <img
        src="/python.png"
        alt="x"
        className="rounded-full w-[50px] h-[50px] m-3"
      />
      <div className="md:flex flex-col justify-center items-start hidden">
        <div className="text-xl">파이썬쟁이</div>
        <div className="text-sm text-gray-500">2023.02.22 22:22</div>
      </div>
    </div>
  );
}
