import MainCourse from "./MainCourse";
import useFetch from "../../hooks/useFetch";

export default function MainNotLogIn() {
  const courseInfo = useFetch("http://localhost:8080/api/v1/course/info");

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
