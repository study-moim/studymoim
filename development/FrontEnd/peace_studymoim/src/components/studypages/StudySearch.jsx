import useFetch from "../../hooks/useFetch";
import Tag from '../overall/Tag'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import StudyRecruitItem from "./StudyRecruitItem";

export default function StudySearch() {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const LoadedStudyRecruits = useFetch(`http://${API_SERVER}/api/v1/study/`);
  const tags = useFetch(`http://${API_SERVER}/api/v1/category/best`);

  return (
    <div className="w-full">
      <div className="flex justify-center items-center self-stretch h-[100px] gap-2.5">
        <form className="flex relative h-[42px] border border-slate-500 bg-white rounded-[30px] w-[400px]">
          <button className="absolute right-0 bg-[#B1B2FF] rounded-full w-[30px] h-[30px] my-[5px] mr-[5px] text-white">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            type="text"
            placeholder="찾고 있는 스터디를 검색하세요!"
            className="w-full rounded-[30px] pl-4"
          />
        </form>
        {/* TODO: 정렬도 해야 됨 원래는 백에서 주기로 한듯한데.. 우리가 해야될듯? ㅋ  */}
        <select
          name="커뮤니티정렬"
          className="px-[20px] w-[150px] h-[42px] border border-slate-500 rounded-[30px] cursor-pointer"
        >
          <option value="">정렬하기</option>
          <option value="new">최신순</option>
          <option value="old">오래된순</option>
        </select>
      </div>
      <div className="flex flex-col justify-start items-start w-full">
        <div  className="flex justify-evenly items-start w-full">
        {tags.map((tag) => (
          <Tag key={tag.courseCategoryId} tag={tag} />
        ))}
        </div>
       
        {LoadedStudyRecruits.map((recruit) => (
          <div
            key={recruit.studyId}
            className="cursor-pointer hover:scale-105 w-11/12 ml-6"
          >
            <StudyRecruitItem props={recruit} />
          </div>
        ))}
      </div>
    </div>
  );
}
