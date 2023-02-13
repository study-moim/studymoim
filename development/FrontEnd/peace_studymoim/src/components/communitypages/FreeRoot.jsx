import getArticles from "../../hooks/getArticles";
import getArticleList from "../../zustand/articles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import FreeQuestion from "./FreeQuestion";
import { useState, useEffect } from "react";
import {data} from "autoprefixer";
import NavPagination from "../NavBar/NavPagination.jsx";

export default function FreeRoot() {
  //getArticles();
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  //const { articles } = getArticleList();
  //const freeArticles = articles;
  const [word, setWord] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [selected, setSelected] = useState("new");
  const [sort, setSort] = useState('publishTime,desc');
  const [page, setPage] = useState(null);
  const [params, setParams] = useState({
    "key": "title",
    "word": "",
    "page": 0,
    "size": 10,
    "sort": 'publishTime,desc'
  });

  useEffect(() => {
    const getPage = async () => {
      let query = Object.keys(params)
          .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
          .join('&');
      console.log(query)
      let resp = await fetch(`http://${API_SERVER}/api/v1/articles/free?`+query)
      let data = await resp.json()
      setPage(data);
    };
    getPage();
  }, [params]);

  useEffect(() => {
    const getParams = () => {
      setParams({
        "key": "title",
        "word": word,
        "page": currentPage-1,
        "size": 10,
        "sort": sort
      })
    }
    getParams();
  }, [word, currentPage, sort]);

  useEffect(() => {
    const getSelected = () => {
      if (selected == "new") {
        setSort('publishTime,desc');
      } else if (selected == "old") {
        setSort('publishTime,asc');
      } else if (selected == "big") {
        setSort('hit,desc');
      } else if (selected == "small") {
        setSort('hit,asc');
      }
    }
    getSelected();
  }, [selected]);

  return (
    <div className="w-full">
      <div className="flex justify-end items-center self-stretch h-[60px] gap-2.5">
      <form className="flex relative h-[40px] w-[400px]">
          <button className="absolute right-0 bg-[#B1B2FF] rounded-full w-[30px] h-[30px] m-[5px] text-white">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            type="text"
            placeholder="궁금한 자유글을 검색해보세요!"
            className="w-full h-[40px] text-[14px] border border-slate-500 rounded-[30px] pl-4 focus:outline-none focus:ring focus:ring-violet-300"
            onChange={(e) => {
              setWord(e.target.value);
            }}
          />
        </form>
        <select
          name="커뮤니티정렬"
          className="px-[20px] w-[150px] h-[40px] text-[14px] border border-slate-500 rounded-[30px] cursor-pointer"
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
        {page ? page.content.map((freeArticle) => (
          <FreeQuestion
            key={freeArticle.freeBoardId}
            freeArticle={freeArticle}
          />
        )) : null}
      </div>
      <NavPagination
          firstLabel="처음"
          lastLabel="마지막"
          breakLabel="..."
          onPageChange={setCurrentPage}
          pageCount={page ? page.totalPages : 0}
          pageRangeDisplayed={5}
      />
    </div>
  );
}
