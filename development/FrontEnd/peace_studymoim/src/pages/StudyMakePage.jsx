import { useNavigate } from "react-router-dom";
import userInfo from "../zustand/store";
import { useEffect } from "react";
import StudyMakeForm from "../components/studypages/StudyMakeForm";

export default function StudyMakePage() {
  let navigate = useNavigate();
  const { info } = userInfo();
  useEffect(() => {
    if (!info) {
      navigate("/login");
      return;
    }
  });
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;

  function addMeetupHandler(studyRecruitData) {
    fetch(`http://${API_SERVER}/api/v1/study/`, {
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
