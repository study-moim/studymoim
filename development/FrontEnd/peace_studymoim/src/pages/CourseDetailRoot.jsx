import CourseBanner from "../components/coursedetail/CourseBanner";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import LectureShort from "../components/coursedetail/LectureShort";

export default function CourseDetailRoot() {
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
  
  const freeArticles = useFetch("http://localhost:8080/api/v1/articles/free/");
  return (
    <div className="max-w-6xl mx-auto px-4">
      <CourseBanner />
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
            id="community"
            onClick={GetClick}
            className="pt-[10px] w-[130px] h-[50px] rounded-tl-[15px] rounded-tr-[15px] bg-[#ad9dfe] border-0 border-black text-[22px] font-bold text-center text-white/[0.87] cursor-pointer"
          >
            커뮤니티
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
            <LectureShort />
            <LectureShort />
            <LectureShort />
            <LectureShort />
            <LectureShort />
            <LectureShort />
          </div>
        : null }
        {currentClick === "community" ? (
          <div className="flex justify-end items-center self-stretch  h-[92px] gap-2.5 px-2.5 pb-2.5 bg-white">
            <div className="flex justify-start items-start  gap-[23px]">
              <Link to="/community/create">
                <div
                  className="px-8 py-[13px] rounded-[10px] bg-[#b1b2ff]/50 text-xl font-bold text-black hover:bg-[#b1b2ff]/90 hover:scale-95"
                  style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
                >
                  새 글
                </div>
              </Link>

              <select
                name="커뮤니티정렬"
                className="pl-[20px] w-[150px] h-[40px] mt-[10px] bg-[#f2f2f2] cursor-pointer"
                style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
              >
                <option value="">정렬하기</option>
                <option value="new">최신순</option>
                <option value="old">오래된순</option>
                <option value="big">조회높은순</option>
                <option value="small">조회낮은순</option>
              </select>
            </div>
          </div>
        ) : null}

        {/* { currentClick==="study" ? 스터디페이지 : null } */}
        { currentClick==="study" ? <div>스터디페이지</div> : null }
      </div>
    </div>
  );
}
