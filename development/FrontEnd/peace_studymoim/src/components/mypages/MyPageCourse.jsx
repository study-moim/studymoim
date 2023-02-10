import useFetch from "../../hooks/useFetch";
import MypagecourseItem from "./MyPageCourseItem";

export default function MyPageCourse({getPageName}) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const courseInfo = useFetch(`http://${API_SERVER}/api/v1/user/${getPageName}/courses`);

  return (
    <div className="gap-2 mb-8 flex flex-row flex-wrap overflow-auto">
      {courseInfo.map((course) => (
        <MypagecourseItem key={course.course_id} propData={course} />
      ))}
    </div>
  );
}
