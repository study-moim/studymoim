import { Link, NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import StudyRecruitModalNotOpen from "../components/studypages/StudyRecruitModalNotOpen";
import StudyRecruitModalOpen from "../components/studypages/StudyRecruitModalOpen";
import MainCourse from "../components/mainpages/MainCourse";
import userInfo from "../zustand/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faUsers,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function StudyRecruitDetailPage(props) {
  const [showOpenModal, setShowOpenModal] = useState(false);
  const [showNotOpenModal, setShowNotOpenModal] = useState(false);
  const studyId = useParams();
  const detailId = studyId.study_recruit_id;
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;

  const [studyDetail, setStudyDetail] = useState([]);
  const [userList, setUserList] = useState([]);
  const [curriculum, setCurriculum] = useState([]);
  const { info } = userInfo();

  useEffect(() => {
    fetch(`http:///${API_SERVER}/api/v1/study/${detailId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setStudyDetail(data);
        setUserList(data.leadUser);
        setCurriculum(data.curricula);
      });
  });

  function closeModalHandler() {
    if (!studyDetail.public) {
      setShowNotOpenModal(false);
    } else {
      setShowOpenModal(false);
    }
  }

  function acceptHandler() {
    if (!studyDetail.public) {
      setShowNotOpenModal(true);
    } else {
      setShowOpenModal(true);
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-[50px] max-w-6xl mx-auto px-4">
        <div className="flex flex-col w-9/12">
          <div className="w-full py-7 text-2xl font-bold text-black">
            {studyDetail.title}
          </div>
          <div className="flex justify-start items-center relative pb-7 border-b">
            <img
              className="w-[50px] h-[50px] object-cover rounded-full"
              src={studyDetail.saveName ? studyDetail.saveName : "/logo.png"}
            />
            <div className="pl-3">
              <NavLink
                to={`/mypage/${userList.userId}`}
                className="hover:text-[#989aff]"
              >
                <div className="px-2.5 ext-[15px] font-bold">
                  {userList.nickname}
                </div>
              </NavLink>
            </div>
            <div className="absolute right-0">
              {/* 방장인 경우에는 스터디 수정창 아니면 스터디 신청  */}
              {info.userId === userList.userId ? (
                <Link to={"update"}>
                  <button className="text-[14px] text-center hover:font-bold">
                    수정하기
                  </button>
                </Link>
              ) : (
                <button
                  onClick={acceptHandler}
                  className="text-[14px] text-center hover:font-bold"
                >
                  스터디 신청
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 스터디 정보 부분  */}
        <div className="w-9/12 py-7 bg-white text-2xl font-bold mt-10">
          <div className="flex justify-around items-center">
            <div className="flex flex-col justify-center items-center">
              <FontAwesomeIcon icon={faCalendarDays} />
              <p className="text-sm">시작예정일</p>
              <p className="text-sm">{studyDetail.startTime}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FontAwesomeIcon icon={faUsers} />
              <p className="text-sm">모집인원</p>
              <p className="text-sm">{studyDetail.userLimit}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FontAwesomeIcon icon={faCircleCheck} />
              <p className="text-sm">모집방법</p>
              {studyDetail.public ? <p className="text-sm"> 공개 </p> : <p className="text-sm"> 수락</p>}
            </div>
          </div>
        <div className="flex justify-center items-center mt-10">
          {/* TODO: 일단 md 바꾸고 이건 생각해보장 ㅋ  */}
        {studyDetail.content}
        </div>
        <div className="flex flex-col justify-start items-center relative gap-9">
            <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left mt-10">
              커리큘럼
            </p>
            {/* TODO: 캐러샐로 하자 ...  */}
            <div className="flex justify-around items-center flex-grow-0 flex-shrink-0 w-full gap-2.5 pl-2.5 pb-2.5">
              {curriculum &&
                curriculum.map((item) => {
                  return (
                    <MainCourse key={item.course.course_id} propData={item.course} /> 
                  )
                })}
            </div>
          </div>

        </div>

        {showOpenModal ? (
          <StudyRecruitModalOpen
            onCancel={closeModalHandler}
            onConfirm={closeModalHandler}
          />
        ) : null}
        {showNotOpenModal ? (
          <StudyRecruitModalNotOpen onCancel={closeModalHandler} />
        ) : null}
      </div>
    </>
  );
}
