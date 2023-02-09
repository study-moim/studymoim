import getQuestions from "../../hooks/getQuestions";
import getQuestionList from "../../zustand/questions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import LectureQuestion from "./LectureQuestion";
import { useState, useEffect } from "react";

export default function QuestionRoot() {
  getQuestions();
  const { questions } = getQuestionList();
  const lectureQuestions = questions;
  const [word, setWord] = useState("");
  const [selected, setSelected] = useState("new");
  const [filterInfo, setFilterInfo] = useState(lectureQuestions);

  useEffect(() => {
    const getWord = async () => {
      setFilterInfo(
        lectureQuestions.filter((question) => {
          return question.title
            .replace(" ", "")
            .toLocaleLowerCase()
            .includes(word.toLocaleLowerCase().replace(" ", ""));
        })
      );
    };
    getWord();
  }, [word]);

  useEffect(() => {
    const getSelected = async () => {
      if (selected == "new") {
        setFilterInfo(lectureQuestions);
      } else if (selected == "old") {
        setFilterInfo(lectureQuestions.reverse());
      } else if (selected == "big") {
        setFilterInfo(
          lectureQuestions.sort((prev, cur) => {
            if (prev.hit < cur.hit) return 1;
            if (prev.hit > cur.hit) return -1;
          })
        );
      } else if(selected == "small"){
        setFilterInfo(
          lectureQuestions.sort((prev, cur) => {
            if (prev.hit > cur.hit) return 1;
            if (prev.hit < cur.hit) return -1;
          })
        );
      }
    };
    getSelected();
  }, [selected]);

  return (
    <div className="w-full">
      <div className="flex justify-end items-center self-stretch h-[60px] gap-2.5">
        <form className="flex relative h-[40px] w-[400px]">
          <button className="absolute right-0 bg-[#B1B2FF] rounded-full w-[30px] h-[30px] m-[5px] text-white">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            type="text"
            placeholder="궁금한 강의 질문을 검색해보세요!"
            className="w-full h-[40px] text-[14px] border border-slate-500 rounded-[30px] pl-4 focus:outline-none focus:ring focus:ring-violet-300"
            onChange={(e) => {
              setWord(e.target.value);
            }}
          />
        </form>
        <select
          name="커뮤니티정렬"
          className="px-[20px] w-[150px] h-[40px] text-[14px] border border-slate-500 rounded-[30px] cursor-pointer"
          onChange={(e) => {
            setSelected(e.target.value);
          }}
        >
          <option value="new">최신순</option>
          <option value="old">오래된순</option>
          <option value="big">조회높은순</option>
          <option value="small">조회낮은순</option>
        </select>
      </div>
      <div className="flex flex-col justify-start items-start w-full">
        {filterInfo.map((lectureQuestion) => (
          <LectureQuestion
            key={lectureQuestion.questionBoardId}
            lectureQuestion={lectureQuestion}
          />
        ))}
      </div>
    </div>
  );
}
