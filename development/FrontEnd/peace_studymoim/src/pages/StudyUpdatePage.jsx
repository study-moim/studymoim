import { useParams } from "react-router-dom";
import StudyMakeForm from "../components/studypages/StudyMakeForm"
export default function StudyUpdatePage() {
  //const studyId = useParams();
  //const detailId = studyId.study_recruit_id;
  // useFetch(
  //   `https://react-a-3b3d0-default-rtdb.firebaseio.com/react/${detailId}.json`
  // );

  return (
    <div>
      <StudyMakeForm />
    </div>
  )
}; 