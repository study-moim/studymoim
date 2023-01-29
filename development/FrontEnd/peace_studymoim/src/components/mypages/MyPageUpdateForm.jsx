export default function MyPageUpdateForm() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[17px]">
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-6 w-52 relative gap-2">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-52 text-xl font-bold text-left text-black">
              관심 분야
            </p>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[17px]">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative px-[46px] py-7 rounded-[20px] bg-white border-[3px] border-[#b1b2ff]">
              <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-black">
                Back-End
              </p>
            </div>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative px-[46px] py-7 rounded-[20px] bg-white border-[3px] border-[#b1b2ff]">
              <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-black">
                Spring
              </p>
            </div>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative px-[46px] py-7 rounded-[20px] bg-white border-[3px] border-[#b1b2ff]">
              <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-black">
                JAVA
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative px-[46px] py-7 rounded-[20px] bg-white border-[3px] border-[#b1b2ff]">
            <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-black">
              Python
            </p>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-[526px] h-10 relative overflow-hidden rounded-[20px] bg-[#b1b2ff]">
            <p className="absolute left-[236px] top-3 text-sm font-bold text-center text-white">
              수정하기
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[3px]">
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-6 w-52 relative gap-2">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-52 text-xl font-bold text-left text-black">
              프로필 사진
            </p>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[41px] w-[526px] relative overflow-hidden gap-3 py-2.5 bg-white">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[279px] px-2">
              <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-black">
                profile.png
              </p>
            </div>
            <svg
              width={527}
              height={1}
              viewBox="0 0 527 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch flex-grow-0 flex-shrink-0"
              preserveAspectRatio="xMidYMid meet"
            >
              <line x1="0.5" y1="0.5" x2="526.5" y2="0.5" stroke="#696969" />
            </svg>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-10 pt-[15px]">
            <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-10 w-[250px] relative rounded-[20px] bg-[#b1b2ff]">
              <p className="flex-grow-0 flex-shrink-0 w-[141px] h-10 text-sm font-bold text-center text-white">
                파일 찾기
              </p>
            </div>
            <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-10 w-[250px] relative rounded-[20px] bg-[#b1b2ff]">
              <p className="flex-grow-0 flex-shrink-0 w-[141px] h-10 text-sm font-bold text-center text-white">
                삭제
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[3px]">
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-6 w-52 relative gap-2">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-52 text-xl font-bold text-left text-black">
              닉네임
            </p>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[41px] w-[526px] relative overflow-hidden gap-3 py-2.5 bg-white">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[279px] px-2">
              <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-black">
                싸피킴
              </p>
            </div>
            <svg
              width={527}
              height={1}
              viewBox="0 0 527 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch flex-grow-0 flex-shrink-0"
              preserveAspectRatio="xMidYMid meet"
            >
              <line x1="0.5" y1="0.5" x2="526.5" y2="0.5" stroke="#696969" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[3px]">
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-6 w-52 relative gap-2">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-52 text-xl font-bold text-left text-black">
              Email
            </p>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[41px] w-[526px] relative overflow-hidden gap-3 py-2.5 bg-[#f8f8f8]">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[279px] px-2">
              <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#696969]">
                ssafykim@gmail.com
              </p>
            </div>
            <svg
              width={527}
              height={1}
              viewBox="0 0 527 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch flex-grow-0 flex-shrink-0"
              preserveAspectRatio="xMidYMid meet"
            >
              <line x1="0.5" y1="0.5" x2="526.5" y2="0.5" stroke="#696969" />
            </svg>
          </div>
        </div>
        <div className="flex-grow-0 flex-shrink-0 w-[526px] h-10 relative overflow-hidden rounded-[20px] bg-[#b1b2ff]">
          <p className="absolute left-[236px] top-3 text-sm font-bold text-center text-white">
            수정하기
          </p>
        </div>
      </div>
    </>
  );
}
