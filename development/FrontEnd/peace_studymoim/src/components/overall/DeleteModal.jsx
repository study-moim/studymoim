import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export default function DeleteModal(props) {
  window.onkeydown = function (event) {
    if (event.keyCode == 27) {
      props.onCancel();
    }
  };

  const navigate = useNavigate();

  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    navigate("/study");
  }
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
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
              <p className="text-[20px] font-semibold">
                작성한 내용이 모두 사라집니다.
              </p>
              <p className=" text-[15px] text-center">
                정말로 취소하시겠습니까?
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-between p-6 gap-5">
              <button
                className="p-3 relative gap-2 rounded-lg bg-white border text-[14px] hover:bg-gray-100"
                onClick={confirmHandler}
              >
                네, 취소하겠습니다.
              </button>
              <button
                className="p-3 relative gap-2 rounded-lg bg-[#b1b2ff] text-[14px] text-white hover:bg-[#989aff]"
                onClick={cancelHandler}
              >
                아니요, 다시 돌아갈래요.
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
