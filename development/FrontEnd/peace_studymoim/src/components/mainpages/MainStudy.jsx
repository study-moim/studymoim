export default function MainStudy() {
  return (
    <div
      className="
        flex flex-col justify-start items-center w-11/12
        rounded-[20px] border-[3px] border-[#b1b2ff] py-4 gap-3
      "
    >
      <div className="flex flex-col justify-start items-center w-full hover:scale-105 cursor-pointer">
        <p className="text-base text-[#aac4ff]">시작예정일 | 2023.01.23</p>
        <p className="text-center text-black text-xl font-bold mx-3">
          프론트엔드 고수되실 분들 구해요
        </p>
        <p className="text-base text-black">매주 화, 목 7시 </p>
        <p className="text-base text-[#aac4ff]">#리액트 #3명 #3개월</p>
        <img src="/reactjs.png" alt="x" className="w-4/12" />
      </div>
      {/* 밑줄 */}
      <svg
        width={291}
        height={3}
        viewBox="0 0 291 3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full my-2"
        preserveAspectRatio="none"
      >
        <path d="M0 1.5L291 1.5" stroke="#D2DAFF" strokeWidth={2} />
      </svg>
      <div className="flex flex-row justify-center items-center gap-2 mb-1 hover:scale-105 cursor-pointer">
        <img
          className="w-[40px] h-[40px] rounded-full"
          src="data:image/jpeg;base64,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"
        />
        <p className="text-xl text-black">싸피킴</p>
      </div>
    </div>
  );
}
