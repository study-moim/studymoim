import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import CurriculumUpdateModal from "./CurriculumUpdateModal";

export default function StudyIntroduceBanner({
  propData,
  props,
  userInfo,
  curriculum,
}) {
  const [showModal, setShowModal] = useState(false);

  function closeModalHandler() {
    setShowModal(false);
  }

  const selectedOptions = curriculum.map((a) => 
    Object.assign({ value: a.course.course_id, label: a.course.title })
  )


  return (
    <div className="flex flex-row justify-between bg-[#ebefff]">
      <div className="flex flex-col w-10/12 pt-[15px] pb-[30px] px-[25px] gap-[15px]">
        <p className="w-full text-[40px] font-bold">
          <span className="font-bold text-[#a259ff]">
            {propData && propData.title}
          </span>
        </p>

        <div className="flex w-full justify-start items-center relative gap-[10px]">
          {props && (
            <NavLink
              to={`/mypage/${props.userId}`}
              className="hover:text-[#989aff]"
            >
              <div className="px-1 ext-[15px] font-bold">{props.nickname}</div>
            </NavLink>
          )}

          <FontAwesomeIcon icon={faCrown} />

          {propData.members &&
            propData.members.map((member) => {
              return (
                <NavLink
                  to={`/mypage/${member.userId}`}
                  className="hover:text-[#989aff]"
                >
                  <div className="px-2.5 ext-[15px] font-bold">
                    {member.nickname}
                  </div>
                </NavLink>
              );
            })}
        </div>
      </div>
      <div className="flex justify-between items-end mb-3 mr-3">
        {props.userId === userInfo && (
          <div className="flex flex-col">
            <button
              className="px-[30px] py-[10px] rounded-[15px] bg-[#ff7262] border-2 border-[#2e2f35] hover:animate-pulse font-bold text-center uppercase text-white"
              onClick={() => setShowModal(true)}
            >
              커리큘럼 수정
            </button>
            <Link
              to={`/study/${propData.studyId}/update`}
              className="px-[30px] py-[10px] rounded-[15px] bg-[#ff7262] border-2 border-[#2e2f35] hover:animate-pulse"
            >
              <button className="font-bold text-center uppercase text-white">
                스터디 수정
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
    </div>
  );
}
