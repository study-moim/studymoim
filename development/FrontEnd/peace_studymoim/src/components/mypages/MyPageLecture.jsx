import MyPageLectureItem from "./MyPageLectureItem";
import useFetch from "../../hooks/useFetch";

export default function MyPageLecture({clickUserId}) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  // 여기도 test 하려고 12번 강좌에 속한 강의 불러왔는데 api 주소만 바꾸면 될 듯!!
  const lectureInfo = useFetch(`http://${API_SERVER}/api/v1/lecture/12`);
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5 mt-8 h-[600px] overflow-auto">
      {lectureInfo.map((lecture) => (
        <MyPageLectureItem key={lecture.lectureId} propData={lecture} />
      ))}
    </div>
  );
}
