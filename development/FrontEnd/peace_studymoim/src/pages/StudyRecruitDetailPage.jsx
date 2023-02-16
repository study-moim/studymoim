import { Link, NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./StudyRecruitDetailPage.css";
import LoginModal from "../components/NavBar/LoginModal";
import { useNavigate } from "react-router";

export default function StudyRecruitDetailPage(props) {
  const [showModal, setShowModal] = useState(false);
  const [showOpenModal, setShowOpenModal] = useState(false);
  const [showNotOpenModal, setShowNotOpenModal] = useState(false);
  const [requestState, setRequestState] = useState("");
  const [requestMessage, setRequestMessage] = useState("");
  const studyId = useParams();
  const detailId = studyId.study_recruit_id;
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const IMAGE_ROOT = import.meta.env.VITE_APP_IMAGE_ROOT;
  const navigate = useNavigate(); 
  const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
    <span {...props}>{children}</span>
  );
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: (
      <SlickButtonFix>
        <img src="/left-arrow.png" alt="" />
      </SlickButtonFix>
    ),
    nextArrow: (
      <SlickButtonFix>
        <img src="/right-arrow.png" alt="" />
      </SlickButtonFix>
    ),
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeend: 100,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [studyDetail, setStudyDetail] = useState([]);
  const [userList, setUserList] = useState([]);
  const [curriculum, setCurriculum] = useState([]);
  const { info } = userInfo();
  useEffect(() => {
    if (!info) {
      setShowModal(true);
    }
  });

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
  }, [detailId]);

  useEffect(() => {
    const getRequestState = async () => {
      await fetch(
        `http:///${API_SERVER}/api/v1/study/request/${detailId}/${info.userId}`
      )
        .then((res) => res.json())
        .then((json) => {
          setRequestState(json.state);
          console.log(requestState);
          getRequestMessage();
        });
    };
    getRequestState();
    
  }, [detailId, requestState]);
  
  function getRequestMessage() {
    if (requestState == "waiting") setRequestMessage("신청 대기 중입니다.");
    else if (requestState == "proceeding")
      setRequestMessage("가입된 스터디입니다.");
    else if (requestState == "banned") setRequestMessage("신청할 수 없습니다.");
  }

  function closeModalHandler() {
    if (!studyDetail.public) {
      setShowNotOpenModal(false);
      window.location.reload();
    } else {
      setShowOpenModal(false);
      window.location.reload();
    }
  }

  function acceptHandler() {
    if (!studyDetail.public) {
      setShowNotOpenModal(true);
    } else {
      setShowOpenModal(true);
    }
  }

  function closeLoginHandler() {
    setShowModal(false);
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-[50px] max-w-6xl mx-auto px-4">
        <div className="flex flex-col w-9/12">
          <div className="w-full py-7 text-2xl font-bold text-black">
            {studyDetail.title}
          </div>
          <div className="flex justify-start items-center relative pb-7 border-b">
            {console.log(studyDetail)}
            <img
              className="w-[50px] h-[50px] object-cover rounded-full border"
              src={userList.saveName ? IMAGE_ROOT + userList.saveName : "/logo.png"}
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
            <div className="absolute right-0 flex flex-col gap-2">
              <button
                onClick={() => navigate(-1)}
                className="border text-[14px] text-center border-[#bdbef9] px-5 py-2 hover:bg-[#bdbef9] rounded-lg font-bold"
              >
                목록 가기
              </button>
              {/* 방장인 경우에는 스터디 수정창 아니면 스터디 신청  */}
              {info &&
                (info.userId === userList.userId ? (
                  <Link to={"update"}>
                    <button className="border text-[14px] text-center border-[#bdbef9] px-5 py-2 hover:bg-[#bdbef9] rounded-lg font-bold">
                      스터디 정보 수정
                    </button>
                  </Link>
                ) : requestState == "possible" ? (
                  <button
                    onClick={acceptHandler}
                    className="border text-[14px] text-center border-[#bdbef9] px-5 py-2 hover:bg-[#bdbef9] rounded-lg font-bold"
                  >
                    스터디 신청
                  </button>
                ) : (
                  <div className="text-[15px]">{requestMessage}</div>
                ))}
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
              {studyDetail.public ? (
                <p className="text-sm"> 공개 </p>
              ) : (
                <p className="text-sm"> 수락</p>
              )}
            </div>
          </div>
          <div className="border-t container mt-10">
            <div className="py-5 text-[16px] font-semibold break-all whitespace-pre-wrap font-sans border-b">{studyDetail.content}</div>
          </div>

          <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left mt-10">
            커리큘럼
          </p>
          {curriculum.length > 2 ? (
            <Slider {...settings}>
              {curriculum.map((item) => {
                return (
                  <MainCourse
                    key={item.course.course_id}
                    propData={item.course}
                  />
                );
              })}
            </Slider>
          ) : (
            <div className="flex justify-around items-center flex-grow-0 flex-shrink-0 w-full gap-2.5 pl-2.5 pb-2.5">
              {curriculum.map((item) => {
                return (
                  <MainCourse
                    key={item.course.course_id}
                    propData={item.course}
                  />
                );
              })}
            </div>
          )}
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
        {showModal ? (
          <LoginModal
            onCancel={closeLoginHandler}
            onConfirm={closeLoginHandler}
          />
        ) : null}
      </div>
    </>
  );
}
