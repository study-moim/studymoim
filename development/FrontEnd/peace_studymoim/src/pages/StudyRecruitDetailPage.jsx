import userInfo from "../zustand/store";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import StudyRecruitModalNotOpen from "../components/studypages/StudyRecruitModalNotOpen";
import StudyRecruitModalOpen from "../components/studypages/StudyRecruitModalOpen";
import MainCourse from "../components/mainpages/MainCourse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faUser,
  faCircleCheck,
} from "@fortawesome/free-regular-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function StudyRecruitDetailPage(props) {
  const navigate = useNavigate();
  const { info } = userInfo();

  useEffect(() => {
    if (!info) {
      navigate("/login");
      return;
    }
  });
  const [showOpenModal, setShowOpenModal] = useState(false);
  const [showNotOpenModal, setShowNotOpenModal] = useState(false);
  const studyId = useParams();
  const detailId = studyId.study_recruit_id;
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
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
  if (userList.userId) 
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-[50px] max-w-6xl mx-auto px-4">
        <div className="flex flex-col w-9/12">
          <div className="w-full pl-1 py-5 text-[25px] font-bold text-black">
            {studyDetail.title}
          </div>
          <div className="flex justify-start items-center relative pb-4 border-b">
            <img
              className="w-[50px] h-[50px] object-cover rounded-full border"
              src={studyDetail.saveName ? studyDetail.saveName : "/logo.png"}
            />
            <div className="pl-3">
              <NavLink
                to={`/mypage/${userList.userId}`}
                className="hover:text-[#989aff]"
              >
                <div className="px-2.5 text-[15px] font-bold">
                  {userList.nickname}
                </div>
                <div className="px-2.5 text-[13px]">{userList.email}</div>
              </NavLink>
            </div>
            <div className="absolute right-0">
              {/* 방장인 경우에는 스터디 수정창 아니면 스터디 신청  */}
              {info.userId === userList.userId ? (
                <Link to={"update"}>
                  <button className="p-2.5 w-[100px] rounded-[10px] text-center text-[14px] border border-[#b1b2ff] hover:bg-[#b1b2ff]">
                    수정하기
                  </button>
                </Link>
              ) : (
                <button
                  onClick={acceptHandler}
                  className="p-2.5 w-[100px] rounded-[10px] text-center text-[14px] border border-[#b1b2ff] hover:bg-[#b1b2ff]"
                >
                  스터디 신청
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 스터디 정보 부분  */}
        <div className="w-9/12">
          <div className="flex justify-around items-center border-b py-5">
            <div className="flex flex-col justify-center items-center">
              <FontAwesomeIcon icon={faCalendar} className="mb-3 text-[20px]" />
              <p className="text-sm">시작 예정일</p>
              <p className="text-sm font-bold">{studyDetail.startTime}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FontAwesomeIcon icon={faUser} className="mb-3 text-[20px]" />
              <p className="text-sm">모집 인원</p>
              <p className="text-sm font-bold">{studyDetail.userLimit} 명</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="mb-3 text-[20px]"
              />
              <p className="text-sm">모집 방법</p>
              {studyDetail.public ? (
                <p className="text-sm font-bold"> 공개 </p>
              ) : (
                <p className="text-sm font-bold"> 신청</p>
              )}
            </div>
          </div>
          <div className="container py-7 border-b">
            <p className="text-xl font-bold pb-3">상세 설명</p>
            <div className="text-[15px] break-all">{studyDetail.content}</div>
          </div>
          <div className="py-7">
            <p className="text-xl font-bold pb-3">커리큘럼</p>
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
              <div className="flex justify-around items-center w-full gap-2.5">
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
