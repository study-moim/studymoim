export default function NavBarLogIn() {

  return (
    <div className="flex justify-between items-center w-full gap-[616px] pr-[21px] bg-white">
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[15px]">
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
      <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[360px] relative gap-[26px]">
        <svg
          width={36}
          height={37}
          viewBox="0 0 36 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-9 h-9"
          preserveAspectRatio="xMidYMid meet"
        >
          <mask
            id="mask0_309_9605"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={36}
            height={37}
          >
            <rect y="0.5" width={36} height={36} fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_309_9605)">
            <path
              d="M6 29V26H9V15.5C9 13.425 9.625 11.581 10.875 9.968C12.125 8.356 13.75 7.3 15.75 6.8V5.75C15.75 5.125 15.969 4.594 16.407 4.157C16.844 3.719 17.375 3.5 18 3.5C18.625 3.5 19.156 3.719 19.593 4.157C20.031 4.594 20.25 5.125 20.25 5.75V6.8C22.25 7.3 23.875 8.356 25.125 9.968C26.375 11.581 27 13.425 27 15.5V26H30V29H6ZM18 33.5C17.175 33.5 16.469 33.2065 15.882 32.6195C15.294 32.0315 15 31.325 15 30.5H21C21 31.325 20.7065 32.0315 20.1195 32.6195C19.5315 33.2065 18.825 33.5 18 33.5ZM12 26H24V15.5C24 13.85 23.4125 12.4375 22.2375 11.2625C21.0625 10.0875 19.65 9.5 18 9.5C16.35 9.5 14.9375 10.0875 13.7625 11.2625C12.5875 12.4375 12 13.85 12 15.5V26Z"
              fill="black"
            />
          </g>
        </svg>
        <svg
          width={36}
          height={37}
          viewBox="0 0 36 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-9 h-9"
          preserveAspectRatio="xMidYMid meet"
        >
          <mask
            id="mask0_309_9608"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={36}
            height={37}
          >
            <rect y="0.5" width={36} height={36} fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_309_9608)">
            <path
              d="M6 26C5.175 26 4.469 25.7065 3.882 25.1195C3.294 24.5315 3 23.825 3 23V11.225C3 10.85 3.1065 10.481 3.3195 10.118C3.5315 9.756 3.825 9.475 4.2 9.275L14.4 4.175C14.6 4.05 14.819 3.9685 15.057 3.9305C15.294 3.8935 15.525 3.875 15.75 3.875C15.975 3.875 16.2065 3.8935 16.4445 3.9305C16.6815 3.9685 16.9 4.05 17.1 4.175L27.075 9.275C27.375 9.425 27.631 9.6625 27.843 9.9875C28.056 10.3125 28.2 10.65 28.275 11H23.8875L15.75 6.875L6 11.7125V26ZM10.5 32C9.675 32 8.969 31.7065 8.382 31.1195C7.794 30.5315 7.5 29.825 7.5 29V15.5C7.5 14.675 7.794 13.9685 8.382 13.3805C8.969 12.7935 9.675 12.5 10.5 12.5H30C30.825 12.5 31.5315 12.7935 32.1195 13.3805C32.7065 13.9685 33 14.675 33 15.5V29C33 29.825 32.7065 30.5315 32.1195 31.1195C31.5315 31.7065 30.825 32 30 32H10.5ZM20.25 23.3375C20.125 23.3375 20.0125 23.325 19.9125 23.3C19.8125 23.275 19.7 23.2375 19.575 23.1875L10.5 18.5V29H30V18.5L20.925 23.1875C20.825 23.2375 20.6 23.2875 20.25 23.3375ZM20.25 20.525L30 15.5H10.5L20.25 20.525Z"
              fill="#1C1B1F"
            />
          </g>
        </svg>
        <button
          className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-3.5 py-[11px] rounded-[14px] bg-[#ffe3ba]"
          style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
        >
          <p className="flex-grow-0 flex-shrink-0 text-xl text-left text-black">MyPage</p>
        </button>
        <button
          className="flex justify-center items-start flex-grow relative gap-2.5 px-3.5 py-[11px] rounded-[14px] bg-[#f4bdac]"
          style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
        >
          <p className="flex-grow-0 flex-shrink-0 text-xl text-left text-black">로그아웃</p>
        </button>
      </div>
    </div>
  )
}