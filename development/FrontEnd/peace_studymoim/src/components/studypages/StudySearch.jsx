import useFetch from "../../hooks/useFetch";
import CourseTag from "../coursepages/CourseTag";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import StudyRecruitItem from "./StudyRecruitItem";

export default function StudySearch() {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const studyRecruits = useFetch(`http://${API_SERVER}/api/v1/study/`);
  const tags = useFetch(`http://${API_SERVER}/api/v1/category/`);
  const [word, setWord] = useState("");

  let filterInfo = studyRecruits.filter((study) => {
    return study.title
      .concat(study.content)
      .replace(" ", "")
      .toLocaleLowerCase()
      .includes(word.toLocaleLowerCase().replace(" ", ""));
  });

  return (
    <div className="w-full">
      <div className="flex justify-end items-end self-stretch h-[50px]">
        <div className="flex gap-2.5">
          <form className="flex relative h-[40px] w-[400px]">
            <button className="absolute right-0 bg-[#B1B2FF] rounded-full w-[30px] h-[30px] my-[5px] mr-[5px] text-white">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input
              type="text"
              placeholder="찾고 있는 스터디를 검색하세요!"
              className="w-full h-[40px] text-[14px] border border-slate-500 rounded-[30px] pl-4 focus:outline-none focus:ring focus:ring-violet-300 "
              onChange={(e) => {
                setWord(e.target.value);
              }}
            />
          </form>
        </div>
      </div>
        <div className="flex flex-row flex-wrap justify-start gap-3 mt-5 w-full">
          {filterInfo.map((recruit) => (
            <div key={recruit.studyId} className="cursor-pointer min-w-[32%]">
              <StudyRecruitItem props={recruit} />
            </div>
          ))}
        </div>
    </div>
  );
}
