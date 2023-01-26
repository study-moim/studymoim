export default function CommunityComment() {
  return (
    <>
      <div className="flex flex-col justify-start border-solid ">
        {/* 댓글 맨위 */}
        <div className=" w-full gap-[400px]">
          <div className="flex justify-start items-end  relative gap-px">
            <img className="" src="ellipse-331.png" />
            <div className=" relative gap-2.5 px-2.5 py-2">
              <p className=" text-[15px] font-bold text-center text-black">
                튜슬리스
              </p>
            </div>
            <div className=" relative gap-2.5 px-2.5 py-[8.5px]">
              <p className=" text-[15px] text-center text-[#7b7474]">
                2023.01.23 18:00
              </p>
            </div>
            <div className=" relative gap-2.5 px-2.5 py-2">
              <p className=" text-[15px] font-bold text-center text-[#898989]">
                조회수 16
              </p>
            </div>
            <div className=" relative gap-2.5 px-2.5 py-[8.5px]">
              <p className=" text-[15px] font-bold text-center text-[#898989]">
                댓글 1
              </p>
            </div>
          </div>
        </div>
        {/* 댓글 내용 */}
        <div className="w-full h-[205px] relative gap-2.5 p-[30px] text-[15px] text-center text-black">
          <p className=" text-[15px] text-center text-black">걍 하기 싫다</p>
        </div>
      </div>
      {/* TODO: 답글 열기 토글 */}
      <div className="h-12  p-2.5 rounded-[10px] bg-[#b1b2ff] text-[15px] font-bold text-center text-white">
        답글 보기
      </div>
    </>
  );
}
