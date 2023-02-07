// import Tag from "../components/overall/Tag";
// import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import StudySearch from "../components/studypages/StudySearch";
import { useState } from "react";

export default function StudyRecruitMainPage() {
  //  모집중만 보이게 할 수 있는 toggle switch
  const [enabled, setEnabled] = useState(false);
  // const tags = useFetch(`http://${API_SERVER}/api/v1/category/`);

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 bg-white my-[100px]">
        <div className="flex flex-row justify-between w-full mb-2">
          {/* TODO: 나중에 모집중만 보이게 하기  */}
          <div className="relative flex flex-col items-center justify-center">
            <label class="inline-flex relative items-center mr-5 cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={enabled}
                readOnly
              />
              <div
                onClick={() => {
                  setEnabled(!enabled);
                }}
                className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:[#ad9dfe] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ad9dfe]"
              ></div>
              <span className="ml-2 text-sm font-medium text-gray-900">
                모집중만 보기
              </span>
            </label>
          </div>

          <Link to="/study/study_recruit_form">
            <div className="px-8 py-[5px] rounded-[10px] bg-[#ad9dfe] text-base text-white hover:bg-[#b1b2ff]/90">
              <FontAwesomeIcon icon={faPencil} /> 스터디 만들기
            </div>
          </Link>
  
        </div>

        <div className="flex flex-col justify-start items-start border">
          <StudySearch />
        </div>
      </div>
    </>
    //   <div className="w-full flex flex-col justify-between items-center">
    //   <p className="text-xl text-left text-gray-400 my-3"># 인기태그</p>
    //     <div className="grid gap-4 grid-cols-5 grid-flow-row auto-rows-auto">
    //       {tags.map((tag) => (
    //         <Tag key={tag.courseCategoryId} tag={tag} />
    //       ))}
    //     </div>
    //   </div>
  );
}
