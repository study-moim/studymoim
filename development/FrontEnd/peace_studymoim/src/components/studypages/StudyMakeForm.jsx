import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css' 

export default function StudyMakeForm(props) {
  const recruitMembersRef = useRef();
  const startDateRef = useRef();
  const recruitMethodRef = useRef();
  const dueDateRef = useRef();
  const studyImgRef = useRef();
  const titleInputRef = useRef();
  const descriptionRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredRecruitMembersRef = recruitMembersRef.current.value;
    const enteredStartDate = startDateRef.current.value;
    const enteredRecruitMethod = recruitMethodRef.current.value;
    const enteredDueDate = dueDateRef.current.value;
    const enteredStudyImg = studyImgRef.current.value;
    const enteredTitleInput = titleInputRef.current.value;
    const enteredDescription = descriptionRef.current.value;

    const studyRecruitData = {
      recruitMembers: enteredRecruitMembersRef,
      startDate: enteredStartDate,
      recruitMethod: enteredRecruitMethod,
      dueDate: enteredDueDate,
      studyImg: enteredStudyImg,
      title: enteredTitleInput,
      description: enteredDescription,
    };
    props.onAddMeetup(studyRecruitData);
  }
  return (
    <form onSubmit={submitHandler}>
      <p className="text-4xl text-center mb-2">
        프로젝트 기본 정보를 입력해주세요.
      </p>
      <hr class="mb-2" />
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label htmlFor="recruitMembers" class="block mb-2">모집인원</label>
        <div class="inline-block relative w-64">
        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"id="recruitMembers" ref={recruitMembersRef} required>
          <option key="one" value="one">
            1명
          </option>
          <option key="two" value="two">
            2명
          </option>
          <option key="three" value="three">
            3명
          </option>
          <option key="four" value="four">
            4명
          </option>
          <option key="five" value="five">
            5명
          </option>
          <option key="six" value="six">
            6명
          </option>
        </select>
        </div>
        
      </div>

      <div class="w-full md:w-1/2 px-3">
        <label htmlFor="startDate" class="block mb-2">시작 예정일</label>
        <input
          required
          id="startDate"
          type="date"
          min="2023-01-01"
          max="2023-12-31"
          ref={startDateRef}
        />
      </div>

      <div>
        <label htmlFor="recruitMethod">인원 모집 방법</label>
        <select id="recruitMethod" required ref={recruitMethodRef}>
          <option key="open" value="open">
            공개
          </option>
          <option key="accept" value="accept">
            수락
          </option>
        </select>
      </div>

      <div>
        <label htmlFor="dueDate">수강 완료 기간(선택)</label>
        <input
          id="dueDate"
          type="date"
          min="2023-01-01"
          max="2023-12-31"
          ref={dueDateRef}
        />
      </div>

      <div>
        <label htmlFor="studyImg">이미지선택</label>
        <input type="file" id="studyImg" ref={studyImgRef} />
      </div>

      <h2>프로젝트에 대해 소개해주세요.</h2>
      <hr />

      <div>
        <label htmlFor="title"></label>
        <input
          type="text"
          id="title"
          placeholder="제목을 입력해주세요."
          required
          ref={titleInputRef}
        />
      </div>

      <div>
        <label htmlFor="description"></label>
        <ReactQuill 
        id="description"
        placeholder="스터디에 대해 소개해주세요(선택)&#13;첫 회의 날짜: 1/17 8시&#13;주 3회 월수금 예정입니다."
        cols="185"
        rows="20"
        ref={descriptionRef}
        /> 
      </div>
      <Link to="/study" className="btn">
        취소
      </Link>
      <button>글쓰기</button>
    </form>
  );
}


// TODO: 백 완성되면 .. 해봐야지
// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { Link } from "react-router-dom";

// export default function StudyMakeForm() {
//   const { register, handleSubmit, watch } = useForm();
//   const [imagePreview, setImagePreview] = useState("");
//   const studyImg = watch("studyImg");
//   const onSubmit = (data) => console.log(data);
//     useEffect(() => {
//       if (studyImg && studyImg.length > 0) {
//         const file = studyImg[0];
//         setImagePreview(URL.createObjectURL(file));
//       }
//     }, [studyImg]);

//   return (
//     <form
//       className="flex flex-col justify-start items-center gap-4 py-5"
//       onSubmit={handleSubmit(onSubmit)}
//     >
//       <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[856px] w-[1440px] overflow-hidden gap-2.5 py-[5px]">
//         <p className="text-4xl text-left">프로젝트 기본 정보를 입력해주세요.</p>

