export default function CourseBanner() {
  return (
    <>
      <div className="w-full h-[200px] relative">
        <svg
          viewBox="0 0 1440 479"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[-1px] top-[-1px] w-full"
          preserveAspectRatio="none"
        >
          <path d="M0 0H1440V479H0V0Z" fill="#D2DAFF" />
        </svg>
        <img
          src="image-4.png"
          className="w-[678px] h-5/6 absolute left-[440px] object-cover"
        />
        <p className="w-[720px] absolute left-[30px] top-[60px] text-[50px] font-bold text-left text-[#2e2f35]">
          [기초강좌]피그마기초이론
        </p>
        <div className="flex flex-col justify-start items-start w-[720px] absolute left-[30px] top-[180.5px] gap-12">
          <p className="flex-grow-0 flex-shrink-0 w-[659px] text-left">
            <span className="flex-grow-0 flex-shrink-0 w-[659px] text-2xl font-bold text-left text-[#58595d]">
              오쌤의 니가스터디
            </span>
            <span className="flex-grow-0 flex-shrink-0 w-[659px] text-2xl font-semibold text-left text-[#58595d]">
              {" "}
            </span>
            <br />
            <span className="flex-grow-0 flex-shrink-0 w-[659px] text-xl text-left text-white">
              {" "}
              총 N시간 N분 (28개 강좌){" "}
            </span>
            <br />
            <br />
          </p>
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[659px] relative gap-5 pr-[349.1875px]">
            <div
              className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative pl-[65px] pr-[66.046875px] py-[22px] rounded-[15px] bg-[#ff6d2c] border-2 border-[#2e2f35]"
              style={{ boxShadow: "3px 3px 0px 0 #2e2f35" }}
            >
              <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-center uppercase text-white">
                수강하기
              </p>
            </div>
            <svg
              width={52}
              height={49}
              viewBox="0 0 52 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path
                d="M46.3456 5.97833C45.1728 4.71708 43.7802 3.71657 42.2475 3.03396C40.7148 2.35134 39.072 2 37.413 2C35.7539 2 34.1111 2.35134 32.5784 3.03396C31.0457 3.71657 29.6532 4.71708 28.4803 5.97833L26.0463 8.59463L23.6122 5.97833C21.2431 3.43189 18.0299 2.00132 14.6795 2.00132C11.3291 2.00132 8.11598 3.43189 5.7469 5.97833C3.37781 8.52476 2.04688 11.9785 2.04688 15.5797C2.04687 19.1809 3.37781 22.6346 5.7469 25.181L8.18098 27.7973L26.0463 47L43.9115 27.7973L46.3456 25.181C47.519 23.9204 48.4499 22.4236 49.0849 20.7761C49.72 19.1287 50.0469 17.3629 50.0469 15.5797C50.0469 13.7964 49.72 12.0306 49.0849 10.3832C48.4499 8.73578 47.519 7.23898 46.3456 5.97833Z"
                fill="#FC7A6F"
                stroke="#FC7A6F"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-[40px] font-bold text-center uppercase text-[#fc7a6f]">
              126
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
