export default function Footer() {
  return (
    <div className="w-full h-[334px] mt-96 bg-[#4e4e4e]">
      <div className="flex justify-center items-start left-0 top-0">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[243px] w-[545px] relative gap-2.5 px-[100px] pt-5">
            <img
              src="src\assets\logo.png"
              className="flex-grow-0 flex-shrink-0 w-[354px] h-[197px] object-cover"
            />
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[545px] h-[91px] relative gap-2.5 p-2.5">
            <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-white">
              © 2023 moim | All rights reserved 
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end flex-grow-0 flex-shrink-0 h-[334px] relative gap-[30px] pl-[231px] pr-[100px] pt-10 pb-[30px]">
          <p className="flex-grow-0 flex-shrink-0 text-[32px] font-bold text-left text-white">
            Professional Study Community
          </p>
          <p className="flex-grow-0 flex-shrink-0 w-[559px] text-2xl text-right text-white">
            <span className="flex-grow-0 flex-shrink-0 w-[559px] text-2xl text-right text-white">
              High level experience in Youtube simultaneous viewing and
              development knowledge,
            </span>
            <br />
            <span className="flex-grow-0 flex-shrink-0 w-[559px] text-2xl text-right text-white">
              Enjoy Our Website
            </span>
          </p>
          <div className="flex-grow-0 flex-shrink-0 w-[299px] h-[82px] relative">
            <div className="w-[299px] h-[82px] absolute left-[-1px] top-[-1px] rounded-[50px] bg-white" />
            <svg
              width={96}
              height={76}
              viewBox="0 0 96 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[190.51px] top-[2.23px]"
              preserveAspectRatio="none"
            >
              <path
                d="M94.5367 38C94.5367 57.8162 73.845 74.2727 47.7731 74.2727C21.7012 74.2727 1.00952 57.8162 1.00952 38C1.00952 18.1838 21.7012 1.72726 47.7731 1.72726C73.845 1.72726 94.5367 18.1838 94.5367 38Z"
                fill="white"
                stroke="black"
                stroke-width={2}
              />
            </svg>
            <svg
              width={87}
              height={68}
              viewBox="0 0 87 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[85.97px] h-[67.09px] absolute left-[196.79px] top-[7.45px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M43.7731 3.25C25.9693 3.25 11.5327 14.5157 11.5327 28.4091V47.9773C11.5327 52.6177 16.333 56.3636 22.2795 56.3636H33.0263V34H18.6973V28.4091C18.6973 17.5907 29.9097 8.84091 43.7731 8.84091C57.6365 8.84091 68.849 17.5907 68.849 28.4091V34H54.5199V56.3636H68.849V59.1591H43.7731V64.75H65.2667C71.2133 64.75 76.0135 61.0041 76.0135 56.3636V28.4091C76.0135 14.5157 61.577 3.25 43.7731 3.25Z"
                fill="black"
              />
            </svg>
            <p className="absolute left-[28.66px] top-[20.87px] text-4xl font-bold text-left text-black">
              문의하기
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