//         <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[760px] overflow-hidden gap-2.5 p-2.5">
//           <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[216px] overflow-hidden gap-2.5">
//             <div className="flex flex-col justify-start items-start self-stretch flex-grow relative overflow-hidden gap-2.5 p-2.5">
//               <p className="text-[32px] text-left">모집인원 </p>
//               <select
//                 {...register("recruitMembers")}
//                 required
//                 className="w-[525px] h-[90px] relative rounded border-2 border-[#b1b2ff]"
//               >
//                 <option value="1">1명</option>
//                 <option value="2">2명</option>
//                 <option value="3">3명</option>
//                 <option value="4">4명</option>
//                 <option value="5">5명</option>
//                 <option value="6">6명</option>
//               </select>
//             </div>

//             <div className="flex flex-col justify-start items-start self-stretch flex-grow relative overflow-hidden gap-2.5 p-2.5">
//               <p className="text-[32px] text-left">시작 예정일</p>
//               <input
//                 type="date"
//                 {...register("startDate")}
//                 required
//                 className="w-[525px] h-[90px] relative rounded border-2 border-[#b1b2ff]"
//               />
//             </div>
//           </div>

//           <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[207px] overflow-hidden gap-2.5 p-2.5">
//             <div className="flex flex-col justify-start items-start self-stretch flex-grow relative overflow-hidden gap-2.5 p-2.5">
//               <p className="text-[32px] text-left">인원 모집 방법</p>
//               <select
//                 {...register("recruitMethod")}
//                 required
//                 className="w-[525px] h-[90px] relative rounded border-2 border-[#b1b2ff]"
//               >
//                 <option value="공개">공개</option>
//                 <option value="수락">수락</option>
//               </select>
//             </div>

//             <div className="flex flex-col justify-start items-start self-stretch flex-grow relative overflow-hidden gap-2.5 p-2.5">
//               <p className="text-[32px] text-left">수강 완료 기간(선택)</p>
//               <input
//                 type="date"
//                 {...register("dueDate")}
//                 className="w-[525px] h-[90px] relative rounded border-2 border-[#b1b2ff]"
//               />
//             </div>
//           </div>

//           <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[255px] overflow-hidden gap-2.5 p-2.5">
//             <div className="flex flex-col justify-start items-start self-stretch flex-grow relative overflow-hidden gap-2.5 p-2.5">
//               <p className="text-[32px] text-left">강좌 선택</p>
//               <div className="flex-grow-0 flex-shrink-0 w-[525px] h-[90px] relative">
//                 <div className="w-[525px] h-[90px] absolute left-[-1.5px] top-[-1.5px] rounded border-2 border-[#b1b2ff]" />
//               </div>
//               <div className="flex-grow-0 flex-shrink-0 w-[279px] h-[61px] relative">
//                 <div className="w-[279px] h-[61px] absolute left-[-1px] top-[-1px] rounded-[20px] bg-[#b1b2ff]/50" />
//               </div>
//             </div>

//             <div className="flex justify-start items-start self-stretch flex-grow relative overflow-hidden gap-2.5 p-2.5">
//               <img
//                 src={imagePreview}
//                 className="flex-grow-0 flex-shrink-0 w-[208.15px] h-[178.33px] object-cover"
//               />

//               <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-[21px] px-4">
//                 <input {...register("studyImg")} id="picture" type="file" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5">
//         <p className="text-4xl text-left">프로젝트에 대해 선택해주세요.</p>
//       </div>

//       <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 gap-[34px]">
//         <input
//           type="text"
//           {...register("title")}
//           required
//           className="w-[1340px] h-[50px] justify-center border-2 border-[#b1b2ff]"
//           placeholder="제목을 입력해주세요"
//         />
//         <ReactQuill
//           {...register("description")}
//           placeholder="스터디에 대해 소개해주세요(선택)&#13;첫 회의 날짜: 1/17 8시&#13;주 3회 월수금 예정입니다."
//           className="w-[1340px] h-[400px] justify-center mb-5"
//         />

//         <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[15px]">
//           <Link
//             to="/study"
//             className="btn flex-grow-0 flex-shrink-0 w-[107px] h-[60px] relative rounded-[10px] bg-[#fc7a6f] text-white text-4xl"
//           >
//             취소
//           </Link>
//           <button className="flex-grow-0 flex-shrink-0 w-[131px] h-[60px] relative rounded-[10px] bg-[#a259ff]  text-white text-4xl">
//             글쓰기
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// }
