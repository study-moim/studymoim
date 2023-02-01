import CourseBanner from "../components/coursepages/RecommendBanner";
import MainSearch from "../components/mainpages/MainSearch";
import { logoImage } from "../zustand/store";
import Tag from "../components/overall/Tag";
import MainCourse from "../components/mainpages/MainCourse";
import useFetch from "../hooks/useFetch";

export default function CourseMainRoot() {
  const { logos } = logoImage();
  const courseInfo = useFetch("http://localhost:8080/api/v1/course/");
  console.log(courseInfo)
  return (
    <div className="">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-[600px] border mt-3">
          {/* 큰 추천 배너 */}
          <CourseBanner />
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          <MainSearch />
          <div className="w-full flex flex-col justify-between items-center">
            <p className="text-xl text-left text-gray-400 my-3"># 인기태그</p>
            {/* TODO:  인기태그를 백에서 주면 좋을듯 */}
            <div className="grid gap-4 grid-cols-5 grid-flow-row auto-rows-auto">
              {logos.map((logo) => (
                <Tag key={logo.id} logo={logo} />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full text-end my-4">
          <select className="w-[120px] h-[40px] pl-5 text-xl border-[2px] border-[#e187fc] rounded-lg">
            <option value="normal">기본순</option>
            <option value="popular">인기순</option>
            <option value="view">조회순</option>
            <option value="new">최신순</option>
          </select>
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
