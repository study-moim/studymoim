export default function FreeQuestion({ freeArticle }) {
  return (
    <>
      <div className="my-[20px] flex flex-col  h-[276px] gap-5 pl-[42px] pr-[29px] py-[35px] bg-white border-t-0 border-r-0 border-b-4 border-l-[11px] border-[#eef1ff]/[0.98]">
        <div className="flex justify-start items-end  w-[1043px] gap-[21px] border-t-0 border-r-0 border-b-[0.3px] border-l-0 border-black">
          <p className=" w-[707px] h-[70px] text-[34px] font-bold text-left text-black">
            {freeArticle.title}
          </p>
        </div>
        <p className=" w-[1052px] h-[79px] text-xl text-left text-black">
          {freeArticle.content}
        </p>
        <div className="flex justify-end items-start  w-[1049px]">
          <div className="flex justify-start items-start  w-[735px] gap-2.5">
            <div className=" w-8 h-8">
              <div className=" left-[-0.5px] top-[-0.5px]" />
              <img
                src={freeArticle.user_picture}
                className="w-[40.32px] h-8  left-[-4.5px] top-[-0.5px] object-cover"
              />
            </div>
            <p className=" text-[16px] font-bold text-center text-black">
              {freeArticle.user_name}
            </p>
            {/* TODO: 강의질문에는 이부분 살리기 */}
            {/* <p className=" text-2xl font-bold text-center text-black">|</p>
            <p className=" text-2xl font-bold text-center text-black">
              [기초강의]피그마기초 - 1강. 피그마 들어가기전에...
            </p> */}
          </div>
          <div className="flex justify-center items-center  gap-3.5 py-[3.5px]">
            <p className=" text-xl font-bold text-center text-[#898989]">
              {freeArticle.publish_time}
            </p>
            <p className=" text-xl font-bold text-center text-[#898989]">
              조회수 {freeArticle.hit}
            </p>
            <p className=" text-xl font-bold text-center text-[#898989]">
              댓글 3
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
