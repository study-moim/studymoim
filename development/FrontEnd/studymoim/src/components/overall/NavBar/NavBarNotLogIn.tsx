export default function NavBarNotLogIn() {

  return (
    <div className="flex justify-between items-center w-full pr-[17px] bg-white">
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
        <img
          src="\src\assets\logo.png"
          className="flex-grow-0 flex-shrink-0 w-[108px] h-[67px] object-cover"
        />
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[266px] relative gap-4">
          <p className="flex-grow-0 flex-shrink-0 text-[28px] text-left text-[#7b7474]">강좌</p>
          <p className="flex-grow-0 flex-shrink-0 text-[28px] text-left text-[#7b7474]">스터디</p>
          <p className="flex-grow-0 flex-shrink-0 text-[28px] text-left text-[#7b7474]">커뮤니티</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-[26px]">
        <button
          className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-3.5 py-[11px] rounded-[14px] bg-[#ffe3ba]"
          style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
        >
          <p className="flex-grow-0 flex-shrink-0 text-xl text-left text-black">로그인</p>
        </button>
      </div>
    </div>
  )
}