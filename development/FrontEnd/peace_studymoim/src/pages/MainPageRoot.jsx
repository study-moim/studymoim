import MainCarousel from "../components/mainpages/MainCarousel";
import MainSearch from "../components/mainpages/MainSearch";
import TagList from "../components/overall/TagList";
import { userInfo } from "../zustand/store";
import MainLogIn from "../components/mainpages/MainLogIn";
import MainNotLogIn from "../components/mainpages/MainNotLogIn";
import MainStudy from "../components/mainpages/MainStudy";
import getArticles from "../hooks/getArticles";

export default function MainPageRoot() {
  getArticles();
  const { logIn } = userInfo();

  return (
    <div>
      <MainCarousel />
      <div className="max-w-6xl mx-auto px-4 flex flex-col justify-start items-center gap-[20px]">
        <MainSearch />
        <div className="w-full flex flex-col justify-between items-center">
          <p className="text-xl text-left text-gray-400 my-3"># 인기태그</p>
          <TagList /> 
        </div>
        {/* 로그인된 상태라면 MainLogIn를 아니면 MainNotLogIn을 보여준다. */}
        {logIn ? <MainLogIn /> : <MainNotLogIn />}
        <p className="text-xl text-left text-gray-400 mt-7">
          # 구인 중인 스터디
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[20px] overflow-auto">
          <MainStudy />
          <MainStudy />
          <MainStudy />
          <MainStudy />
        </div>
      </div>
    </div>
  );
}
