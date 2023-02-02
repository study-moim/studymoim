export default function Footer() {
  if (window.location.pathname.startsWith("/player")) return null;
  return (
    <div className="w-full h-[264px] mt-96 bg-[#4e4e4e]">
    <div className="flex justify-center items-center left-0 top-0">
      <div className="flex flex-col justify-start items-start  w-[550px]">
        <div className="flex flex-col justify-center items-center  h-[181px] w-[545px] relative gap-2.5 px-[100px] pt-5">
          <img
            src="/logo.png"
            className=" w-[264px] h-[140px] object-cover"
          />
        </div>
        <div className="flex justify-center items-center  w-[545px] h-[55px] relative gap-2.5 px-2.5">
          <p className=" text-base font-bold text-left text-white">
            © 2023 moim | All rights reserved
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-end h-[255px] gap-[30px] pl-[129px] pr-[100px] pt-10 pb-[30px]">
        <p className=" text-2xl font-bold text-left text-white">
          Professional Study Community
        </p>
        <p className=" w-[559px] text-xl text-right text-white">
          <span className=" w-[559px] text-xl text-right text-white">
            High level experience in Youtube simultaneous viewing and development knowledge,
          </span>
          <br />
          <span className=" w-[559px] text-xl text-right text-white">
            Enjoy Our Website
          </span>
        </p>
        
        {/* <div className="w-[158px] h-[50px] relative">
          <div className="w-[158px] h-[50px]  left-[-1px] top-[-1px] rounded-[50px] bg-white" />
          <svg
            width={51}
            height={46}
            viewBox="0 0 51 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[99.96px] top-[0.77px]"
            preserveAspectRatio="none"
          >
            <path
              d="M49.9425 23C49.9425 34.9036 39.1913 44.7272 25.7029 44.7272C12.2145 44.7272 1.46326 34.9036 1.46326 23C1.46326 11.0964 12.2145 1.27271 25.7029 1.27271C39.1913 1.27271 49.9425 11.0964 49.9425 23Z"
              fill="white"
              stroke="black"
              stroke-width={2}
            />
          </svg>
          <svg
            width={47}
            height={42}
            viewBox="0 0 47 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[45.43px] h-[40.91px] absolute left-[103.99px] top-[4.55px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M23.7029 2.25C14.2948 2.25 6.66614 9.11932 6.66614 17.5909V29.5227C6.66614 32.3523 9.20272 34.6364 12.3451 34.6364H18.024V21H10.4521V17.5909C10.4521 10.9943 16.3771 5.65909 23.7029 5.65909C31.0287 5.65909 36.9537 10.9943 36.9537 17.5909V21H29.3818V34.6364H36.9537V36.3409H23.7029V39.75H35.0607C38.203 39.75 40.7396 37.4659 40.7396 34.6364V17.5909C40.7396 9.11932 33.1109 2.25 23.7029 2.25Z"
              fill="black"
            />
          </svg>
          <p className="absolute left-[15.14px] top-[12.73px] text-xl font-bold text-left text-black">
            문의하기
          </p>
        </div> */}
      </div>
    </div>
  </div>
  // 원래거
    // <div className="flex justify-center items-start w-full h-[334px] mt-96 bg-[#4e4e4e]">
    //   <div className="flex flex-col justify-start items-start ">
    //     <div className="flex flex-col justify-start items-start  h-[243px] w-[545px]  gap-2.5 px-[100px] pt-5">
    //       <img
    //         src="src\assets\logo.png"
    //         className=" w-[354px] h-[197px] object-cover"
    //       />
    //     </div>
    //     <div className="flex justify-center items-center  w-[545px] h-[91px]  gap-2.5 p-2.5">
    //       <p className=" text-base font-bold text-left text-white">
    //         © 2023 moim | All rights reserved
    //       </p>
    //     </div>
    //   </div>
    //   <div className="flex flex-col justify-end items-end  h-[334px]  gap-[30px] pl-[231px] pr-[100px] pt-10 pb-[30px]">
    //     <p className=" text-[32px] font-bold text-left text-white">
    //       Professional Study Community
    //     </p>
    //     <p className=" w-[559px] text-2xl text-right text-white">
    //       <span className=" w-[559px] text-2xl text-right text-white">
    //         High level experience in Youtube simultaneous viewing and
    //         development knowledge,
    //       </span>
    //       <br />
    //       <span className=" w-[559px] text-2xl text-right text-white">
    //         Enjoy Our Website
    //       </span>
    //     </p>
    //     {/* 문의하기 버튼 */}
    //     <div className=" w-9/12 h-[82px] relative">
    //       <div className="w-9/12 h-[82px] absolute left-[-1px] top-[-1px] rounded-[50px] bg-white" />
    //       {/* 동그라미 아이콘 */}
    //       <svg
    //         width={96}
    //         height={76}
    //         viewBox="0 0 96 76"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="absolute left-[190.51px] top-[2.23px]"
    //         preserveAspectRatio="none"
    //       >
    //         <path
    //           d="M94.5367 38C94.5367 57.8162 73.845 74.2727 47.7731 74.2727C21.7012 74.2727 1.00952 57.8162 1.00952 38C1.00952 18.1838 21.7012 1.72726 47.7731 1.72726C73.845 1.72726 94.5367 18.1838 94.5367 38Z"
    //           fill="white"
    //           stroke="black"
    //           stroke-width={2}
    //         />
    //       </svg>
    //       {/* 헤드폰 아이콘 */}
    //       <svg
    //         width={87}
    //         height={68}
    //         viewBox="0 0 87 68"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="w-[85.97px] h-[67.09px] absolute left-[196.79px] top-[7.45px]"
    //         preserveAspectRatio="xMidYMid meet"
    //       >
    //         <path
    //           d="M43.7731 3.25C25.9693 3.25 11.5327 14.5157 11.5327 28.4091V47.9773C11.5327 52.6177 16.333 56.3636 22.2795 56.3636H33.0263V34H18.6973V28.4091C18.6973 17.5907 29.9097 8.84091 43.7731 8.84091C57.6365 8.84091 68.849 17.5907 68.849 28.4091V34H54.5199V56.3636H68.849V59.1591H43.7731V64.75H65.2667C71.2133 64.75 76.0135 61.0041 76.0135 56.3636V28.4091C76.0135 14.5157 61.577 3.25 43.7731 3.25Z"
    //           fill="black"
    //         />
    //       </svg>
    //       <p className="absolute left-[28.66px] top-[20.87px] text-2xl font-bold text-left text-black">
    //         문의하기
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
}
