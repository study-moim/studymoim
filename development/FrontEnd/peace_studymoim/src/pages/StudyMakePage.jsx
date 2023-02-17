import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import userInfo from "../zustand/store";
import StudyMakeForm from "../components/studypages/StudyMakeForm";
import LoginModal from '../components/NavBar/LoginModal'; 

export default function StudyMakePage() {
  const [showModal, setShowModal] = useState(false);
  function closeModalHandler() {
    setShowModal(false);
  }
  const navigate = useNavigate();
  const { info } = userInfo();
  useEffect(() => {
    if (!info) {
      setShowModal(true);
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
      {showModal ? (
        <LoginModal
          onCancel={closeModalHandler}
          onConfirm={closeModalHandler}
        />
      ) : null}
    </div>
  );
}
