import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import useFetchObject from "../../hooks/useFetchObject";
import MyPageArticleItem from "./MyPageArticleItem";
import { useState } from "react";

export default function MyPageArticle({ getPageName }) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;

  const [article, setArticle] = useState([])
  const articles1 = useFetchObject(
    `http://${API_SERVER}/api/v1/user/${getPageName}/articles/`
  );
  console.log(articles1, "asdfasdf");
  return (
    <>
      <div>
        {/* 키워드 검색 */}
        <div className="flex justify-center">
          <form className="w-[50%] relative h-[50px] border border-slate-500 bg-white rounded-[30px] flex my-5">
            <button className="absolute right-0 bg-[#B1B2FF] rounded-full w-[30px] h-[30px] my-[7px] mr-[10px] text-white">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input
              type="text"
              placeholder="검색 키워드를 입력하세요"
              className="w-full rounded-[30px] pl-4"
            />
          </form>
        </div>
        {/* 아티클들 */}

        {articles1.free &&
          articles1.free.map((article) => {
            <MyPageArticleItem key={article.freeBoardId} article={article}/>
          })}
      </div>
    </>
  );
}
