import CourseBanner from "../components/coursedetail/CourseBanner";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import LectureShort from "../components/coursedetail/LectureShort";

export default function CourseDetailRoot() {
  const props = useLocation().state.propData;
  const lectureInThisCourse = useFetch(`http://localhost:8080/api/v1/lecture/info/${props.course_id}`);
  let totalTime = 0
  lectureInThisCourse.forEach(lecture => {
    totalTime += lecture.length
  });

  const dataForBanner = {
    title: props.title,
    thumbnail: props.thumbnail,
    courseProvider: props.courseProvider.name,
    totalTime: totalTime,
    totalLecture: lectureInThisCourse.length,
  }
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
    <div className="max-w-6xl mx-auto px-4">
      <CourseBanner dataForBanner={dataForBanner}/>
      {/* 네비게이션 */}
      <div className="flex flex-row justify-between">
        <div className="w-full flex ">
          <div
            id="curriculum"
            onClick={GetClick}
            className="pt-[10px] w-[130px] h-[50px] rounded-tl-[15px] rounded-tr-[15px] bg-[#ad9dfe] border-0 border-black text-[22px] font-bold text-center text-white/[0.87] cursor-pointer"
          >
            커리큘럼
          </div>
          <div
            id="study"
            onClick={GetClick}
            className="pt-[10px] w-[130px] h-[50px] rounded-tl-[15px] rounded-tr-[15px] bg-[#ad9dfe] border-0 border-black text-[22px] font-bold text-center text-white/[0.87] cursor-pointer"
          >
            스터디
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center w-full h-screen border border-black overflow-auto">
        { currentClick==="curriculum" ?
          <div className="w-11/12 flex flex-col justify-center items-center gap-[15px] py-12">
            {lectureInThisCourse.map((lecture, idx) => (
              <LectureShort key={lecture.lectureId} propData={lecture} lectureIndex={idx+1}/>
            ))}
          </div>
        : null }
        {/* { currentClick==="study" ? 스터디페이지 : null } */}
        { currentClick==="study" ? <div className="text-4xl">스터디페이지: 백엔드가 할 일- 이 강좌를 담고 있는 스터디를 모아서 보여줘야함 {  }</div> : null }
      </div>
    </div>
  );
}
