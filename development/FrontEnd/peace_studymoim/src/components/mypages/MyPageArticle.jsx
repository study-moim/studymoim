import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import useFetch from "../../hooks/useFetch";

export default function MyPageArticle() {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const articles = {
    header: ["제목", "작성일", "조회수"],
    data: [
      { title: "뷰3랑 리액트 중에 뭐 공부 할까요?", publishTime: "2023.02.04.05:21", hit: "1" },
      { title: "뷰3랑 리액트 중에 뭐 공부 할까요?", publishTime: "2023.02.04.05:21", hit: "453" },
      { title: "뷰3랑 리액트 중에 뭐 공부 할까요?", publishTime: "2023.02.04.05:21", hit: "5" },
      { title: "뷰3랑 리액트 중에 뭐 공부 할까요?", publishTime: "2023.02.04.05:21", hit: "445" },
      { title: "뷰3랑 리액트 중에 뭐 공부 할까요?", publishTime: "2023.02.04.05:21", hit: "78" },
    ],
  };
  // articles.data = useFetch(`http://${API_SERVER}/api/v1/user/1/articles`);
  return (
    <>
      <div>
        {/* 키워드 검색 */}
        <div className="flex justify-center">
          <form className="w-[50%] relative h-[50px] border border-slate-500 bg-white rounded-[30px] flex my-5">
            <button className="absolute right-0 bg-[#B1B2FF] rounded-full w-[30px] h-[30px] my-[7px] mr-[10px] text-white">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input type="text" placeholder="검색 키워드를 입력하세요" className="w-full rounded-[30px] pl-4" />
          </form>
        </div>
          {/* 아티클들 */}
          <table class="table-auto w-full text-center mt-5">
            <thead>
              <tr className="h-20">
                {articles.header.map((item) => {
                return <th>{item}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {articles.data.map((item) => {
              return (
                <tr className="hover:bg-gray-200 cursor-pointer h-10">
                  <td className="w-[50%]">{item.title}</td>
                  <td className="w-[30%]">{item.publishTime}</td>
                  <td className="w-[20%]">{item.hit}</td>
                </tr>
                );
              })}
            </tbody>
          </table>
      </div>
    </>
  );
}
