import MainCourse from "./MainCourse";
import useFetch from "../../hooks/useFetch";

export default function MainNotLogIn() {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const courseInfo = useFetch(`http://${API_SERVER}/api/v1/course/`);

  return (
    <>
      <p className="text-xl">#전체 강좌</p>
      <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-10 grid-cols-2">
        {courseInfo.map((course) => (
          <MainCourse key={course.course_id} propData={course} />
        ))}
      </div>
    </>
  );
}
