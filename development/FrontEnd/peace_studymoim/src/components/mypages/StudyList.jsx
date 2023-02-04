import StudyListItem from "./StudyLiseItem";
import useFetch from "../../hooks/useFetch";

export default function StudyList() {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const studyInfo = useFetch(`http://${API_SERVER}/api/v1/user/1/studies`);

  return (
    <>
    {studyInfo.map((study) => (
        <StudyListItem key={study.studyId} propData={study} />
      ))}
    </>
  );
}