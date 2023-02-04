import useFetch from "../hooks/useFetch";
import { useState, useEffect } from "react";
import FreeQuestion from "../components/communitypages/FreeQuestion";
import { Link } from "react-router-dom";
import axios from "axios"
import getArticles from "../hooks/getArticles"
import {getArticleList} from "../zustand/articles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

export default function CommunityMainRoot() {
  getArticles()
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const [currentClick, setCurrentClick] = useState("all");
  const [prevClick, setPrevClick] = useState(null);
  const { articles } = getArticleList()
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

  useEffect(() => {

  }, )
  // const freeArticles = useFetch(`http://${API_SERVER}/api/v1/articles/free/`);
  const freeArticles = articles
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 bg-white my-[100px]">
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row">
            <div
              id="all"
              onClick={GetClick}
              className="flex justify-center items-center w-[100px] h-[40px] rounded-tl-[15px] rounded-tr-[15px] bg-[#ad9dfe] border-0 text-[18px] font-bold text-center text-white cursor-pointer"
            >
              전체
            </div>
            <div
              id="lecture"
              onClick={GetClick}
              className="flex justify-center items-center w-[100px] h-[40px] rounded-tl-[15px] rounded-tr-[15px] bg-[#ad9dfe] border-0 text-[18px] font-bold text-center text-white cursor-pointer"
            >
              강의
            </div>
            <div
              id="free"
              onClick={GetClick}
              className="flex justify-center items-center w-[100px] h-[40px] rounded-tl-[15px] rounded-tr-[15px] bg-[#ad9dfe] border-0 text-[18px] font-bold text-center text-white cursor-pointer"
            >
              자유
            </div>
          </div>
          <Link to="/community/create">
            <div className="px-8 py-[5px] rounded-[10px] bg-[#ad9dfe] text-base text-white hover:bg-[#b1b2ff]/90">
              <FontAwesomeIcon icon={faPencil} /> 글쓰기
            </div>
          </Link>
        </div>

        <div className="flex flex-col justify-start items-start border">
          <div className="flex justify-center items-center self-stretch h-[100px] gap-2.5">
            <form className="flex relative h-[42px] border border-slate-500 bg-white rounded-[30px] w-[300px]">
              <button className="absolute right-0 bg-[#B1B2FF] rounded-full w-[30px] h-[30px] my-[5px] mr-[5px] text-white">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
              <input type="text" placeholder="궁금한 글을 검색해보세요!" className="w-full rounded-[30px] pl-4" />
            </form>

            <select
                name="커뮤니티정렬"
                className="px-[20px] w-[150px] h-[42px] border border-slate-500 rounded-[30px] cursor-pointer"
            >
              <option value="">정렬하기</option>
              <option value="new">최신순</option>
              <option value="old">오래된순</option>
              <option value="big">조회높은순</option>
              <option value="small">조회낮은순</option>
            </select>
          </div>
          <div className="flex flex-col justify-start items-start w-full">
            {freeArticles.map((freeArticle) => (
                <FreeQuestion
                  key={freeArticle.free_board_id}
                  freeArticle={freeArticle}
                />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
