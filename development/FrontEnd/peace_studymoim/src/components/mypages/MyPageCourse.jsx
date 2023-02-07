import MyPageCourseItem from "./MyPageCourseItem";
import useFetch from "../../hooks/useFetch";

export default function MyPageCourse({getPageName}) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  // test 하려고 모든 강좌 불러왔는데 api 주소만 바꾸면 될 듯!!
  const courseInfo = useFetch(`http://${API_SERVER}/api/v1/course/`);
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5 mt-8 h-[600px] overflow-auto">
      {courseInfo.map((course) => (
        <MyPageCourseItem key={course.course_id} propData={course} />
      ))}
    </div>
  );
}
