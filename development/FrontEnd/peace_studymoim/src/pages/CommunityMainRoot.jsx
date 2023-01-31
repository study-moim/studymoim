import useFetch from "../hooks/useFetch";
import { useState, useEffect } from "react";
import FreeQuestion from "../components/communitypages/FreeQuestion";
import { Link } from "react-router-dom";
import axios from "axios"

export default function CommunityMainRoot() {
  const [currentClick, setCurrentClick] = useState("all");
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
  // **axios 예제 지우지 마시오**
  // const [freeArticles, setFreeArticles] = useState([]);
  // const url = "http://localhost:8080/api/v1/articles/free/";
  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((response) => {
  //       setFreeArticles(response.data);
  //       // console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       console.log("실패");
  //     });
  // }, []);

  const freeArticles = useFetch("http://localhost:8080/api/v1/articles/free/");
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 bg-white my-[100px]">
        <div className="flex flex-row justify-between">
          <div className="w-full flex ">
            <div
              id="all"
              onClick={GetClick}
              className="pt-[10px] w-[100px] h-[50px] rounded-tl-[15px] rounded-tr-[15px] bg-[#ad9dfe] border-0 border-black text-[22px] font-bold text-center text-white/[0.87] cursor-pointer"
            >
              전체
            </div>
            <div
              id="lecture"
              onClick={GetClick}
              className="pt-[10px] w-[100px] h-[50px] rounded-tl-[15px] rounded-tr-[15px] bg-[#ad9dfe] border-0 border-black text-[22px] font-bold text-center text-white/[0.87] cursor-pointer"
            >
              강의
            </div>
            <div
              id="free"
              onClick={GetClick}
              className="pt-[10px] w-[100px] h-[50px] rounded-tl-[15px] rounded-tr-[15px] bg-[#ad9dfe] border-0 border-black text-[22px] font-bold text-center text-white/[0.87] cursor-pointer"
            >
              자유
            </div>
          </div>
          <input
            className="w-6/12 pl-[30px] py-[7px] rounded-[15px] bg-[#efefef] mb-[10px]"
            style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
            placeholder="                  커뮤니티 검색"
          />
        </div>
        <div className="flex flex-col justify-start items-start">
          <div className="flex justify-end items-center self-stretch  h-[92px] gap-2.5 px-2.5 pb-2.5 bg-white border-t border-r-[0.3px] border-b-0 border-l-[0.3px] border-black">
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
          <div className="flex flex-col justify-start items-start w-full border-x-[0.3px] border-b-[0.3px] border-black ">
            {freeArticles.map((freeArticle) => (
              <div className="cursor-pointer hover:scale-105 w-11/12 ml-6 ">
                <FreeQuestion
                  key={freeArticle.free_board_id}
                  freeArticle={freeArticle}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
