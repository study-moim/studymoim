import PlayerQuestion from "./PlayerQuestion";
import { useEffect, useState } from "react";
import PlayerQuestionMakeForm from "./PlayerQuestionMakeForm";

export default function PlayerQuestionList({ lectureId }) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const [questions, setQuestions] = useState([]);
  const [newToggle, setNewToggle] = useState(false);
  const [createThings, setCreateThings] = useState(false);

  useEffect(() => {
    const getQuestions = async () => {
      await fetch(
        `http://${API_SERVER}/api/v1/articles/question/lecture/${lectureId}`
      )
        .then((res) => res.json())
        .then((json) => {
          setQuestions(json);
        });
    };
    getQuestions();
  }, [createThings]);


  const clickNew = () => {
    setNewToggle(!newToggle);
  };
  const getCreateComment = () => {
    setCreateThings(!createThings);
  };

  return (
    <>
      <div className="flex flex-col px-2.5 pt-2 pb-2.5 rounded-[5px] border border-[#c8c8cc] w-full h-full overflow-auto scrollbar-thin scrollbar-thumb-indigo-300">
        <div className="flex justify-between">
          <p className="text-base font-bold text-center text-black mb-2">
            {!newToggle ? "질문 목록" : null}
          </p>
          {!newToggle ? (
            <button
              onClick={clickNew}
              className="bg-[#9d8aff] text-[12px] h-6 px-1 rounded-md text-white hover:bg-[#7b61ff]"
            >
              새 질문
            </button>
          ) : (
            <PlayerQuestionMakeForm clickNew={clickNew} lectureId={lectureId} getCreateComment={getCreateComment} />
          )}
        </div>
        <div className="flex flex-col justify-start items-start gap-[15px]">
          {questions.map((question) => (
            <PlayerQuestion key={question.questionBoardId} propData={question} lectureId={lectureId} getCreateComment={getCreateComment}/>
          ))}
        </div>
      </div>
      <div className="hidden">{createThings}</div>
    </>
  );
}
