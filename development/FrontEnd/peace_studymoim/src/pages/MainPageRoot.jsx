import MainBanner from "../components/mainpages/MainBanner";
import MainSearch from "../components/mainpages/MainSearch";
import Tag from "../components/overall/Tag";
import { userInfo } from "../zustand/store";
import MainLogIn from "../components/mainpages/MainLogIn";
import MainNotLogIn from "../components/mainpages/MainNotLogIn";
import MainStudy from "../components/mainpages/MainStudy";

export default function MainPageRoot() {
  const { ID, logIn } = userInfo();

  return (
    <div>
      <MainBanner />
      <div className="max-w-6xl mx-auto px-4 flex flex-col justify-start items-center gap-[20px]">
        <MainSearch />
        <div className="w-full flex flex-col justify-between items-center">
          <p className="text-xl text-left text-gray-400"># 인기태그</p>
          {/* TODO: map으로 돌려서 데이터에있는거 다 출력해야함 인기태그를 백에서 주면 좋을듯 */}
          <div className="grid gap-4 grid-cols-5 grid-flow-row auto-rows-auto">
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
          </div>
        </div>
        {/* 로그인된 상태라면 MainLogIn를 아니면 MainNotLogIn을 보여준다. */}
        {logIn ? <MainLogIn /> : <MainNotLogIn />}
        <p className="mt-7">구인 중인 스터디</p>
        <div className="flex gap-[50px]">
          <MainStudy />
          <MainStudy />
          <MainStudy />
          <MainStudy />
        </div>
      </div>
    </div>
  );
}
