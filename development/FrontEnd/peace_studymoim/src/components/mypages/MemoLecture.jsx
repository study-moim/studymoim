import useFetch from "../../hooks/useFetch";
import MemoItem from "./MemoItem";

export default function MemoLecture({ props }) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const lectureInfo = useFetch(
    `http://${API_SERVER}/api/v1/lecture/${props}`
  );
  
  return (
    <>
      {lectureInfo.map((lecture) => (
        <MemoItem key={lecture.lectureId} lectureData={lecture} />
      ))}
    </>
  );
}
