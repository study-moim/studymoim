import { useState, useRef } from "react";
import DeleteModal from "../overall/DeleteModal";
import useFetch from "../../hooks/useFetch";
import userInfo from "../../zustand/store";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faUser,
  faCircleCheck,
} from "@fortawesome/free-regular-svg-icons";

export default function StudyMakeForm(props) {
  const [showModal, setShowModal] = useState(false);
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const search = useFetch(`http://${API_SERVER}/api/v1/course/`);

  function closeModalHandler() {
    setShowModal(false);
  }

  const { info } = userInfo();

  // 모집인원
  const memberSelect = useRef();
  // 시작예정일
  const startSelect = useRef();
  // 인원모집방법
  const recruitSelect = useRef();

  // 강좌 선택
  const [selectedOptions, setSelectedOptions] = useState([]);
  const courseOptionList = search.map((course) =>
    Object.assign({ value: course.course_id, label: course.title })
  );

  function handleSelect(data) {
    setSelectedOptions(data);
  }

  // 제목
  const titleInput = useRef();
  // 내용
  const contentInput = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredSelectOptions = selectedOptions.map((course) => {
      return course.value;
    });

    const studyRecruitData = {
      title: titleInput.current.value,
      content: contentInput.current.value,
      startTime: startSelect.current.value,
      userLimit: memberSelect.current.value,
      courseIdList: enteredSelectOptions,
      leadUserId: info.userId,
      public: recruitSelect.current.value,
    };
    props.onAddMeetup(studyRecruitData);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 mt-[50px] mb-[100px]">
      <form className="flex flex-col gap-[50px] " onSubmit={submitHandler}>
        <p className="text-3xl text-center font-bold">스터디원 모집하기</p>
        <input
          type="text"
          ref={titleInput}
          id="title"
          required
          className="text-center px-7 text-2xl font-bold focus:outline-none"
          placeholder="제목에 스터디 핵심을 요약해 적어보세요."
          minLength="5"
          maxLength="20"
        />
        <div className="flex justify-center items-center gap-[100px]">
          {/* 시작 예정일 (required) */}
          <div className="flex flex-col justify-center items-center w-[140px] gap-3">
            <FontAwesomeIcon icon={faCalendar} className="text-[20px]" />
            <p className="text-[16px] font-bold">시작 예정일</p>
            <input
              required
              id="startDate"
              type="date"
              min="2023-01-01"
              max="2024-12-31"
              className="w-[140px] p-2 border-black border-2 rounded-[5px]"
              ref={startSelect}
            />
          </div>

          {/* 모집인원 (required) */}
          <div className="flex flex-col justify-center items-center w-[140px] gap-3">
            <FontAwesomeIcon icon={faUser} className="text-[20px]" />
            <p className="text-[16px] font-bold">모집 인원</p>
            <select
              id="recruitMembers"
              ref={memberSelect}
              required
              className="w-[140px] p-2 border-black border-2 rounded-[5px]"
            >
              <option value={2} className="text-center">
                2명
              </option>
              <option value={3} className="text-center">
                3명
              </option>
              <option value={4} className="text-center">
                4명
              </option>
              <option value={5} className="text-center">
                5명
              </option>
              <option value={6} className="text-center">
                6명
              </option>
            </select>
          </div>

          {/* 인원 모집 방법 (required) */}
          <div className="flex flex-col justify-center items-center w-[140px] gap-3">
            <FontAwesomeIcon icon={faCircleCheck} className="text-[20px]" />
            <p className="text-[16px] font-bold">모집 방법</p>
            <div className="w-full">
              <select
                id="recruitMethod"
                ref={recruitSelect}
                required
                className="w-[140px] p-2 border-black border-2 rounded-[5px]"
              >
                <option value={true} className="text-center">
                  공개
                </option>
                <option value={false} className="text-center">
                  신청
                </option>
              </select>
            </div>
          </div>
        </div>
        {/* 강좌 선택(required) */}
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="text-[18px] font-bold">
            스터디원과 함께 들을 커리큘럼을 만들어요!
          </p>
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
                width: 1100,
                borderColor: state.isFocused ? 'blue' : 'black',
              }),
            }}
          />
        </div>

        {/* 설명 */}
        <div className="flex flex-col w-full justify-start gap-[34px]">
          <textarea
            required
            ref={contentInput}
            placeholder="스터디 설명을 써주세요."
            className="w-full flex justify-start items-start h-[300px] gap-2.5 px-[26px] py-7 bg-white border-black border-2 rounded-[5px]"
          />
          <div className="flex gap-5 justify-end">
            <div
              className="w-[100px] px-4 py-2 rounded text-base font-bold text-center border border-gray-300 hover:bg-gray-300 cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              취소
            </div>
            <button className="w-[100px] px-4 py-2 rounded bg-[#ad9dfe] text-base font-bold text-center text-white hover:bg-[#989aff]">
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
      </form>
    </div>
  );
}
