// TODO: 전체적으로 캐러셀로 다시 개편해야함, 현재 모양만 잡아놓은 상태
export default function MainBanner() {
  return (
    <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-full h-[306px] relative px-[21px] bg-[#eef1ff]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M20.9401 9.88L19.0601 8L11.0601 16L19.0601 24L20.9401 22.12L14.8334 16L20.9401 9.88Z"
          fill="#696969"
        />
      </svg>
      <p className="flex-grow-0 flex-shrink-0 w-[850px] h-[113px] text-5xl font-bold text-left">
        <span className="flex-grow-0 flex-shrink-0 w-[850px] h-[113px] text-5xl font-bold text-left text-[#fc7a6f]">
          강의
        </span>
        <span className="flex-grow-0 flex-shrink-0 w-[850px] h-[113px] text-5xl font-bold text-left text-black">
          {" "}
          같이 들을 사람을{" "}
        </span>
        <div className="flex-grow-0 flex-shrink-0 w-[850px] h-[113px] text-5xl font-bold text-left text-black">
          찾고 있다면?{" "}
        </div>
        <br />
        <br />
        <br />
      </p>
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M12.9401 8L11.0601 9.88L17.1667 16L11.0601 22.12L12.9401 24L20.9401 16L12.9401 8Z"
          fill="#696969"
        />
      </svg>
    </div>
  )
}