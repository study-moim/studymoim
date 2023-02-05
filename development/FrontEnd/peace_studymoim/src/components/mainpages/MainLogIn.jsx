import useFetch from "../../hooks/useFetch";
import { userInfo } from "../../zustand/store";
import MainCourse from "./MainCourse";
export default function MainLogIn() {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const { info } = userInfo(); 
  const userId = info.userId;
  const userNickname = info.nickname; 
    
  const recommendCourses = useFetch(`http://${API_SERVER}/api/v1/user/${userId}/recommend/courses`);
  return (
    <>
    <p className="text-xl">#{userNickname}님 추천강좌</p>
      <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-10 grid-cols-2">
        {recommendCourses.map((course) => (
          <MainCourse key={course.course_id} propData={course} />
        ))}
      </div>
    </>
  );
}