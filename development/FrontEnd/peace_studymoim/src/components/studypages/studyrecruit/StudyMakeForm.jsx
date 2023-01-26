import { useRef } from "react";

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
      <p className="flex-grow-0 flex-shrink-0 text-4xl text-left text-black">
        프로젝트 기본 정보를 입력해주세요.
      </p>
      <div>
        <label htmlFor="recruitMembers">모집인원</label>
        <select id="recruitMembers" ref={recruitMembersRef} required>
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

      <div>
        <label htmlFor="startDate">시작 예정일</label>
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
        <textarea
          id="description"
          placeholder="스터디에 대해 소개해주세요(선택)&#13;첫 회의 날짜: 1/17 8시&#13;주 3회 월수금 예정입니다."
          cols="185"
          rows="20"
          ref={descriptionRef}
        ></textarea>
      </div>

      <button>글쓰기</button>
    </form>
  );
}
