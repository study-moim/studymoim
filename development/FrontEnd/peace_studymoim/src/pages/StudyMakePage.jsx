import { useNavigate } from "react-router-dom";
import StudyMakeForm from "../components/studypages/StudyMakeForm";

export default function StudyMakePage() {
  let navigate = useNavigate(); 

  function addMeetupHandler(studyRecruitData) {
    fetch("http://localhost:8080/api/v1/study/", {
      method: "POST",
      body: JSON.stringify(studyRecruitData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/study");
    });
  }

  return (
    <div>
      <StudyMakeForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}
