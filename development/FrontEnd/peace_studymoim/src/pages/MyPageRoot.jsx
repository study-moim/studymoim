import { useState, useEffect } from "react";
import MyPageLeftBar from "../components/mypages/MyPageLeftBar";
import StudyList from "../components/mypages/StudyList";
import MemoCourse from "../components/mypages/MemoCourse";
import MyPageLikeCourse from "../components/mypages/MyPageLikeCourse";
import MyPageArticle from "../components/mypages/MyPageArticle";
import MyPageLecture from "../components/mypages/MyPageLecture";
import MyPageCourse from "../components/mypages/MyPageCourse";
import MyPageStatic from "../components/mypages/MyPageStatic";
import MyPageModal from "../components/mypages/MyPageModal";
import useFetch from "../hooks/useFetch";


export default function MyPageRoot() {
  
  // 윈도우창 패쓰네임을 가져오기
  const [getPageName, setGetPageName] = useState(window.location.pathname.substring(8, 255) * 1)

  // 클릭 로직
  const [currentClick, setCurrentClick] = useState("study");
  const [prevClick, setPrevClick] = useState(null);
  const [showModal, setShowModal] = useState(null);

  const getClick = (event) => {
    setCurrentClick(event.target.id);
  };
  const clickModal = (event) => {
    setShowModal(event.target.id);
  };
  useEffect(
    (e) => {
      if (currentClick !== null) {
        let current = document.getElementById(currentClick);
        current.className =
          "cursor-pointer text-lg font-bold text-center text-[#989aff] hover:scale-105";
      }
      if (prevClick !== null) {
        let prev = document.getElementById(prevClick);
        prev.className =
          "cursor-pointer text-base text-center text-black hover:scale-105";
      }

      setPrevClick(currentClick);
    },
    [currentClick]
  );

  return (
    <div>
      <div className="w-full min-h-[700px] flex flex-row justify-center gap-10">
        {/* 왼쪽네비바 */}
        <MyPageLeftBar
          getClick={getClick}
          clickModal={clickModal}
          getPageName={getPageName}
        />
        <MyPageModal
          clickModal={clickModal}
          showModal={showModal}
          setShowModal={setShowModal}
          getPageName={getPageName}
        />
        {/* 안쪽 중요 내용 */}
        <div className="flex flex-col justify-start w-full p-[20px]">
          {currentClick === "study" ? <StudyList getPageName={getPageName}/> : null}
          {currentClick === "course" ? <MyPageCourse getPageName={getPageName}/> : null}
          {currentClick === "lecture" ? <MyPageLecture getPageName={getPageName}/> : null}
          {currentClick === "memo" ? <MemoCourse getPageName={getPageName}/> : null}
          {currentClick === "article" ? <MyPageArticle getPageName={getPageName}/> : null}
          {currentClick === "like" ? <MyPageLikeCourse getPageName={getPageName}/> : null}
          {currentClick === "static" ? <MyPageStatic getPageName={getPageName}/> : null}
        </div>
      </div>
    </div>
  );
}
