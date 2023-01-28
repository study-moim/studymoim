import { useState, useEffect } from "react";
import MyPageLeftBar from "../components/mypages/MyPageLeftBar";
import StudyList from "../components/mypages/StudyList";
import MemoCourse from "../components/mypages/MemoCourse";
import MyPageLikeCourse from "../components/mypages/MyPageLikeCourse";
import MyPageArticle from "../components/mypages/MyPageArticle";
import MyPageLecture from "../components/mypages/MyPageLecture";
import MyPageCourse from "../components/mypages/MyPageCourse";
import MyPageStatic from "../components/mypages/MyPageStatic";
import ModalPractice from "../components/mypages/MyPageModal";

export default function MyPageRoot() {
  const [currentClick, setCurrentClick] = useState("study");
  const [prevClick, setPrevClick] = useState(null);
  const [showModal, setShowModal] = useState(null);
  // 누르면 전체/강의/자유 색이 바뀜
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
          "cursor-pointer text-xl font-bold text-center text-[#7b61ff] hover:scale-105";
      }
      if (prevClick !== null) {
        let prev = document.getElementById(prevClick);
        prev.className =
          "cursor-pointer text-xl text-center text-black hover:scale-105";
      }

      setPrevClick(currentClick);
    },
    [currentClick]
  );

  return (
    <div className="max-w-6xl mx-auto mt-[50px]">
      <div className="w-full min-h-[700px] flex flex-row justify-center gap-10">
        {/* 왼쪽네비바 */}
        <MyPageLeftBar getClick={getClick} clickModal={clickModal} />
        <ModalPractice clickModal={clickModal} showModal={showModal} setShowModal={setShowModal}/>
        {/* 안쪽 중요 내용 */}
        <div className="flex flex-col justify-start w-full p-[20px] rounded-[20px] border border-[#7b7474]">
          {currentClick === "study" ? <StudyList /> : null}
          {currentClick === "course" ? <MyPageCourse /> : null}
          {currentClick === "lecture" ? <MyPageLecture /> : null}
          {currentClick === "memo" ? <MemoCourse /> : null}
          {currentClick === "article" ? <MyPageArticle /> : null}
          {currentClick === "like" ? <MyPageLikeCourse /> : null}
          {currentClick === "static" ? <MyPageStatic /> : null}
        </div>
      </div>
    </div>
  );
}
