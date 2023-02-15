import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import CurriculumUpdateModal from "./CurriculumUpdateModal";

export default function StudyIntroduceBanner({ propData, props, userInfo, curriculum }) {
  const [showModal, setShowModal] = useState(false);

  function closeModalHandler() {
    setShowModal(false);
  }

  const selectedOptions = curriculum.map((a) =>
    Object.assign({ value: a.course.course_id, label: a.course.title })
  );

  return (
    <div className="flex flex-row bg-[#ebefff] mb-5 rounded-[5px] h-[185px]">
      <div className="flex flex-col w-6/12 pl-[40px] py-[25px]">
        <p className="w-full text-[35px] font-bold mb-[20px]">{propData && propData.title}</p>
        {props && (
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faCrown} className="pr-4" />
            <NavLink to={`/mypage/${props.userId}`} className="hover:text-[#8871f9]">
              <div className="text-[15px] ">{props.nickname}</div>
            </NavLink>
          </div>
        )}
        <div className="flex items-center">
          <FontAwesomeIcon icon={faUser} className="pr-5" />
          {propData.members &&
            propData.members.map((member) => {
              return (
                <NavLink to={`/mypage/${member.userId}`} className="hover:text-[#8871f9]">
                  <div className="text-[15px] pr-3">{member.nickname}</div>
                </NavLink>
              );
            })}
        </div>
      </div>
      {props.userId === userInfo && (
        <div className="w-6/12 flex gap-2 py-[25px] pr-[25px] justify-end items-end">
          <button
            className="w-[150px] h-fit px-4 py-2 rounded-[15px] text-[15px] text-center border-2 border-[#2e2f35] cursor-pointer bg-[#ff7262] hover:animate-pulse text-white"
            onClick={() => setShowModal(true)}
          >
            커리큘럼 수정
          </button>
          <Link to={`/study/${propData.studyId}/update`}>
            <button className="w-[150px] h-fit px-4 py-2 rounded-[15px] text-[15px] text-center border-2 border-[#2e2f35] cursor-pointer bg-[#ff7262] hover:animate-pulse text-white">
              스터디 정보 수정
            </button>
          </Link>
        </div>
      )}
      {showModal ? (
        <CurriculumUpdateModal
          curriculum={selectedOptions}
          onCancel={closeModalHandler}
          onConfirm={closeModalHandler}
        />
      ) : null}
    </div>
  );
}
