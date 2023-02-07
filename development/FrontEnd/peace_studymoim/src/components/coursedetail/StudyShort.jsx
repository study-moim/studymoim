import { Link, useLocation } from "react-router-dom";

export default function StudyShort({ propData, studyIndex }) {
  return (
    <Link
      to={`/study/${propData.studyId}`}
      state={{
        propData: propData,
      }}
      className="cursor-pointer w-full "
    >
      <div className="w-full flex flex-row h-[100px] gap-2 py-2 items-center hover:bg-gray-200 hover:rounded-[15px] border-b">
        <p className="px-5 text-base text-center">{studyIndex}</p>
        <div className="mr-[30px] flex flex-col gap-1">
          <p className="text-base font-bold">{propData.title}</p>
          <p className="text-base">{propData.content}</p>
          <p className="text-base">시작일{propData.startTime}</p>
        </div>
      </div>
    </Link>
  );
}
