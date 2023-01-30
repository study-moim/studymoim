export default function LectureManage() {
  return (
    <>
      <div className="flex flex-col justify-start items-center h-[1512px] relative gap-[78px] px-[120px] py-[50px]">
        <div
          className="flex-grow-0 flex-shrink-0 w-[544px] h-[63px] relative overflow-hidden rounded-[20px] bg-[#eef]"
          style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
        >
          <div className="flex flex-col justify-start items-start w-[544px] h-[63px] absolute left-0 top-0 opacity-40 overflow-hidden gap-2.5 pl-3 pr-2 py-2 rounded-lg bg-[#eef1ff]/[0.98]">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-[524px] h-6 gap-2" />
          </div>
          <svg
            width={51}
            height={50}
            viewBox="0 0 51 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[50px] h-[50px] absolute left-5 top-1.5"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M33.3229 29.6979H31.6771L31.0938 29.1354C33.1354 26.7604 34.3646 23.6771 34.3646 20.3229C34.3646 12.8438 28.3021 6.78125 20.8229 6.78125C13.3438 6.78125 7.28125 12.8438 7.28125 20.3229C7.28125 27.8021 13.3438 33.8646 20.8229 33.8646C24.1771 33.8646 27.2604 32.6354 29.6354 30.5938L30.1979 31.1771V32.8229L40.6146 43.2188L43.7188 40.1146L33.3229 29.6979ZM20.8229 29.6979C15.6354 29.6979 11.4479 25.5104 11.4479 20.3229C11.4479 15.1354 15.6354 10.9479 20.8229 10.9479C26.0104 10.9479 30.1979 15.1354 30.1979 20.3229C30.1979 25.5104 26.0104 29.6979 20.8229 29.6979Z"
              fill="black"
            />
          </svg>
          <p className="absolute left-[83px] top-5 text-lg text-left text-[#7b7474]">
            원하는 강의를 추가하세요
          </p>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[25px]">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[989px] relative gap-[100px] px-[50px] py-[30px] border-[3px] border-black">
            <div className="flex-grow-0 flex-shrink-0 w-[412px] h-[220px] relative">
              <img
                src="image-4.png"
                className="w-[418px] h-[226px] absolute left-[-7px] top-[-1px] object-none"
              />
              <div className="flex flex-col justify-start items-center absolute left-[263.88px] top-[-0.88px] px-[45px] py-[70px] bg-black/[0.67]">
                <p className="flex-grow-0 flex-shrink-0 text-3xl font-bold text-left text-white">
                  28
                </p>
                <svg
                  width={46}
                  height={46}
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[45px] h-[45px] relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M26.1963 16.0596H5.57129V19.8096H26.1963V16.0596Z"
                    fill="white"
                  />
                  <path
                    d="M26.1963 8.55957H5.57129V12.3096H26.1963V8.55957Z"
                    fill="white"
                  />
                  <path
                    d="M18.6963 23.5596H5.57129V27.3096H18.6963V23.5596Z"
                    fill="white"
                  />
                  <path
                    d="M29.9463 21.6846V36.6846L41.1963 29.1846L29.9463 21.6846Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[219px] w-[380px] relative gap-1.5">
              <p className="flex-grow-0 flex-shrink-0 text-[34px] font-bold text-left text-black">
                [기초강좌]피그마 기초이론
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[172.07px] text-xl text-left text-[#bd6ffc]">
                오쌤의 니가스터디
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[162.57px] text-xl text-left text-[#b1b2ff]">
                강의 수: 28개
              </p>
              <svg
                width={54}
                height={54}
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M48.1445 6.42036C46.9228 5.01898 45.4722 3.9073 43.8757 3.14884C42.2791 2.39038 40.5679 2 38.8397 2C37.1115 2 35.4003 2.39038 33.8037 3.14884C32.2072 3.9073 30.7566 5.01898 29.5349 6.42036L26.9994 9.32737L24.4639 6.42036C21.9961 3.59099 18.649 2.00147 15.159 2.00147C11.669 2.00147 8.32198 3.59099 5.85419 6.42036C3.38639 9.24973 2 13.0872 2 17.0885C2 21.0899 3.38639 24.9273 5.85419 27.7567L8.38969 30.6637L26.9994 52L45.609 30.6637L48.1445 27.7567C49.3668 26.356 50.3364 24.6928 50.998 22.8624C51.6595 21.0319 52 19.0699 52 17.0885C52 15.1071 51.6595 13.1452 50.998 11.3147C50.3364 9.4842 49.3668 7.82109 48.1445 6.42036Z"
                  stroke="#9A9A9A"
                  stroke-width={4}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
