import CourseBanner from "../components/coursedetail/CourseBanner";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import LectureShort from "../components/coursedetail/LectureShort";
import StudyShort from "../components/coursedetail/StudyShort";

export default function CourseDetailRoot() {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const props = useLocation().state.propData;
  const lectureInThisCourse = useFetch(
    `http://${API_SERVER}/api/v1/lecture/${props.course_id}`
  );
  const studyInThisCourse = useFetch(
    `http://${API_SERVER}/api/v1/course/${props.course_id}/study_list`
  );
  let totalTime = 0;
  lectureInThisCourse.forEach((lecture) => {
    totalTime += lecture.length;
  });

  const dataForBanner = {
    title: props.title,
    thumbnail: props.thumbnail,
    courseProvider: props.courseProviderName,
    totalTime: totalTime,
    totalLecture: lectureInThisCourse.length,
    likeUserCount: props.likeUserCount,
  };
  const [currentClick, setCurrentClick] = useState("curriculum");
  const [prevClick, setPrevClick] = useState(null);

  // 누르면 전체/강의/자유 색이 바뀜
  const GetClick = (event) => {
    setCurrentClick(event.target.id);
  };

  useEffect(
    (e) => {
      if (currentClick !== null) {
        let current = document.getElementById(currentClick);
        current.style.backgroundColor = "#8871f9";
      }
      if (prevClick !== null) {
        let prev = document.getElementById(prevClick);
        prev.style.backgroundColor = "#ad9dfe";
      }
      setPrevClick(currentClick);
    },
    [currentClick]
  );

  return (
    <div className="max-w-6xl mx-auto px-4 flex flex-row gap-5 my-[30px]">
      <div className="w-[35%] mt-[40px]">
        <CourseBanner dataForBanner={dataForBanner} />
      </div>
      {/* 네비게이션 */}
      <div className="w-[65%]">
        <div className="w-full flex">
          <div
            id="curriculum"
            onClick={GetClick}
            className="flex justify-center items-center w-[100px] h-[40px] rounded-tl-[15px] rounded-tr-[15px] bg-[#ad9dfe] border-0 text-[18px] font-bold text-center text-white cursor-pointer"
          >
            커리큘럼
          </div>
          <div
            id="study"
            onClick={GetClick}
            className="flex justify-center items-center w-[100px] h-[40px] rounded-tl-[15px] rounded-tr-[15px] bg-[#ad9dfe] border-0 text-[18px] font-bold text-center text-white cursor-pointer"
          >
            스터디
          </div>
          <div
            id="community"
            onClick={GetClick}
            className="flex justify-center items-center w-[100px] h-[40px] rounded-tl-[15px] rounded-tr-[15px] bg-[#ad9dfe] border-0 text-[18px] font-bold text-center text-white cursor-pointer"
          >
            커뮤니티
          </div>
        </div>
        <div className="flex flex-col justify-start items-center w-full h-fit border-t border-gray-200 overflow-auto">
          {currentClick === "curriculum" ? (
            <div className="w-full flex flex-col justify-center items-center gap-[15px] p-3">
              {lectureInThisCourse.map((lecture, idx) => (
                <LectureShort
                  key={lecture.lectureId}
                  propData={lecture}
                  lectureIndex={idx + 1}
                />
              ))}
            </div>
          ) : null}
          {/* { currentClick==="study" ? 스터디페이지 : null } */}
          {currentClick === "study" ? (
            <div className="w-full flex flex-col justify-center items-center gap-[15px] p-3">
            {studyInThisCourse.map((study, idx) => (
              <StudyShort
                key={study.studyId}
                propData={study}
                studyIndex={idx + 1}
              />
            ))}
          </div>
            // <div className="text-4xl">
            //   스터디페이지: 백엔드가 할 일- 이 강좌를 담고 있는 스터디를 모아서
            //   보여줘야함!!!!!!!!!!!!!!!!!! {}
            // </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
