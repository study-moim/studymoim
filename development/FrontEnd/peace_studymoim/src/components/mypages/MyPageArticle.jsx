export default function MyPageArticle() {
  return (
    <>
      <div>
        <div className="flex flex-col justify-start items-end h-[780px] gap-[27px] p-[50px] rounded-[20px] border-none">
          {/* 키워드 검색 */}
          <div
            className="flex justify-end items-start flex-grow-0 flex-shrink-0 relative gap-1.5 pl-[142px] pr-[11px] py-[7px] rounded-[15px] bg-[#efefef]"
            style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
          >
            <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-center text-[#8d8d8d]">
              키워드 검색
            </p>
            <svg
              width={32}
              height={36}
              viewBox="0 0 32 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <g filter="url(#filter0_d_539_6829)">
                <path
                  d="M21.0068 19.0065H19.9534L19.5801 18.6465C20.8868 17.1265 21.6734 15.1532 21.6734 13.0065C21.6734 8.21984 17.7934 4.33984 13.0068 4.33984C8.22009 4.33984 4.34009 8.21984 4.34009 13.0065C4.34009 17.7932 8.22009 21.6732 13.0068 21.6732C15.1534 21.6732 17.1268 20.8865 18.6468 19.5798L19.0068 19.9532V21.0065L25.6734 27.6598L27.6601 25.6732L21.0068 19.0065ZM13.0068 19.0065C9.68675 19.0065 7.00675 16.3265 7.00675 13.0065C7.00675 9.68651 9.68675 7.00651 13.0068 7.00651C16.3268 7.00651 19.0068 9.68651 19.0068 13.0065C19.0068 16.3265 16.3268 19.0065 13.0068 19.0065Z"
                  fill="black"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_539_6829"
                  x={-4}
                  y={0}
                  width={40}
                  height={40}
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feflood flood-opacity={0} result="BackgroundImageFix" />
                  <fecolormatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feoffset dy={4} />
                  <fegaussianblur stdDeviation={2} />
                  <fecomposite in2="hardAlpha" operator="out" />
                  <fecolormatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feblend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_539_6829"
                  />
                  <feblend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_539_6829"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          {/* 아티클들 */}
          <div className="flex justify-start items-start w-full">
            <div className="flex-grow-0 flex-shrink-0 h-[100px] relative overflow-hidden" />
            <div
              className="w-full flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0  relative px-[30px] bg-white border-t-0 border-r-0 border-b-0 border-l-[11px] border-[#eef1ff]/[0.98]"
              style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
            >
              <p className="flex-grow-0 flex-shrink-0 text-xl text-left text-black">
                @프론트 : 뷰3이랑 리액트 중에 뭐 공부 할까요?
              </p>
            </div>
          </div>

          <div className="flex justify-start items-start w-full">
            <div className="flex-grow-0 flex-shrink-0 h-[100px] relative overflow-hidden" />
            <div
              className="w-full flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0  relative px-[30px] bg-white border-t-0 border-r-0 border-b-0 border-l-[11px] border-[#eef1ff]/[0.98]"
              style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
            >
              <p className="flex-grow-0 flex-shrink-0 text-xl text-left text-black">
                @프론트 : 뷰3이랑 리액트 중에 뭐 공부 할까요?
              </p>
            </div>
          </div>
          
          <div className="flex justify-start items-start w-full">
            <div className="flex-grow-0 flex-shrink-0 h-[100px] relative overflow-hidden" />
            <div
              className="w-full flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0  relative px-[30px] bg-white border-t-0 border-r-0 border-b-0 border-l-[11px] border-[#eef1ff]/[0.98]"
              style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
            >
              <p className="flex-grow-0 flex-shrink-0 text-xl text-left text-black">
                @프론트 : 뷰3이랑 리액트 중에 뭐 공부 할까요?
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
