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
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-slate-200 rounded-t">
              <p>공지 수정하기</p>
              <FontAwesomeIcon icon={faXmark} onClick={() => props.onCancel()} /> 
            </div>
            {/*body*/}
            <form
                onSubmit={submitHandler}
                className="flex flex-col justify-center items-end mx-1 my-1"
              >
                <textarea
                  name=""
                  id=""
                  cols="40"
                  rows="5"
                  maxLength={100}
                  ref={requestRef}
                ></textarea>
              <button
                className="flex justify-center items-center flex-grow h-11 mt-3 relative gap-2.5 p-2.5 rounded-lg text-sm text-white  bg-[#b1b2ff]"
              >
                제출하기 
              </button>
              </form>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
