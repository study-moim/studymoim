import { useParams } from "react-router";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBullhorn } from "@fortawesome/free-solid-svg-icons";

export default function NoticeModal(props) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const studyId = useParams();

  window.onkeydown = function (event) {
    if (event.keyCode == 27) {
      props.onCancel();
    }
  };

  const requestRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();
    const enteredRequest = requestRef.current.value;

    const requestData = {
      notice: enteredRequest,
      studyId: studyId.study_id,
    };

    fetch(`http://${API_SERVER}/api/v1/study/${studyId.study_id}/notice`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    }).then((res) => {
      if (res.ok) {
        props.onCancel();
        location.reload();
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
            <div className="flex items-center justify-between pb-5 px-2">
              <p className="font-bold">공지 수정하기</p>
              <button className="transition-all" onClick={() => props.onCancel()}>
                <FontAwesomeIcon icon={faXmark} size="lg" className="hover:text-red-500" />
              </button>
            </div>
            {/*body*/}
            <div className="flex flex-col items-center justify-center gap-5">
              <form onSubmit={submitHandler} className="flex flex-col justify-center items-center">
                <textarea
                  name=""
                  id=""
                  cols="40"
                  rows="5"
                  maxLength={100}
                  ref={requestRef}
                  className="border rounded-[5px] p-5"
                  placeholder="새로운 공지를 입력해주세요."
                ></textarea>
                <button className="mt-5 p-2.5 w-[80%] rounded-[10px] text-center text-[14px] border border-[#b1b2ff] hover:bg-[#b1b2ff]">
                  제출하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
    </>
  );
}
