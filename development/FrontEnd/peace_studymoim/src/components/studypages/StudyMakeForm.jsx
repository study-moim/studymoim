import { useEffect } from "react";
import { useRef, useState } from "react";
import DeleteModal from "../overall/DeleteModal";
import useFetch from "../../hooks/useFetch";
import userInfo from "../../zustand/store";
import Select from "react-select";
import MDEditor from "@uiw/react-md-editor";

export default function StudyMakeForm(props) {
  const [showModal, setShowModal] = useState(false);
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const search = useFetch(`http://${API_SERVER}/api/v1/course/`);

  function closeModalHandler() {
    setShowModal(false);
  }

  const { info } = userInfo();

  // 모집인원
  const [memberSelect, setMemberSelect] = useState();
  const memberOptionList = [
    { value: 2, label: "2명" },
    { value: 3, label: "3명" },
    { value: 4, label: "4명" },
    { value: 5, label: "5명" },
    { value: 6, label: "6명" },
  ];

  // 시작예정일
  const [startSelect, setStartSelect] = useState("");

  // 인원모집방법
  const [recruitSelect, setRecruitSelect] = useState(true);
  const recruitOptionList = [
    { value: true, label: "공개" },
    { value: false, label: "수락" },
  ];

  // 강좌 선택

  const [selectedOptions, setSelectedOptions] = useState([]);
  const courseOptionList = search.map((course) =>
    Object.assign({ value: course.course_id, label: course.title })
  );

  function handleSelect(data) {
    setSelectedOptions(data);
  }

  // 제목
  const [titleInput, setTitleInput] = useState("");
  // 내용
  const [contentInput, setContentInput] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    const enteredSelectOptions = selectedOptions.map((course) => {
      return course.value;
    });

    const studyRecruitData = {
      title: titleInput,
      content: contentInput,
      startTime: startSelect,
      userLimit: memberSelect,
      courseIdList: enteredSelectOptions,
      leadUserId: info.userId,
      public: recruitSelect,
    };
    console.log(studyRecruitData);
    props.onAddMeetup(studyRecruitData);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 bg-white my-[100px]">
      <form className="w-full gap-4 py-5" onSubmit={submitHandler}>
        <div className="flex flex-col justify-start items-center w-full gap-2.5 py-[5px]">
          <p className="text-4xl text-left font-bold">
            스터디 기본정보를 입력해주세요
          </p>
          <svg
            height={9}
            viewBox="0 0 1352 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full mt-3 flex-grow-0 flex-shrink-0"
            preserveAspectRatio="none"
          >
            <line
              x1="0.993338"
              y1="7.50001"
              x2="1351.99"
              y2="7.50001"
              stroke="#7B61FF"
              strokeWidth={3}
            />
          </svg>
          <div className="flex justify-between items-center p-2.5">
            {/* 모집인원 (required) */}
            <div className="flex flex-col justify-start items-start self-stretch flex-grow relative gap-2.5 p-2.5">
              <p className="text-[20px] text-left">모집인원</p>
              <div className="w-full">
                <Select
                  id="recruitMembers"
                  placeholder="모집인원을 선택하세요."
                  onChange={(e) => setMemberSelect(e.value)}
                  defaultValue={{ value: 2, label: "2명" }}
                  options={memberOptionList}
                />
              </div>
            </div>

            {/* 시작 예정일 (required) */}
            <div className="flex flex-col justify-center items-center self-stretch flex-grow relative gap-2.5 p-2.5">
              <p className="text-[20px] text-left">시작 예정일</p>
              <input
                required
                id="startDate"
                type="date"
                min="2023-01-01"
                max="2024-12-31"
                onChange={(e) => setStartSelect(e.target.value)}
                className="rounded border-2"
              />
            </div>

            {/* 인원 모집 방법 (required) */}
            <div className="flex flex-col justify-center items-center self-stretch flex-grow relative gap-2.5 p-2.5">
              <p className="text-[20px] text-left">인원 모집 방법</p>
              <div className="w-full">
                <Select
                  id="recruitMethod"
                  onChange={(e) => setRecruitSelect(e.value)}
                  value={{ value: true, label: "공개" }}
                  required
                  options={recruitOptionList}
                />
              </div>
            </div>

            {/* 강좌 선택(required) */}
            <div className="flex flex-col justify-center items-center self-stretch flex-grow relative gap-2.5 p-2.5">
              <p className="text-[20px] text-left">강좌 선택</p>
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
          </div>
        </div>

        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-full gap-2.5 py-[5px]">
          <p className="text-4xl text-left font-bold">
            스터디에 대해 설명해주세요
          </p>
          <svg
            height={9}
            viewBox="0 0 1352 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full mt-3 flex-grow-0 flex-shrink-0"
            preserveAspectRatio="none"
          >
            <line
              x1="0.993338"
              y1="7.50001"
              x2="1351.99"
              y2="7.50001"
              stroke="#7B61FF"
              strokeWidth={3}
            />
          </svg>
          {/* 제목 */}
          <div className="flex flex-col w-full justify-start items-end flex-grow-0 flex-shrink-0 gap-[34px]">
            <input
              type="text"
              onChange={(e) => setTitleInput(e.target.value)}
              id="title"
              required
              className="w-full mt-3 h-[50px] justify-center border"
              placeholder="제목을 입력해주세요"
              min={5}
              max={30}
            />

            <div className="container">
              <MDEditor
                required
                value={contentInput}
                textareaProps={{
                  placeholder: "스터디 설명을 써주세요.",
                }}
                onChange={setContentInput}
              />
            </div>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[15px]">
              <div
                className="btn flex-grow-0 flex-shrink-0 w-[107px] h-[60px] relative rounded-[10px] bg-[#fc7a6f] text-center items-center text-4xl text-white p-2"
                onClick={() => setShowModal(true)}
              >
                취소
              </div>
              <button className="flex-grow-0 flex-shrink-0 w-[131px] h-[60px] relative rounded-[10px] bg-[#a259ff]  text-white text-4xl">
                글쓰기
              </button>

              {showModal ? (
                <DeleteModal
                  onCancel={closeModalHandler}
                  onConfirm={closeModalHandler}
                />
              ) : null}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
