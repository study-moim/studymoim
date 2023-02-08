import { useEffect } from "react";
import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DeleteModal from "../overall/DeleteModal";
import useFetch from "../../hooks/useFetch";
import userInfo from "../../zustand/store";
import Select from "react-select";


export default function StudyMakeForm(props) {
  const [showModal, setShowModal] = useState(false);

  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const search = useFetch(`http://${API_SERVER}/api/v1/course/`);

  function closeModalHandler() {
    setShowModal(false);
  }

  const { info } = userInfo();

  // 모집인원
  const [memberSelect, setMemberSelect] = useState()  
  const memberOptionList = [
    { value: 2, label: "2명" },
    { value: 3, label: "3명" },
    { value: 4, label: "4명" },
    { value: 5, label: "5명" },
    { value: 6, label: "6명" },
  ];

  // 시작예정일
  const [startSelect, setStartSelect] = useState("")  

  // 인원모집방법
  const [recruitSelect, setRecruitSelect] = useState()  
  const recruitOptionList = [
    { value: true, label: "공개" },
    { value: false, label: "수락" },
  ];

  // 강좌 선택
  const [selectedOptions, setSelectedOptions] = useState([]);
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  const courseOptionList = search.map((course) =>
    Object.assign({ value: course.course_id, label: course.title })
  );

  // 제목
  const [titleInput, setTitleInput] = useState("")

  // 내용
  const [contentInput, setContentInput] = useState("")
 
  // 모집 마감 여부
  const [finished, setFinished] = useState(false)
  const finishedList = [
    { value: true, label: "마감" },
    { value: false, label: "모집중" },
  ];

  // 스터디 종료 여부 
  const [close, setClose] = useState(false)
  const closeList = [
    { value: true, label: "종료" },
    { value: false, label: "진행중" },
  ];

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
                  onChange={(e) => setMemberSelect(e.value)}
                  required
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
                  value={selectedOptions}
                  onChange={handleSelect}
                  isSearchable={true}
                  isMulti
                  required 
                />
              </div>
            </div>
                   {/* 모집 여부  */}
          <div className="flex flex-col justify-center items-center self-stretch flex-grow relative gap-2.5 p-2.5">
              <p className="text-[20px] text-left">모집여부</p>
              <div className="w-full">
              <Select
                id="finishMethod"
                onChange={(e) => setFinished(e.value)}
                required
                options={finishedList}
              />
              </div> 
            </div>
            {/* 종료 여부  */}
            <div className="flex flex-col justify-center items-center self-stretch flex-grow relative gap-2.5 p-2.5">
              <p className="text-[20px] text-left">종료여부</p>
              <div className="w-full">
              <Select
                id="closeMethod"
                onChange={(e) => setClose(e.value)}
                required
                options={closeList}
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
            {/* 설명 */}
            {/* TODO : CK editor로 바꿔야함!  */}
            <ReactQuill
              id="description"
              onChange={setContentInput}
              required
              placeholder="스터디에 대해 소개해주세요(선택)&#13;첫 회의 날짜: 1/17 8시&#13;주 3회 월수금 예정입니다."
              className="w-full h-[400px] justify-center mb-5"
            />

            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[15px]">
              <div
                className="btn flex-grow-0 flex-shrink-0 w-[107px] h-[60px] relative rounded-[10px] bg-[#fc7a6f] text-center items-center text-4xl text-white p-2"
                onClick={() => setShowModal(true)}
              >
                취소
              </div>
              <button className="flex-grow-0 flex-shrink-0 w-[107px] h-[60px] relative rounded-[10px] bg-[#a259ff]  text-white text-4xl">
                수정
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
