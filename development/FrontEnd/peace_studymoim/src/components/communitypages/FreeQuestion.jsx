import { Link } from "react-router-dom";

export default function FreeQuestion({ freeArticle }) {
  const dateBase = new Date(freeArticle.publishTime);
  const date = dateBase.toString().substring(11, 24);
  const commentAmount = freeArticle.freeBoardComments.length;
  return (
    <>
      <Link
        to={`/community/free/${freeArticle.freeBoardId}`}
        className="my-3 flex flex-row gap-5 pl-[px] pr-[29px] pt-[20px] pb-3 bg-white border-t-0 border-r-0 border-b-4 border-l-[11px] border-[#eef1ff]/[0.98]"
      >
        <img
          src={
            freeArticle.user.saveName
              ? freeArticle.user.saveName
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjplK5Iw7kiaLK5XX1g5VJwc3W8m92UjVRgw&usqp=CAU"
          }
          className="w-[60px] h-[60px] object-cover ml-4"
        />
        <div className="w-full">
          <div className="flex flex-row justify-start w-full border-t-0 border-r-0 border-b-[0.3px] border-l-0 border-black">
            <div className="border border-black rounded-lg p-1 mr-2 mb-1">
              자유
            </div>
            <div className="font-bold text-left text-black text-[20px]">
              {freeArticle.title}
            </div>
          </div>
          <div className="flex flex-row items-center w-5/12 gap-[20px]">
            <div className="flex flex-row justify-between items-center">
              <p className=" text-[10px] font-bold text-center text-black mt-2">
                {freeArticle.user.nickname}
              </p>
            </div>
            <div className="flex justify-center items-center gap-3.5 py-[3.5px]">
              <p className="text-[12px] font-bold text-center text-[#898989]">
                {date}
              </p>
              <p className="text-[12px] font-bold text-center text-[#898989]">
                조회수 {freeArticle.hit}
              </p>
              <p className="text-[12px] font-bold text-center text-[#898989]">
                댓글 {commentAmount}
              </p>
            </div>
            {/* TODO: 강의질문에는 이부분 살리기 */}
            {/* <p className=" text-2xl font-bold text-center text-black">|</p>
            <p className=" text-2xl font-bold text-center text-black">
            [기초강의]피그마기초 - 1강. 피그마 들어가기전에...
          </p> */}
          </div>
        </div>
      </Link>
    </>
  );
}
