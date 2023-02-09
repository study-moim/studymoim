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
  const [searchType, setSearchType] = useState("");
  const [filterInfo, setFilterInfo] = useState(studyRecruits);

  useEffect(() => {
    const getWord = async () => {
      if (searchType == "word") {
        setFilterInfo(
          studyRecruits.filter((study) => {
            return study.title
              .replace(" ", "")
              .toLocaleLowerCase()
              .includes(word.toLocaleLowerCase().replace(" ", ""));
          })
        );
      } else if (searchType == "tag") {
        const getTagSearchStudy = async () => {
          await fetch(`http://${API_SERVER}/api/v1/study/category/${word}`)
            .then((res) => res.json())
            .then((json) => {
              setFilterInfo(json);
            });
        };
        getTagSearchStudy();
      } else {
        const getStudyRecruits = async () => {
          await fetch(`http://${API_SERVER}/api/v1/study/`)
            .then((res) => res.json())
            .then((json) => {
              setFilterInfo(json);
            });
        };
        getStudyRecruits();
      }
    };
    getWord();
  }, [word]);

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
                setSearchType("word");
                setWord(e.target.value);
              }}
            />
          </form>
          {/* TODO: 정렬도 해야 됨 원래는 백에서 주기로 한듯한데.. 우리가 해야될듯? ㅋ  */}
        </div>
      </div>
      <div className="flex flex-col justify-start items-start w-full">
        <div className="w-full flex flex-col">
          <p className="text-base"># 태그 검색</p>
          <div className="flex flex-row flex-wrap gap-2 mt-3">
            <button
              className={
                "hover:bg-gray-200 min-w-[80px] w-fit flex flex-col justify-center items-center rounded-[10px] px-3 py-1 border "
              }
              onClick={async () => {
                setSearchType("");
                setWord("");
              }}
            >
              <p className="text-[14px]">전체</p>
            </button>
            {tags.map((tag) => (
              <div
                key={tag.courseCategoryId}
                onClick={async () => {
                  setSearchType("tag");
                  setWord(tag.courseCategoryId);
                }}
              >
                <CourseTag tag={tag} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-3 w-full mt-10">
          {filterInfo.map((recruit) => (
            <div key={recruit.studyId} className="cursor-pointer w-[12/12]">
              <StudyRecruitItem props={recruit} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
