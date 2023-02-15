import MyPageLectureItem from "./MyPageLectureItem";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

export default function MyPageLecture({ getPageName }) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const lectureInfo = useFetch(
    `http://${API_SERVER}/api/v1/user/${getPageName}/lectures`
  );

  return (
    <>
      {lectureInfo.length > 0 ? (
        <div className="gap-2 mb-8 flex flex-row flex-wrap overflow-auto">
          {lectureInfo.map((lecture) => (
            <MyPageLectureItem key={lecture.lectureId} propData={lecture} />
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex flex-col justify-start items-start gap-10 mt-24 ml-24">
          <div className="text-3xl">수강중인 강의가 없습니다.</div>
          <Link
            to={"/study"}
            className="border w-[30%] text-center bg-[#bdbef9] h-[50px] pt-3 hover:bg-[#989aff] rounded-lg text-[#656565] font-bold"
          >
            강좌 둘러보고 강의 수강하기
          </Link>
        </div>
      )}
    </>
  );
}
