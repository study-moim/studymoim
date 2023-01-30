export default function ChattingWindow() {
  return (
    <div
    className="
  md:w-full w-full h-full flex flex-col bg-[#D2DAFF] p-5 rounded-xl
  "
  >
    {/* 대화 상대 뜨는 칸 */}
    {/* 대화 뜨는 칸 */}
    <div className="h-full">
      <div>상대</div>
      <div>나</div>
    </div>
    {/* 대화 인풋박스 */}
    <form className="w-full relative h-[50px] bg-white rounded-[30px] flex">
      <button className="absolute right-0 bg-[#7B61FF] rounded-full w-[30px] h-[30px] mt-[10px] mr-[10px] text-white text-center">
        {" "}
        ▶{" "}
      </button>
      <input type="text" className="w-full rounded-[30px] pl-4" />
    </form>
  </div>
  );
}