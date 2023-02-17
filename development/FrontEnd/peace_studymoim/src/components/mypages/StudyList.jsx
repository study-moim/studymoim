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
        <div className="flex flex-wrap justify-start items-center gap-3">
          {studyInfo.map((study) => (
            <div key={study.studyId} className="w-[31%]">
            <StudyListItem key={study.studyId} propData={study} />
            </div> 
          ))}
        </div>
      ) : (
        <div className="w-full h-[50%] flex flex-col justify-center items-center gap-10">
          <div className="text-3xl">참여중인 스터디가 없습니다.</div>
          <Link
            to={"/study"}
            className="border w-[30%] text-center border-[#bdbef9] h-[50px] pt-3 hover:bg-[#bdbef9] rounded-lg font-bold"
          >
            스터디 둘러보기
          </Link> 
        </div>
      )}
    </>
  );
}
