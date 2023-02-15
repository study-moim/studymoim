import Select from "react-select";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export default function CurriculumUpdateModal(props) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const [search, setSearch] = useState([]);  

  useEffect(() => {
    const getSearch = async () => {
      await fetch(
        `http://${API_SERVER}/api/v1/course?size=1000000`
      )
        .then((res) => res.json())
        .then((json) => {
          setSearch(json.content);
        });
    };
    getSearch();
  }, [search]);
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

    fetch(`http://${API_SERVER}/api/v1/study/curriculum`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studyId: studyId.study_id,
        courseIdList: enteredSelectOptions,
      }),
    }).then((res) => {
      if (res.ok) {
        props.onCancel();
        window.location.reload();
      }
    });
  }
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
        <div
          id="배경"
          onClick={() => props.onCancel()}
          className="absolute opacity-25 w-full h-full inset-0 bg-black"
        ></div>
        <div className="relative w-auto mx-auto max-w-3xl">
          {/*content*/}
          <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white">
            {/*header*/}
            <div className="flex w-full items-center justify-between px-5 py-3 border-b">
              <p>커리큘럼 수정하기</p>
              <button className="p-1 ml-auto bg-transparent" onClick={() => props.onCancel()}>
                <FontAwesomeIcon icon={faXmark} size="lg" className="hover:text-red-500" />
              </button>
            </div>
            {/*body*/}
            <div className="flex flex-col justify-end items-center gap-2 p-5">
              <Select
                options={courseOptionList}
                placeholder="강좌를 검색하세요."
                value={selectedOptions}
                onChange={handleSelect}
                isSearchable={true}
                isMulti
                required
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderWidth: 2,
                    borderRadius: 5,
                    padding: 8,
                  }),
                }}
              />
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-5 gap-5 border-t">
              <button
                className="w-[40%] py-2 rounded-lg bg-[#b1b2ff] text-[14px] text-white hover:bg-[#989aff]"
                onClick={confirmHandler}
              >
                수정
              </button>
              <button
                className="w-[40%] py-2 gap-2 rounded-lg bg-white border text-[14px] hover:bg-gray-100"
                onClick={cancelHandler}
              >
                취소
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
