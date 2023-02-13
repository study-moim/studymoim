import useFetch from "../../hooks/useFetch";
import MemoCourse from "./MemoCourse";

export default function MyPageMemo({ getPageName }) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  // Todo 메모 api 바꾸기
  const courseInfo = useFetch(`http://${API_SERVER}/api/v1/note/course/${getPageName}`);
  return (
    <div className="max-w-2xl">
      {courseInfo.map((data) => (
        <MemoCourse key={data.course_id} courseData={data} />
      ))}
    </div>
  );
}
