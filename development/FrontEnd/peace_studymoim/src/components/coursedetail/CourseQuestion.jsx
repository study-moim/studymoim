import { Link } from "react-router-dom";

export default function CourseQuestion({ propData, questionIndex }) {
  return (
    <Link
      to={`/community/question/${propData.questionBoardId}`}
      state={{
        propData: propData,
      }}
      className="cursor-pointer w-full "
    >
      <div className="w-full flex flex-row h-[100px] gap-2 py-2 items-center hover:bg-gray-200 hover:rounded-[15px] border-b">
        <p className="px-5 text-base text-center">{questionIndex}</p>
        <div className="mr-[30px] flex flex-col gap-1 ">
          <p className="text-base font-bold">{propData.title}</p>
          <p className="text-base">{propData.content}</p>
          <div className="flex flex-row gap-4">
            <p className="text-base">
              작성일: {propData.publishTime.substring(0, 10)}
            </p>
            <p>조회수: {propData.hit}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
