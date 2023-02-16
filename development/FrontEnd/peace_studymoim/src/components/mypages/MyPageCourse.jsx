import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import MypageCourseItem from "./MyPageCourseItem";

export default function MyPageCourse({ getPageName }) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const courseInfo = useFetch(
    `http://${API_SERVER}/api/v1/user/${getPageName}/courses`
  );

  return (
    <>
      {courseInfo.length > 0 ? (
        <div className="gap-2 mb-8 flex flex-row flex-wrap overflow-auto">
          {courseInfo.map((course) => (
            <MypageCourseItem key={course.course_id} propData={course} />
          ))}
        </div>
      ) : (
        <div className="w-full h-[50%] flex flex-col justify-center items-center gap-10">
          <div className="text-3xl">수강중인 강좌가 없습니다.</div>
          <Link
            to={"/course"}
            className="border w-[30%] text-center border-[#bdbef9] h-[50px] pt-3 hover:bg-[#bdbef9] rounded-lg font-bold"
          >
            강좌 둘러보기
          </Link>
        </div>
      )}
    </>
  );
}
