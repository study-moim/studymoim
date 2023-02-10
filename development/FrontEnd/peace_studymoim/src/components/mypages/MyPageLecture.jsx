import MyPageLectureItem from "./MyPageLectureItem";
import useFetch from "../../hooks/useFetch";

export default function MyPageLecture({getPageName}) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const lectureInfo = useFetch(`http://${API_SERVER}/api/v1/user/${getPageName}/lectures`);
  
  return (
    <div className="gap-2 mb-8 flex flex-row flex-wrap overflow-auto">
      {lectureInfo.map((lecture) => (
        <MyPageLectureItem key={lecture.lectureId} propData={lecture} />
      ))}
    </div>
  );
}
