import Select from "react-select";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function CurriculumUpdateModal(props) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const search = useFetch(`http://${API_SERVER}/api/v1/course/`);
  const studyId = useParams(); 

  const [selectedOptions, setSelectedOptions] = useState(props.curriculum);
  const courseOptionList = search.map((course) =>
    Object.assign({ value: course.course_id, label: course.title })
  );

  function handleSelect(data) {
    setSelectedOptions(data);
  }

  window.onkeydown = function (event) {
    if (event.keyCode == 27) {
      props.onCancel();
    }
  };

  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    const enteredSelectOptions = selectedOptions.map((course) => {
      return course.value; 
    }); 

    fetch(
      `http://${API_SERVER}/api/v1/study/curriculum`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",  
        }, 
        body: JSON.stringify({
          studyId: studyId.study_id,  
          courseIdList: enteredSelectOptions 
        })
      }  
    ).then((res) => {
      if(res.ok) {
        props.onCancel()  
        window.location.reload(); 
      }
    })
  }
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-slate-200 rounded-t">
              <p>커리큘럼 수정하기</p>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => props.onCancel()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/*body*/}
            <div className="flex flex-col justify-end items-center flex-grow-0 flex-shrink-0 relative gap-2">
            <div className="w-full">
              <Select
                  options={courseOptionList}
                  placeholder="강좌를 검색하세요."
                  value={selectedOptions}
                  onChange={handleSelect}
                  isSearchable={true}
                  isMulti
                  required
                />
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-between p-6 gap-5">
              <button
                className="flex justify-center items-center flex-grow h-11 relative gap-2.5 px-1 py-3.5 rounded-lg bg-white border border-[#4f4f4f] text-sm text-[#4f4f4f]"
                onClick={confirmHandler}
              >
                수정 
              </button>
              <button
                className="flex justify-center items-center flex-grow h-11 relative gap-2.5 px-1 py-3.5 rounded-lg bg-[#b1b2ff] text-sm text-white"
                onClick={cancelHandler}
              >
                취소
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
