import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import StudySearch from "../components/studypages/StudySearch";
import { useState, useEffect } from "react";
import userInfo from "../zustand/store";
import LoginModal from "../components/NavBar/LoginModal";

export default function StudyRecruitMainPage() {
  const [showModal, setShowModal] = useState(false);

  function closeModalHandler() {
    setShowModal(false);
  }

  const { info } = userInfo();
  useEffect(() => {
    if (!info) {
      alert("로그인이 필요합니다.");
      setShowModal(true);
      return;
    }
  });

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 bg-white my-[100px]">
        <div className="flex flex-row justify-end w-full mb-2">
      
        
          <Link to="/study/study_recruit_form">
            <div className="px-8 py-[5px] rounded-[10px] bg-[#ad9dfe] text-base text-white hover:bg-[#b1b2ff]/90">
              <FontAwesomeIcon icon={faPencil} /> 스터디 만들기
            </div>
          </Link>
        </div>

        <div className="flex flex-col justify-start items-start border">
          <StudySearch />
        </div>
      </div>
      {showModal ? (
        <LoginModal
          onCancel={closeModalHandler}
          onConfirm={closeModalHandler}
        />
      ) : null}
    </>
  );
}

