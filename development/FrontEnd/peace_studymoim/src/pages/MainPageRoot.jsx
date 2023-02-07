import MainCarousel from "../components/mainpages/MainCarousel";
import MainSearch from "../components/mainpages/MainSearch";
import TagList from "../components/overall/TagList";
import userInfo from "../zustand/store";
import MainLogIn from "../components/mainpages/MainLogIn";
import MainNotLogIn from "../components/mainpages/MainNotLogIn";
import MainStudy from "../components/mainpages/MainStudy";
import getArticles from "../hooks/getArticles";
import useFetch from "../hooks/useFetch";

export default function MainPageRoot() {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const studyInfo = useFetch(`http://${API_SERVER}/api/v1/study/`);

  getArticles();
  const { logIn } = userInfo();

  return (
    <div>
      <MainCarousel />
      <div className="max-w-6xl mx-auto px-4 justify-start items-center">
        <div className="w-full my-3 flex flex-col justify-center items-center">
          <MainSearch />
        </div>
        <div className="w-full flex flex-col">
          <p className="text-lg text-left font-bold mb-5"># 인기태그</p>
          <TagList /> 
        </div>
        {/* 로그인된 상태라면 MainLogIn를 아니면 MainNotLogIn을 보여준다. */}
        {logIn ? <MainLogIn /> : <MainNotLogIn />}
        <div>
          <p className="text-lg text-left font-bold mb-5">
            # 진행 중인 스터디
          </p>
          <div className="w-full mb-[50px] flex flex-row flex-wrap gap-5">
            {studyInfo.map((study) => (
              <MainStudy key={study.studyId} propData={study} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
