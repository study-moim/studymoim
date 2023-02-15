import StudyListItem from "./StudyListItem";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

export default function StudyList({ getPageName }) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const studyInfo = useFetch(
    `http://${API_SERVER}/api/v1/user/${getPageName}/studies`
  );

  return (
    <>
      {studyInfo.length > 0 ? (
        <div className="flex flex-wrap gap-3 justify-start">
          {studyInfo.map((study) => (
            <StudyListItem key={study.studyId} propData={study} />
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex flex-col justify-start items-start gap-10 mt-24 ml-24">
          <div className="text-3xl">참여중인 스터디가 없습니다.</div>
          <Link
            to={"/study"}
            className="border w-[30%] text-center bg-[#bdbef9] h-[50px] pt-3 hover:bg-[#989aff] rounded-lg text-[#656565] font-bold"
          >
            스터디 둘러보기
          </Link>
        </div>
      )}
    </>
  );
}
