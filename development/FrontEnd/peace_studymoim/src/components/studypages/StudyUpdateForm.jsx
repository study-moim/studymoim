import { useRef, useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
import DeleteModal from "../overall/DeleteModal";
import { useNavigate, useParams } from "react-router";
import uuid from 'react-uuid' 

export default function StudyMakeForm({propData}) { 
  console.log(propData)  
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const studyId = useParams(); 
  const navigate = useNavigate(); 
  const [showModal, setShowModal] = useState(false);
  function closeModalHandler() {
    setShowModal(false);
  }

  // 모집인원
  const memberRef = useRef()

  // 시작예정일
  const startRef = useRef("") 

  // 인원모집방법
  const recruitRef = useRef("")  

  // 제목
  const titleInputRef = useRef("") 

  // 내용
  const contentRef = useRef("") 
 
  // 모집 마감 여부
  const finishRef = useRef() 

  // 스터디 종료 여부 
  const closeRef = useRef() 

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
    fetch(
      `http://${API_SERVER}/api/v1/study/${studyId.study_recruit_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studyUpdateData),
      }
    ).then((res) => {
      if (res.ok) {
        navigate("/study");
      }
    });
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
                <select
                  id="recruitMembers"
                  ref={memberRef} 
                  required 
                  key={uuid()}
                  defaultValue={propData.member}> 
                    <option value={2}>2명</option>
                    <option value={3}>3명</option>
                    <option value={4}>4명</option>
                    <option value={5}>5명</option>
                    <option value={6}>6명</option>
                </select>
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
                ref={startRef} 
                className="rounded border-2"
                defaultValue={propData.start} 
              />
            </div>

            {/* 인원 모집 방법 (required) */}
            <div className="flex flex-col justify-center items-center self-stretch flex-grow relative gap-2.5 p-2.5">
              <p className="text-[20px] text-left">인원 모집 방법</p>
              <div className="w-full">
              <select
                id="recruitMethod"
                ref={recruitRef} 
                required
                key={uuid()}
                defaultValue={propData.publics}
              >
                <option value={true}>공개</option>
                <option value={false}>수락</option>
              </select>
              </div> 
            </div>

          {/* 모집 여부  */}
          <div className="flex flex-col justify-center items-center self-stretch flex-grow relative gap-2.5 p-2.5">
              <p className="text-[20px] text-left">모집여부</p>
              <div className="w-full">
              <select
                id="finishMethod"
                ref={finishRef}
                required
                key={uuid()}
                defaultValue={propData.finish}
              >
               <option value={false}>모집중</option>
                <option value={true}>모집 마감</option>
              </select>
              </div> 
            </div>

            {/* 종료 여부  */}
            <div className="flex flex-col justify-center items-center self-stretch flex-grow relative gap-2.5 p-2.5">
              <p className="text-[20px] text-left">종료여부</p>
              <div className="w-full">
              <select
                id="closeMethod"
                ref={closeRef}
                required
                key={uuid()}
                defaultValue={propData.close}
              >
                <option value={false}>진행중</option>
                <option value={true}>종료</option>
              </select>
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
              ref={titleInputRef}
              id="title"
              required
              className="w-full mt-3 h-[50px] justify-center border"
              placeholder="제목을 입력해주세요"
              min={5}
              max={30}
              defaultValue={propData.title}
            />
            <textarea
                required
                ref={contentRef}
                className="w-full mt-3 h-[300px] justify-center border"
                defaultValue={propData.content} 
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
