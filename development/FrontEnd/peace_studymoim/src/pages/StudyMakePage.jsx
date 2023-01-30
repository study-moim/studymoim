import { useNavigate } from "react-router-dom";
import StudyMakeForm from "../components/studypages/StudyMakeForm";

export default function StudyMakePage() {
  let navigate = useNavigate(); 

  function addMeetupHandler(studyRecruitData) {
    fetch("https://react-a-3b3d0-default-rtdb.firebaseio.com/react.json", {
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
