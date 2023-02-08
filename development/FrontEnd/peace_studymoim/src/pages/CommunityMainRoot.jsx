import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import FreeRoot from "../components/communitypages/FreeRoot";
import QuestionRoot from "../components/communitypages/QuestionRoot";

export default function CommunityMainRoot() {
  const [currentClick, setCurrentClick] = useState("free");
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
    <>
      <div className="max-w-6xl mx-auto px-4 bg-white my-[100px]">
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row">
            <div
              id="free"
              onClick={GetClick}
              className="flex justify-center items-center w-[100px] h-[40px] rounded-tl-[15px] rounded-tr-[15px] bg-[#ad9dfe] border-0 text-[18px] text-center text-white cursor-pointer"
            >
              자유
            </div>
            <div
              id="lecture"
              onClick={GetClick}
              className="flex justify-center items-center w-[100px] h-[40px] rounded-tl-[15px] rounded-tr-[15px] bg-[#ad9dfe] border-0 text-[18px] text-center text-white cursor-pointer"
            >
              강의
            </div>
          </div>
          {currentClick == "free" ? 
          (
            <Link to="/community/create">
            <div className="flex items-center h-[36px] rounded-[10px] px-8 bg-[#ad9dfe] text-base text-white hover:bg-[#b1b2ff]/90">
              <FontAwesomeIcon icon={faPenToSquare} /> &nbsp; 글쓰기
            </div>
          </Link>
          )
           : (
            <p></p>
            )}
          
        </div>

        <div className="flex flex-col justify-start items-start border-t">
          {currentClick === "lecture" ? 
            <QuestionRoot />
          : null}
          {currentClick === "free" ? (
            <FreeRoot />
          ) : null}
        </div>
      </div>
    </>
  );
}
