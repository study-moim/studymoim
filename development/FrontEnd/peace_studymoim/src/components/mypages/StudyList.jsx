import StudyListItem from "./StudyListItem";
import useFetch from "../../hooks/useFetch";
import userInfo from "../../zustand/store";

export default function StudyList({ getPageName }) {
  const { info } = userInfo();
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const studyInfo = useFetch(`http://${API_SERVER}/api/v1/user/${getPageName}/studies`);

  return (
    <>
      <div className="flex flex-wrap gap-3 justify-start">
        {studyInfo.map((study) => (
          <StudyListItem key={study.studyId} propData={study} />
        ))}
      </div>
    </>
  );
}
