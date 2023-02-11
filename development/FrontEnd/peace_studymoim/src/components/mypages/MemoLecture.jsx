import useFetch from "../../hooks/useFetch";
import MemoItem from "./MemoItem";

export default function MemoLecture({ courseId, getPageName }) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  // Todo 메모 api 바꾸기
  // const lectureInfo = useFetch(`http://${API_SERVER}/api/v1/note/lecture/${getPageName}/${courseId}`);
  const lectureInfo = useFetch(`http://${API_SERVER}/api/v1/note/lecture/1/${courseId}`);

  return (
    <>
      {lectureInfo.map((lecture) => (
        <MemoItem key={lecture.lectureId} lectureData={lecture} />
      ))}
    </>
  );
}
