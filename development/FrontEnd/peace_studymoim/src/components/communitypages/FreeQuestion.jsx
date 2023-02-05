import { Link } from "react-router-dom";

export default function FreeQuestion({ freeArticle }) {
  const dateBase = new Date(freeArticle.publishTime);
  const date = dateBase.toString().substring(0,24);
  const commentAmount = freeArticle.freeBoardComments.length;
  const slicedContent = freeArticle.content.substring(0, 100) + "...";

  return (
    <>
      <Link
        to={`/community/free/${freeArticle.freeBoardId}`}
        className="w-full hover:bg-gray-100"
      >
        {/* { <img
          src={
            freeArticle.user.saveName
              ? freeArticle.user.saveName
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjplK5Iw7kiaLK5XX1g5VJwc3W8m92UjVRgw&usqp=CAU"
          }
          className="w-[60px] h-[60px] object-cover ml-4"
        /> } */}
        <div className="mx-10 my-5 border-b">
          <div className="font-bold text-[18px] my-3">
            {freeArticle.title}
          </div>
          <div className="text-[12px] my-3 text-gray-800">
            {freeArticle.content > 100 ? slicedContent :freeArticle.content}
          </div>
          <div className="flex flex-row items-center gap-[30px] pb-5">
            <p className="text-[12px] font-bold">
              {freeArticle.user.nickname}
            </p>
            <p className="text-[12px] font-bold text-center text-gray-500">
              {date}
            </p>
            <p className="text-[12px] font-bold text-center text-gray-500">
              조회수 {freeArticle.hit}
            </p>
            <p className="text-[12px] font-bold text-center text-gray-500">
              댓글 {commentAmount}
            </p>
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
