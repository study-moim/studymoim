import PlayerQuestion from "./PlayerQuestion";
import { useState } from "react";
import PlayerQuestionMakeForm from "./PlayerQuestionMakeForm";

export default function PlayerQuestionList() {
  const dummy = [
    {
      id: 1,
      time: "01:30",
      title: "11이거강의에대한질문입니다이거강의에대한",
      content:
        "11이거강의에대한질문입니다이거강의에대한11이거강의에대한질문입니다이거강의에대한",
    },
    {
      id: 2,
      time: "01:32",
      title: "22이거강의에대한질문입니다이거강의에대한",
      content:
        "22이거강의에대한질문입니다이거강의에대한22이거강의에대한질문입니다이거강의에대한",
    },
    {
      id: 3,
      time: "02:42",
      title: "3333333이거강의에대한질문입니다이거강의에대한",
      content:
        "3333333이거강의에대한질문입니다이거강의에대한3333333이거강의에대한질문입니다이거강의에대한",
    },
  ];
  const [newToggle, setNewToggle] = useState(false);
  const clickNew = () => {
    setNewToggle(!newToggle);
  };
  return (
    <>
      <div className="flex flex-col px-2.5 pt-2 pb-2.5 rounded-[5px] border border-[#c8c8cc] w-full h-full overflow-auto">
        <div className="flex justify-between">
          <p className="self-stretch flex-shrink-0 h-[29px] text-2xl font-bold text-center text-black mb-3">
            {!newToggle ? "질문 목록" : null}
          </p>
          {!newToggle
            ?
            <button onClick={clickNew} className="bg-[#9d8aff] h-8 rounded-md text-white hover:bg-[#7b61ff]">새 질문</button>
            :
            null
          }
          {
            newToggle
            ?
            <PlayerQuestionMakeForm clickNew={clickNew} />
            :
            null
          }
        </div>
        <div className="flex flex-col justify-start items-start gap-[15px]">
          {dummy.map((obj) => (
            <PlayerQuestion key={obj.id} propData={obj} />
          ))}
        </div>
      </div>
    </>
  );
}
