import { Link } from "react-router-dom";
import Moment from "moment/moment";
import "moment/locale/ko";

export default function LectureQuestion({ lectureQuestion }) {
  const commentAmount = lectureQuestion.questionBoardComments.length;

  return (
    <>
      <Link
        to={`/community/question/${lectureQuestion.questionBoardId}`}
        className="w-full hover:bg-gray-100"
      >
        <div className="mx-10 my-5 border-b flex justify-between">
          <div className="font-bold text-[16px] my-3">
            {lectureQuestion.title}
          </div>
          <div className="flex flex-row items-center gap-[30px] pb-2">
            <p className="text-[12px] font-bold">
              {lectureQuestion.user.nickname}
            </p>
            <p className="text-[12px] font-bold text-center text-gray-500">
              {Moment(lectureQuestion.publishTime).format("YYYY년 MM월 DD일 HH:mm")}
            </p>
            <p className="text-[12px] font-bold text-center text-gray-500">
              조회수 {lectureQuestion.hit}
            </p>
            <p className="text-[12px] font-bold text-center text-gray-500">
              댓글 {commentAmount}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
