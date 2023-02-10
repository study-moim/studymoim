import useFetch from "../../hooks/useFetch";
import MemoCourse from "./MemoCourse";

export default function MyPageMemo({ getPageName }) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  // test 하려고 모든 강좌 불러왔는데 api 주소만 바꾸면 될 듯!!
  const courseInfo = useFetch(
    `http://${API_SERVER}/api/v1/user/${getPageName}/courses`
  );
  return (
    <div className="max-w-2xl">
      {courseInfo.map((data) => (
        <MemoCourse key={data.course_id} courseData={data} />
      ))}
    </div>
  );
}
