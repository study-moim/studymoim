import getArticles from "../../hooks/getArticles";
import getArticleList from "../../zustand/articles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import FreeQuestion from "./FreeQuestion";
import { useState, useEffect } from "react";

export default function FreeRoot() {
  getArticles();
  const { articles } = getArticleList();
  const freeArticles = articles;
  const [word, setWord] = useState("");
  const [selected, setSelected] = useState("new");
  const [filterInfo, setFilterInfo] = useState(freeArticles);

  useEffect(() => {
    const getWord = async () => {
      setFilterInfo(
        freeArticles.filter((free) => {
          return free.title
            .replace(" ", "")
            .toLocaleLowerCase()
            .includes(word.toLocaleLowerCase().replace(" ", ""));
        })
      );
    };
    getWord();
  }, [word]);

  useEffect(() => {
    const getSelected = async () => {
      if (selected == "new") {
        setFilterInfo(freeArticles);
      } else if (selected == "old") {
        setFilterInfo(freeArticles.reverse());
      } else if (selected == "big") {
        setFilterInfo(
          freeArticles.sort((prev, cur) => {
            if (prev.hit > cur.hit) return 1;
            if (prev.hit < cur.hit) return -1;
          })
        );
      } else if(selected == "small"){
        setFilterInfo(
          freeArticles.sort((prev, cur) => {
            if (prev.hit < cur.hit) return 1;
            if (prev.hit > cur.hit) return -1;
          })
        );
      }
    };
    getSelected();
  }, [selected]);

  return (
    <div className="w-full">
      <div className="flex justify-end items-center self-stretch h-[100px] gap-2.5">
      <form className="flex relative h-[50px] w-[400px]">
          <button className="absolute right-0 bg-[#B1B2FF] rounded-full w-[30px] h-[30px] m-[10px] text-white">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            type="text"
            placeholder="궁금한 자유글을 검색해보세요!"
            className="w-full h-[50px] border border-slate-500 rounded-[30px] pl-4 focus:outline-none focus:ring focus:ring-violet-300"
            onChange={(e) => {
              setWord(e.target.value);
            }}
          />
        </form>
        <select
          name="커뮤니티정렬"
          className="px-[20px] w-[150px] h-[50px] border border-slate-500 rounded-[30px] cursor-pointer"
          onChange={(e) => {
            setSelected(e.target.value);
          }}
        >
          <option value="new">최신순</option>
          <option value="old">오래된순</option>
          <option value="big">조회높은순</option>
          <option value="small">조회낮은순</option>
        </select>
      </div>
      <div className="flex flex-col justify-start items-start w-full">
        {filterInfo.map((freeArticle) => (
          <FreeQuestion
            key={freeArticle.freeBoardId}
            freeArticle={freeArticle}
          />
        ))}
      </div>
    </div>
  );
}
