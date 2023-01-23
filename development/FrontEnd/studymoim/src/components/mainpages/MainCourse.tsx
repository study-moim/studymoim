export default function MainCourse() {
  return (
    <>
      <div className="flex-grow-0 flex-shrink-0 w-[413px] h-[479px] relative">
        <p className="w-[413px] h-[46px] absolute left-0 top-[234px] text-[34px] font-bold text-left text-black">
          [기초강좌]피그마 기초이론
        </p>
        <img
          src="image-4.png"
          className="w-[402px] h-56 absolute left-[-1px] top-[-1px] object-cover"
        />
        <p className="w-[163px] absolute left-1 top-[280px] text-xl text-left text-[#bd6ffc]">
          오쌤의 니가스터디
        </p>
        <p className="w-[154px] absolute left-0.5 top-[313px] text-xl text-left text-[#b1b2ff]">
          관련 동영상 28개
        </p>
        {/* TODO: 이 부분이 필요할까? */}
        <p className="w-[366px] absolute left-0.5 top-[346px] text-xl text-left text-[#b1b2ff]">
          <span className="w-[366px] text-xl text-left text-[#b1b2ff]">
            [피그마 강좌] #00.피그마인트로{" "}
          </span>
          <br />
          <span className="w-[366px] text-xl text-left text-[#b1b2ff]">
            [피그마 강좌] #01.설치 및 인터페이스
          </span>
        </p>
        <div className="w-[177px] h-[67px] absolute left-0 top-[412px]">
          <div className="flex flex-col justify-center items-center absolute left-[-1.5px] top-[-1.5px] gap-2.5 px-5 py-1.5 rounded-[30px] bg-white border-2 border-[#b1b2ff]">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1.5">
              <svg
                width={59}
                height={59}
                viewBox="0 0 59 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[58px] h-[58px] relative"
                preserveAspectRatio="none"
              >
                <circle
                  cx="29.4995"
                  cy="29.5"
                  r="28.5"
                  fill="white"
                  stroke="#F24E1E"
                />
              </svg>
              <div className="flex-grow-0 flex-shrink-0 w-0 h-[46px] bg-[#d9d9d9]" />
              <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-black">
                Figma
              </p>
            </div>
          </div>
          <svg
            width={49}
            height={48}
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[49px] h-[46.9px] absolute left-6 top-[10.53px]"
            preserveAspectRatio="none"
          >
            <path
              d="M17.4177 47.795C21.9731 47.795 25.6481 44.2775 25.6481 39.9172V32.0395H17.4177C12.8622 32.0395 9.18726 35.557 9.18726 39.9172C9.18726 44.2775 12.8622 47.795 17.4177 47.795Z"
              fill="#0ACF83"
            />
            <path
              d="M9.18726 24.1618C9.18726 19.8016 12.8622 16.2841 17.4177 16.2841H25.6481V32.0395H17.4177C12.8622 32.0395 9.18726 28.522 9.18726 24.1618Z"
              fill="#A259FF"
            />
            <path
              d="M9.18726 8.4063C9.18726 4.04606 12.8622 0.528564 17.4177 0.528564H25.6481V16.284H17.4177C12.8622 16.284 9.18726 12.7665 9.18726 8.4063Z"
              fill="#F24E1E"
            />
            <path
              d="M25.6479 0.528564H33.8784C38.4338 0.528564 42.1088 4.04606 42.1088 8.4063C42.1088 12.7665 38.4338 16.284 33.8784 16.284H25.6479V0.528564Z"
              fill="#FF7262"
            />
            <path
              d="M42.1088 24.1618C42.1088 28.522 38.4338 32.0395 33.8784 32.0395C29.3229 32.0395 25.6479 28.522 25.6479 24.1618C25.6479 19.8016 29.3229 16.2841 33.8784 16.2841C38.4338 16.2841 42.1088 19.8016 42.1088 24.1618Z"
              fill="#1ABCFE"
            />
          </svg>
        </div>
        <p className="absolute left-[347px] top-[406px] text-[64px] font-bold text-left text-[#4e4e4e]">
          ♡
        </p>
        <div className="flex flex-col justify-start items-center h-[220px] absolute left-[267px] top-0 px-[45px] py-[70px] bg-black/[0.67]">
          <p className="flex-grow-0 flex-shrink-0 text-3xl font-bold text-left text-white">
            28
          </p>
          <svg
            width={45}
            height={45}
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[45px] h-[45px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M25.3125 15.9375H4.6875V19.6875H25.3125V15.9375Z"
              fill="white"
            />
            <path
              d="M25.3125 8.4375H4.6875V12.1875H25.3125V8.4375Z"
              fill="white"
            />
            <path
              d="M17.8125 23.4375H4.6875V27.1875H17.8125V23.4375Z"
              fill="white"
            />
            <path
              d="M29.0625 21.5625V36.5625L40.3125 29.0625L29.0625 21.5625Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
