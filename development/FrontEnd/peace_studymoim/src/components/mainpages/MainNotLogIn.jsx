import MainCourse from "./MainCourse";
import useFetch from "../../hooks/useFetch";

export default function MainNotLogIn() {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const courseInfo = useFetch(`http://${API_SERVER}/api/v1/course/`);

  return (
    <>
      <p className="text-lg text-left font-bold my-5"># 전체 강좌</p>
      <div className="gap-5 mb-8 flex flex-row flex-wrap">
        {courseInfo.map((course) => (
          <MainCourse key={course.course_id} propData={course} />
        ))}
      </div>
    </>
  );
}
