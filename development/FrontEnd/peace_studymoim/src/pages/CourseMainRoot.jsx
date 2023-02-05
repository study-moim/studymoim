import CourseBanner from "../components/coursepages/RecommendBanner";
import MainSearch from "../components/mainpages/MainSearch";
import TagList from "../components/overall/TagList";
import MainCourse from "../components/mainpages/MainCourse";
import useFetch from "../hooks/useFetch";
import userInfo from "../zustand/store";

export default function CourseMainRoot() {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const courseInfo = useFetch(`http://${API_SERVER}/api/v1/course/`);
  const { info } = userInfo();
  return (
    <div className="">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border mt-3">
          {/* 큰 추천 배너 */}
          {info ? <CourseBanner /> : null}
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          <MainSearch />
          <div className="w-full flex flex-col justify-between items-center">
            <p className="text-xl text-left text-gray-400 my-3"># 인기태그</p>
            <TagList /> 
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-8 h-[600px] overflow-auto">
          {courseInfo.map((course) => (
            <MainCourse key={course.course_id} propData={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
