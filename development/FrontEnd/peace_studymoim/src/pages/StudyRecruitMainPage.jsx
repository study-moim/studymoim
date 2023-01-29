import { useState, useEffect } from "react";
import StudyRecruitList from "../components/studypages/StudyRecruitList";
import { Link } from "react-router-dom";
import MainSearch from "../components/mainpages/MainSearch";
import Tag from "../components/overall/Tag";

// TODO: 취소 버튼 구현 안함, 강좌 선택도 넣지 않았음
export default function StudyRecruitMainAll() {
  const [isLoading, setIsLoading] = useState(true);
  const [LoadedStudyRecruits, SetLoadedStudyRecruits] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-a-3b3d0-default-rtdb.firebaseio.com/react.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const recruits = [];

        for (const key in data) {
          const recruit = {
            id: key,
            ...data[key],
          };
          recruits.push(recruit);
        }
        setIsLoading(false);
        SetLoadedStudyRecruits(recruits);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>로딩중</p>
      </section>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 flex flex-col justify-start items-center gap-[20px] mt-10">
      <MainSearch />

      <div className="w-full flex flex-col justify-between items-center mt-8">
        {/* TODO: map으로 돌려서 데이터에있는거 다 출력해야함 인기태그를 백에서 주면 좋을듯 */}
        <div className="grid gap-4 grid-cols-5 grid-flow-row auto-rows-auto">
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
        </div>
      </div>

      <div className="w-full flex flex-col justify-between items-center">
        <div className="grid gap-4 grid-cols-4 grid-flow-row auto-rows-auto">
          <Tag />
          <Tag />
          <Tag />
          <Tag />
        </div>
      </div>

      <div className="flex flex-col justify-start items-start">
        <div className="flex justify-end items-center self-stretch  h-[92px] gap-2.5 px-2.5 pb-2.5 bg-white border-t border-r-[0.3px] border-b-0 border-l-[0.3px] border-black">
          <div className="flex justify-start items-start  gap-[23px]">
            <Link to="/studyDetail">
              <div>임시 버튼</div>
            </Link>

            <Link to="/study/study_recruit_form">
              <div
                className="px-8 py-[13px] rounded-[10px] bg-[#b1b2ff]/50 text-xl font-bold text-black hover:bg-[#b1b2ff]/90 hover:scale-95"
                style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
              >
                스터디 만들기
              </div>
            </Link>
            
            <select
              name="커뮤니티정렬"
              className="pl-[20px] w-[150px] h-[40px] mt-[10px] bg-[#f2f2f2] cursor-pointer"
              style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
            >
              <option value="">정렬하기</option>
              <option value="new">최신순</option>
              <option value="old">오래된순</option>
            </select>
          </div>
        </div>
      
      <div className="flex flex-col justify-start items-start w-full border-x-[0.3px] border-b-[0.3px] border-black px-3">
        <StudyRecruitList recruits={LoadedStudyRecruits} />;
        </div>
      </div>
    </div>
  );
}
