import { useRef, useState } from "react";
import DeleteModal from "../overall/DeleteModal";
import { useNavigate, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faUser,
  faCircleCheck,
} from "@fortawesome/free-regular-svg-icons";
import { faUserCheck, faHourglassEnd } from "@fortawesome/free-solid-svg-icons";
export default function StudyMakeForm({ propData }) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const studyId = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  function closeModalHandler() {
    setShowModal(false);
  }

  // 모집인원
  const memberRef = useRef();

  // 시작예정일
  const startRef = useRef("");

  // 인원모집방법
  const recruitRef = useRef("");

  // 제목
  const titleInputRef = useRef("");

  // 내용
  const contentRef = useRef("");

  // 모집 마감 여부
  const finishRef = useRef();

  // 스터디 종료 여부
  const closeRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const studyUpdateData = {
      title: titleInputRef.current.value,
      content: contentRef.current.value,
      startTime: startRef.current.value,
      userLimit: memberRef.current.value,
      public: recruitRef.current.value,
      finished: finishRef.current.value,
      close: closeRef.current.value,
    };
    fetch(`http://${API_SERVER}/api/v1/study/${studyId.study_recruit_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studyUpdateData),
    }).then((res) => {
      if (res.ok) {
        navigate("/study");
      }
    });
  }

  return (
    <div className="max-w-6xl mx-auto px-4 mt-[50px] mb-[100px]">
      <form className="flex flex-col gap-[50px] " onSubmit={submitHandler}>
        <p className="text-3xl text-center font-bold">스터디 정보 수정</p>

        <div className="flex justify-center items-center gap-[80px]">
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
              ref={startRef}
              className="w-[140px] p-2 border-black border-2 rounded-[5px]"
              defaultValue={propData.start}
            />
          </div>

          {/* 모집인원 (required) */}
          <div className="flex flex-col justify-center items-center w-[140px] gap-3">
            <FontAwesomeIcon icon={faUser} className="text-[20px]" />
            <p className="text-[16px] font-bold">모집 인원</p>
            <div className="w-full">
              <select
                id="recruitMembers"
                ref={memberRef}
                required
                key={propData.member}
                defaultValue={propData.member}
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
          </div>
          {/* 인원 모집 방법 (required) */}
          <div className="flex flex-col justify-center items-center w-[140px] gap-3">
            <FontAwesomeIcon icon={faCircleCheck} className="text-[20px]" />
            <p className="text-[16px] font-bold">모집 방법</p>
            <div className="w-full">
              <select
                id="recruitMethod"
                ref={recruitRef}
                required
                key={propData.publics}
                defaultValue={propData.publics}
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

          {/* 모집 여부  */}
          <div className="flex flex-col justify-center items-center w-[140px] gap-3">
            <FontAwesomeIcon icon={faUserCheck} className="text-[20px]" />
            <p className="text-[16px] font-bold">모집 여부</p>
            <div className="w-full">
              <select
                id="finishMethod"
                ref={finishRef}
                required
                key={propData.finish}
                defaultValue={propData.finish}
                className="w-[140px] p-2 border-black border-2 rounded-[5px]"
              >
                <option value={false} className="text-center">
                  모집중
                </option>
                <option value={true} className="text-center">
                  모집 마감
                </option>
              </select>
            </div>
          </div>
          {/* 종료 여부  */}
          <div className="flex flex-col justify-center items-center w-[140px] gap-3">
            <FontAwesomeIcon icon={faHourglassEnd} className="text-[20px]" />
            <p className="text-[16px] font-bold">스터디 진행</p>
            <div className="w-full">
              <select
                id="closeMethod"
                ref={closeRef}
                required
                key={propData.close}
                defaultValue={propData.close}
                className="w-[140px] p-2 border-black border-2 rounded-[5px]"
              >
                <option value={false} className="text-center">
                  진행중
                </option>
                <option value={true} className="text-center">
                  종료
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full justify-start gap-[20px]">
          <input
            type="text"
            ref={titleInputRef}
            id="title"
            required
            className="px-7 focus:outline-none border-black py-2 border-2 rounded-[5px]"
            minLength="5"
            maxLength="30"
            defaultValue={propData.title}
          />
          <textarea
            required
            ref={contentRef}
            defaultValue={propData.content}
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
      </form>
    </div>
  );
}
