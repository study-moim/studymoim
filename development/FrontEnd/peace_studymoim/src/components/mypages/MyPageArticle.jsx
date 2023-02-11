import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyPageArticle({ getPageName }) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const [myArticles, setArticle] = useState({ question: [], free: [] });
  const [filterInfo, setFilterInfo] = useState([]);
  const [toggled, setToggled] = useState(false);
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  useMemo(() => {
    const getArticle = async () => {
      await fetch(`http://${API_SERVER}/api/v1/user/${getPageName}/articles/`)
        .then((res) => res.json())
        .then((json) => {
          setArticle(json);
          setFilterInfo(json.free);
        });
    };
    getArticle();
  }, [getPageName]);

  useEffect(() => {
    const getWord = async () => {
      if (!toggled) {
        setFilterInfo(
          myArticles.free.filter((article) => {
            return article.title
              .replace(" ", "")
              .toLocaleLowerCase()
              .includes(word.toLocaleLowerCase().replace(" ", ""));
          })
        );
      } else {
        setFilterInfo(
          myArticles.question.filter((article) => {
            return article.title
              .replace(" ", "")
              .toLocaleLowerCase()
              .includes(word.toLocaleLowerCase().replace(" ", ""));
          })
        );
      }
    };
    getWord();
  }, [word]);

  useEffect(() => {
    const getArticleList = async () => {
      if (!toggled) {
        setFilterInfo(myArticles.free);
      } else {
        setFilterInfo(myArticles.question);
      }
    };
    getArticleList();
  }, [toggled]);

  return (
    <>
      <div>
        {/* 키워드 검색 */}
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onClick={(e) => setToggled(!toggled)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#989aff]"></div>
          <span className="ml-3 text-sm">질문글 보기</span>
        </label>
        <div className="flex justify-end text-[15px]">
          <form className="w-[50%] flex relative h-[40px] mb-3">
            <button className="absolute right-0 bg-[#B1B2FF] rounded-full w-[30px] h-[30px] my-[5px] mr-[5px] text-white">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input
              type="text"
              placeholder="검색 키워드를 입력하세요"
              className="w-full h-[40px] text-[14px] border border-slate-500 rounded-[30px] pl-4 focus:outline-none focus:ring focus:ring-violet-300"
              onChange={(e) => {
                setWord(e.target.value);
              }}
            />
          </form>
        </div>
        {/* 아티클들 */}
        <table className="table-auto w-full text-[14px] text-center">
          <thead>
            <tr className="h-10 border-b">
              <th className="w-[50%]">제목</th>
              <th className="w-[40%]">작성일</th>
              <th className="w-[10%]">조회수</th>
            </tr>
          </thead>
          <tbody>
            {toggled
              ? filterInfo.map((item) => {
                  return (
                    <tr
                      key={item.questionBoardId}
                      onClick={() => navigate(`/community/question/${item.questionBoardId}`)}
                      className="h-10 hover:bg-gray-200 cursor-pointer"
                    >
                      <td className="w-[50%]">{item.title}</td>
                      <td className="w-[40%]">{item.publishTime.substring(0, 10)}</td>
                      <td className="w-[10%]">{item.hit}</td>
                    </tr>
                  );
                })
              : filterInfo.map((item) => {
                  return (
                    <tr
                      key={item.freeBoardId}
                      onClick={() => navigate(`/community/free/${item.freeBoardId}`)}
                      className="h-10 hover:bg-gray-200 cursor-pointer"
                    >
                      <td className="w-[50%]">{item.title}</td>
                      <td className="w-[40%]">{item.publishTime.substring(0, 10)}</td>
                      <td className="w-[10%]">{item.hit}</td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </>
  );
}
