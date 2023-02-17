import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import userInfo from "../../zustand/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function StudyRecruitModalOpen(props) {
  const studyId = useParams();
  const { info } = userInfo();
  const navigate = useNavigate();

  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;

  window.onkeydown = function (event) {
    if (event.keyCode == 27) {
      props.onCancel();
    }
  };

  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    fetch(
      `http://${API_SERVER}/api/v1/study/${studyId.study_recruit_id}/participate`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: info.userId,
          studyId: studyId.study_recruit_id,
        }),
      }
    ).then((res) => {
      if (res.ok) { 
        alert('스터디에 신청되셨습니다.')
        navigate(`/studyDetail/${studyId.study_recruit_id}`);
      }
    });
  }
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
        <div
          id="배경"
          onClick={() => props.onCancel()}
          className="absolute opacity-25 w-full h-full inset-0 bg-black"
        ></div>
        <div className="relative w-auto mx-auto max-w-3xl">
          {/*content*/}
          <div className="p-5 rounded-lg shadow-lg relative flex flex-col w-full bg-white">
            {/*header*/}
            <div className="flex justify-end ">
              <button onClick={() => props.onCancel()}>
                <FontAwesomeIcon
                  icon={faXmark}
                  size="lg"
                  className="hover:text-red-500"
                  onClick={cancelHandler}
                />
              </button>
            </div>
            {/*body*/}
            <div className="flex flex-col justify-end items-center">
              <img
                src="/logo.png"
                className="w-[100px] rounded-full border object-cover my-5"
              />
              <p className="text-[20px] font-semibold">바로 신청하실건가요?</p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-between p-6 gap-5">
              <button
                className="p-3 relative gap-2 rounded-lg bg-white border text-[14px] hover:bg-gray-100"
                onClick={confirmHandler}
              >
                네, 신청하겠습니다.
              </button>
              <button
                className="p-3 relative gap-2 rounded-lg bg-[#b1b2ff] text-[14px] text-white hover:bg-[#989aff]"
                onClick={cancelHandler}
              >
                아니요, 다시 생각해볼래요.
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
