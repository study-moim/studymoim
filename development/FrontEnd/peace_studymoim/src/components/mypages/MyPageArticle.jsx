import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function MyPageArticle({ getPageName }) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const [myArticles, setArticle] = useState({ question: [], free: [] });
  useMemo(() => {
    const getArticle = async () => {
      await fetch(`http://${API_SERVER}/api/v1/user/${getPageName}/articles/`)
        .then((res) => res.json())
        .then((json) => {
          setArticle(json);
        });
    };
    getArticle();
  }, [getPageName]);
  console.log(myArticles.free);
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
        <table className="table-auto w-full text-center mt-5">
          <thead>
            <tr className="h-20">
              <th>종류</th>
              <th>제목</th>
              <th>작성일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {myArticles.free.map((item) => (
              <tr className="h-10" key={item.freeBoardId}>
                <td className="w-[10%]">
                  <div className="border rounded-lg w-10/12 p-1 bg-white">
                    자유
                  </div>
                </td>
                  <Link
                    to={`/community/free/${item.freeBoardId}`}
                    className="w-full hover:bg-gray-200 cursor-pointer"
                  >
                <td className="w-[50%] hover:bg-gray-200 cursor-pointer">
                    {item.title}
                </td>
                  </Link>
                <td className="w-[30%]">{item.publishTime.substring(0, 10)}</td>
                <td className="w-[10%]">{item.hit}</td>
              </tr>
            ))}
            {myArticles.question.map((item) => {
              return (
                <tr
                  key={item.questionBoardId}
                  className="hover:bg-gray-200 cursor-pointer h-10"
                >
                  <td className="w-[10%]">
                    <div className="border rounded-lg w-10/12 p-1 bg-white">
                      질문
                    </div>
                  </td>
                  <td className="w-[50%]">{item.title}</td>
                  <td className="w-[30%]">
                    {item.publishTime.substring(0, 10)}
                  </td>
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
