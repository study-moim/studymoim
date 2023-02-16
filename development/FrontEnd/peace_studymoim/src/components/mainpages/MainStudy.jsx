import { Link } from "react-router-dom";

export default function MainStudy({ propData }) {

  return (
    <Link
      to={`/study/${propData.studyId}`}
      state={{
        propData: propData,
      }}
    >
      <div className="min-w-[350px] max-w-[350px] h-[150px] rounded-[15px] border p-5 cursor-pointer gap-2 transition ease-in-out duration-300 hover:-translate-y-1.5 hover:shadow-md">
        <div className="flex flex-col gap-2 h-[150px]">
          <p className="text-[15px] font-bold truncate">{propData.title}</p>
          <p className="text-[13px] text-gray-500 truncate">{propData.content}</p>
          <p className="text-[13px] text-gray-500">
            시작예정일 | {propData.startTime}
          </p>
          <p className="text-[13px] text-[#B1B2FF]">
            {propData.userLimit - propData.userGathered} 명 모집 중
          </p>
        </div>
      </div>
    </Link>
  );
}
