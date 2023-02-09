import useFetch from "../../hooks/useFetch";
import MemoCourse from "./MemoCourse";

export default function MyPageMemo({ getPageName }) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  // test 하려고 모든 강좌 불러왔는데 api 주소만 바꾸면 될 듯!!
  const courseInfo = useFetch(
    `http://${API_SERVER}/api/v1/user/${getPageName}/courses`
  );
  console.log(courseInfo)
  return (
    <div>
      {courseInfo.map((data) => (
        <MemoCourse key={data.courseId} courseData={data} />
      ))}
    </div>
  );
}
