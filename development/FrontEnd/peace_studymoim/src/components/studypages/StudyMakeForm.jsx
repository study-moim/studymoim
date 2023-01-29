// TODO: 백 완성되면 .. 해봐야지
import { useEffect } from "react";
import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";


export default function StudyMakeForm(props) {
  const [ modalIsOpen, setModelIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }
   
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();

  const recruitMembersRef = useRef();
  const startDateRef = useRef();
  const recruitMethodRef = useRef();
  const dueDateRef = useRef();
  const studyImgRef = useRef();
  const titleInputRef = useRef();
  const descriptionRef = useRef();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  function submitHandler(event) {
    event.preventDefault();

    const enteredRecruitMembersRef = recruitMembersRef.current.value;
    const enteredStartDate = startDateRef.current.value;
    const enteredRecruitMethod = recruitMethodRef.current.value;
    const enteredDueDate = dueDateRef.current.value;
    const enteredTitleInput = titleInputRef.current.value;
    const enteredDescription = descriptionRef.current.value;

    const studyRecruitData = {
      recruitMembers: enteredRecruitMembersRef,
      startDate: enteredStartDate,
      recruitMethod: enteredRecruitMethod,
      dueDate: enteredDueDate,
      studyImg: preview,
      title: enteredTitleInput,
      description: enteredDescription,
    };
    props.onAddMeetup(studyRecruitData);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 flex flex-col justify-start items-center gap-[20px] mt-10">
      <form
        className="flex flex-col items-center gap-4 py-5"
        onSubmit={submitHandler}
      >
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[856px] w-[1440px] overflow-hidden gap-2.5 py-[5px]">
          <p className="text-4xl text-left">
            프로젝트 기본 정보를 입력해주세요.
          </p>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[760px] overflow-hidden gap-2.5 p-2.5">
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[216px] overflow-hidden gap-2.5">
              <div className="flex flex-col justify-start items-start self-stretch flex-grow relative overflow-hidden gap-2.5 p-2.5">
                <p className="text-[32px] text-left">모집인원 </p>
                <select
                  id="recruitMembers"
                  ref={recruitMembersRef}
                  required
                  className="w-[525px] h-[90px] relative rounded border-2 border-[#b1b2ff]"
                >
                  <option value="1">1명</option>
                  <option value="2">2명</option>
                  <option value="3">3명</option>
                  <option value="4">4명</option>
                  <option value="5">5명</option>
                  <option value="6">6명</option>
                </select>
              </div>

              <div className="flex flex-col justify-start items-start self-stretch flex-grow relative overflow-hidden gap-2.5 p-2.5">
                <p className="text-[32px] text-left">시작 예정일</p>
                <input
                  required
                  id="startDate"
                  type="date"
                  min="2023-01-01"
                  max="2023-12-31"
                  ref={startDateRef}
                  className="w-[525px] h-[90px] relative rounded border-2 border-[#b1b2ff]"
                />
              </div>
            </div>

            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[207px] overflow-hidden gap-2.5 p-2.5">
              <div className="flex flex-col justify-start items-start self-stretch flex-grow relative overflow-hidden gap-2.5 p-2.5">
                <p className="text-[32px] text-left">인원 모집 방법</p>
                <select
                  id="recruitMethod"
                  ref={recruitMethodRef}
                  required
                  className="w-[525px] h-[90px] relative rounded border-2 border-[#b1b2ff]"
                >
                  <option value="공개">공개</option>
                  <option value="수락">수락</option>
                </select>
              </div>

              <div className="flex flex-col justify-start items-start self-stretch flex-grow relative overflow-hidden gap-2.5 p-2.5">
                <p className="text-[32px] text-left">수강 완료 기간(선택)</p>
                <input
                  id="dueDate"
                  type="date"
                  min="2023-01-01"
                  max="2023-12-31"
                  ref={dueDateRef}
                  className="w-[525px] h-[90px] relative rounded border-2 border-[#b1b2ff]"
                />
              </div>
            </div>
            {/* TODO: 강좌는 나중에 !! 다중 선택으로 해야 돼!!  */}
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[255px] overflow-hidden gap-2.5 p-2.5">
              <div className="flex flex-col justify-start items-start self-stretch flex-grow relative overflow-hidden gap-2.5 p-2.5">
                <p className="text-[32px] text-left">강좌 선택</p>
                <div className="flex-grow-0 flex-shrink-0 w-[525px] h-[90px] relative">
                  <div className="w-[525px] h-[90px] absolute left-[-1.5px] top-[-1.5px] rounded border-2 border-[#b1b2ff]" />
                </div>
                <div className="flex-grow-0 flex-shrink-0 w-[279px] h-[61px] relative">
                  <div className="w-[279px] h-[61px] absolute left-[-1px] top-[-1px] rounded-[20px] bg-[#b1b2ff]/50" />
                </div>
              </div>

              <div className="flex justify-start items-start self-stretch flex-grow relative overflow-hidden gap-2.5 p-2.5">
                <img
                  src={preview}
                  className="flex-grow-0 flex-shrink-0 w-[208.15px] h-[178.33px] object-cover"
                />

                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-[21px] px-4">
                  <input
                    id="picture"
                    type="file"
                    ref={studyImgRef}
                    accept="image/*"
                    onChange={(event) => {
                      const file = event.target.files[0];
                      if (file && file.type.substring(0, 5) === "image") {
                        setImage(file);
                      } else {
                        setImage(null);
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5">
          <p className="text-4xl text-left">프로젝트에 대해 선택해주세요.</p>
        </div>

        <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 gap-[34px]">
          <input
            type="text"
            ref={titleInputRef}
            id="title"
            required
            className="w-[1340px] h-[50px] justify-center border-2 border-[#b1b2ff]"
            placeholder="제목을 입력해주세요"
          />
          <ReactQuill
            id="description"
            ref={descriptionRef}
            placeholder="스터디에 대해 소개해주세요(선택)&#13;첫 회의 날짜: 1/17 8시&#13;주 3회 월수금 예정입니다."
            className="w-[1340px] h-[400px] justify-center mb-5"
          />

          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[15px]">
            <Link
              to="/study"
              className="btn flex-grow-0 flex-shrink-0 w-[107px] h-[60px] relative rounded-[10px] bg-[#fc7a6f] text-white text-4xl"
            >
              취소
            </Link>
            <button className="flex-grow-0 flex-shrink-0 w-[131px] h-[60px] relative rounded-[10px] bg-[#a259ff]  text-white text-4xl">
              글쓰기
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
