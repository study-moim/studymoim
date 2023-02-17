import { useParams } from "react-router";
import { useRef } from "react";
import userInfo from "../../zustand/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export default function StudyRecruitModalNotOpen(props) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const studyId = useParams();

  window.onkeydown = function (event) {
    if (event.keyCode == 27) {
      props.onCancel();
    }
  };

  function cancelHandler() {
    props.onCancel();
  }
  const { info } = userInfo();
  const requestRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();
    const enteredRequest = requestRef.current.value;

    if (enteredRequest.trim().length < 1) {
      alert('공백으로만 구성할 수 없습니다.')
      return 
    }
    const requestData = {
      content: enteredRequest,
      userId: info.userId,
    };
    fetch(
      `http://${API_SERVER}/api/v1/study/${studyId.study_recruit_id}/request`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      }
    ).then((res) => {
      if (res.ok) {
        alert('스터디 신청이 완료되었습니다.') 
        props.onCancel();
      }
    });
  }
  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-50">
        <div
          id="배경"
          onClick={() => props.onCancel()}
          className="absolute opacity-25 w-full h-full inset-0 bg-black"
        ></div>
        <div className="relative w-auto mx-auto max-w-3xl">
          {/*content*/}
          <div className="p-5 rounded-lg shadow-lg relative flex flex-col w-full bg-white">
            {/*header*/}
            <div className="flex items-center justify-between py-5 px-6">
              <p className="font-bold">스터디 신청</p>
              <button
                className="transition-all"
                onClick={() => cancelHandler()}
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  size="lg"
                  className="hover:text-red-500"
                />
              </button>
            </div>

            {/*body*/}
            <div className="flex flex-col items-center justify-center px-6 gap-5">
              <form
                onSubmit={submitHandler}
                className="flex flex-col justify-center items-center"
              >
                <textarea
                  name=""
                  id=""
                  cols="60"
                  rows="5"
                  maxLength={100}
                  required
                  ref={requestRef}
                  className="border rounded-[15px] p-5"
                  placeholder="방장에게 보낼 메세지를 입력해주세요."
                ></textarea>
                <button className="m-5 p-2.5 w-[80%] rounded-[10px] text-center text-[14px] border border-[#b1b2ff] hover:bg-[#b1b2ff]">
                  제출하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
