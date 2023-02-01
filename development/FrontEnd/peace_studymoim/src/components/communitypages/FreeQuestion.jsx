import { Link } from "react-router-dom";

export default function FreeQuestion({ freeArticle }) {
  // console.log(freeArticle);
  const dateBase = new Date(freeArticle.publishTime);
  const date = dateBase.toString().substring(11, 24);
  return (
    <>
      <Link
        to={`/community/free/${freeArticle.freeBoardId}`}
        state={{
          freeBoardId: freeArticle.freeBoardId,
          title: freeArticle.title,
          content: freeArticle.content,
          comments: freeArticle.freeBoardComments,
          publishTime: date,
          userName: freeArticle.user.nickname,
          // userPicture: freeArticle.user.saveName,
          userPicture:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjplK5Iw7kiaLK5XX1g5VJwc3W8m92UjVRgw&usqp=CAU",
          hit: freeArticle.hit,
        }}
        className="my-[20px] flex flex-row gap-5 pl-[42px] pr-[29px] py-[20px] bg-white border-t-0 border-r-0 border-b-4 border-l-[11px] border-[#eef1ff]/[0.98]"
      >
        <div className="flex flex-col justify-between w-7/12">
          <div className="border-t-0 border-r-0 border-b-[0.3px] border-l-0 border-black text-[22px] font-bold text-left text-black">
            {freeArticle.title}
          </div>
          <p className="h-[79px] text-[16px] text-left text-black">
            {freeArticle.content.substring(0, 15)}
          </p>
        </div>
        <div className="flex flex-row items-center w-5/12 gap-[20px]">
          <div className="flex flex-row justify-between items-center">
            <img
              src={
                freeArticle.user.saveName
                  ? freeArticle.user.saveName
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjplK5Iw7kiaLK5XX1g5VJwc3W8m92UjVRgw&usqp=CAU"
              }
              className="w-[50px] h-[50px] object-cover"
            />
            <p className=" text-[10px] font-bold text-center text-black mt-2">
              {freeArticle.user.nickname}
            </p>
            {/* TODO: 강의질문에는 이부분 살리기 */}
            {/* <p className=" text-2xl font-bold text-center text-black">|</p>
            <p className=" text-2xl font-bold text-center text-black">
              [기초강의]피그마기초 - 1강. 피그마 들어가기전에...
            </p> */}
          </div>
          <div className="flex justify-center items-center gap-3.5 py-[3.5px]">
            <p className="text-[12px] font-bold text-center text-[#898989]">
              {date}
            </p>
            <p className="text-[12px] font-bold text-center text-[#898989]">
              조회수 {freeArticle.hit}
            </p>
            <p className="text-[12px] font-bold text-center text-[#898989]">
              댓글 3
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
