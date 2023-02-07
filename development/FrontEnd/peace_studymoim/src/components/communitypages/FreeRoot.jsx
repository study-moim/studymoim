import getArticles from "../../hooks/getArticles";
import getArticleList from "../../zustand/articles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import FreeQuestion from "./FreeQuestion";

export default function FreeRoot() {
  getArticles();
  const { articles } = getArticleList();
  const freeArticles = articles;
  return (
    <div className="w-full">
      <div className="flex justify-center items-center self-stretch h-[100px] gap-2.5">
        <form className="flex relative h-[42px] border border-slate-500 bg-white rounded-[30px] w-[300px]">
          <button className="absolute right-0 bg-[#B1B2FF] rounded-full w-[30px] h-[30px] my-[5px] mr-[5px] text-white">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            type="text"
            placeholder="궁금한 자유글을 검색해보세요!"
            className="w-full rounded-[30px] pl-4"
          />
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
            key={freeArticle.freeBoardId}
            freeArticle={freeArticle}
          />
        ))}
      </div>
    </div>
  );
}
