import MainSearch from "../components/mainpages/MainSearch";
import TagList from "../components/overall/TagList";
import userInfo from "../zustand/store";
import MainLogIn from "../components/mainpages/MainLogIn";
import MainNotLogIn from "../components/mainpages/MainNotLogIn";
import MainStudy from "../components/mainpages/MainStudy";
import getArticles from "../hooks/getArticles";
import getQuestions from "../hooks/getQuestions";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CourseTag from "../components/coursepages/CourseTag"

export default function MainPageRoot() {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const studyInfo = useFetch(`http://${API_SERVER}/api/v1/study/`);
  const tags = useFetch(`http://${API_SERVER}/api/v1/category/best`).slice(0, 9);
  const [word, setWord] = useState("");
  const [searchType, setSearchType] = useState("");

  getArticles();
  getQuestions()
  const { logIn } = userInfo();

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 justify-start items-center">
        <div className="w-full my-3 flex flex-col justify-center items-center">
          <div className="w-[50%] relative h-[50px] flex my-5">
            <button className="absolute right-0 bg-[#B1B2FF] rounded-full w-[30px] h-[30px] my-[10px] mr-[10px] text-white">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input
              type="text"
              placeholder="전체 강좌 검색"
              className="w-full border border-[#B1B2FF] rounded-[30px] pl-4 bg-[#B1B2FF]/20 focus:outline-none focus:bg-white focus:border-gray-100"
              style={{ boxShadow: "0px 3px 5px 0px #B1B2FF" }}
              onChange={(e) => {
                setSearchType("word");
                setWord(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <p className="text-lg text-left font-bold mb-5"># 인기태그</p>
          <div className="flex flex-row flex-wrap gap-2">
        <button
          className={
            "hover:bg-gray-200 min-w-[80px] w-fit flex flex-col justify-center items-center rounded-[10px] px-3 py-2 border "
          }
          onClick={async () => {
            setSearchType("");
          }}
        >
          <p className="text-base font-bold">전체</p>
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
        {/* 로그인된 상태라면 MainLogIn를 아니면 MainNotLogIn을 보여준다. */}
        {logIn ? (
          <MainLogIn searchKey={searchType} searchData={word} />
        ) : (
          <MainNotLogIn searchKey={searchType} searchData={word} />
        )}
        <div>
          <p className="text-lg text-left font-bold mb-5"># 진행 중인 스터디</p>
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
