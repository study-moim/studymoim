export default function StudyIntroduceBanner() {
  return (
    <div className="flex w-full jrustify-center items-center flex-grow-0 flex-shrink-0 relative">
      <img
        src="rectangle-1539.jpeg"
        className="flex-grow-0 flex-shrink-0 w-[212px] h-[212px] object-cover"
      />
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[212px] relative gap-2.5 px-[9px] py-[39.47999954223633px]">
        <p className="flex-grow-0 flex-shrink-0 text-4xl font-bold text-left text-black">
          스터디 이름 
        </p>
        {/* <svg
          width={493}
          height={6}
          viewBox="0 0 493 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="none"
        >
          <line
            x1="0.00626292"
            y1="1.48049"
            x2="492.006"
            y2="4.5619"
            stroke="black"
            stroke-width={2}
          />
        </svg> */}
        <p className="flex-grow-0 flex-shrink-0 text-4xl text-left text-black">
          프론트엔드 다 같이 하자!
        </p>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[49px] px-[44.5px] py-[36.5px]">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[57px]">
          <p className="flex-grow-0 flex-shrink-0 text-4xl font-bold text-left">
            스터디장
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-[32px] text-left">
            스터디장 이름 
          </p>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[57px]">
          <p className="flex-grow-0 flex-shrink-0 text-4xl font-bold text-left">
            스터디원
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-[32px] text-left">
            이름1, 이름2, 이름3 
          </p>
        </div>
      </div>
    </div>
  );
}
