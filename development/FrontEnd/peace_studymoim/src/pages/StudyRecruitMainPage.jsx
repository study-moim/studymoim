import StudyRecruitItem from "../components/studypages/StudyRecruitItem";
import { Link } from "react-router-dom";
import MainSearch from "../components/mainpages/MainSearch";
import Tag from "../components/overall/Tag";
import useFetch from "../hooks/useFetch";

// TODO: 취소 버튼 구현 안함
export default function StudyRecruitMainPage() {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const tags = useFetch(`http://${API_SERVER}/api/v1/category/`);

  const LoadedStudyRecruits = useFetch(`http://${API_SERVER}/api/v1/study/`);


  return (
    <div className="max-w-6xl mx-auto px-4 flex flex-col justify-start items-center gap-[20px] mt-10">
      <MainSearch />
      
      <div className="w-full flex flex-col justify-between items-center">
      <p className="text-xl text-left text-gray-400 my-3"># 인기태그</p>
        <div className="grid gap-4 grid-cols-5 grid-flow-row auto-rows-auto">
          {tags.map((tag) => (
            <Tag key={tag.courseCategoryId} tag={tag} />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col justify-start items-start">
        <div className="flex w-full justify-end items-center self-stretch  h-[92px] gap-2.5 px-2.5 pb-2.5 bg-white border-t border-r-[0.3px] border-b-0 border-l-[0.3px] border-black">
          <div className="flex justify-start items-start  gap-[23px]">
      
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
          {LoadedStudyRecruits.map((recruit) => (
            <div key={recruit.studyId} className="cursor-pointer hover:scale-105 w-11/12 ml-6">
              <StudyRecruitItem props={recruit} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
