import { useNavigate } from "react-router-dom";


export default function DeleteModal(props) {
  window.onkeydown = function (event) {
    if (event.keyCode == 27) {
      props.onCancel()
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
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-slate-200 rounded-t">
                <img
                  src="/logo.png"
                  className="flex-grow-0 flex-shrink-0 w-[385px] h-[237.5px] rounded-xl object-cover"
                />
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => props.onCancel()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              {/*body*/}
              <div className="flex flex-col justify-end items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-[#54595e]">
                  작성한 내용이 모두 사라집니다.
                </p>
                <p className="flex-grow-0 flex-shrink-0 w-[385px] text-sm text-center text-[#54595e]/60">
                  정말로 취소하시겠습니까?
                </p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-between p-6 gap-5">
                <button
                  className="flex justify-center items-center flex-grow h-11 relative gap-2.5 px-1 py-3.5 rounded-lg bg-white border border-[#4f4f4f] text-sm text-[#4f4f4f]"
                  onClick={confirmHandler}
                >
                  네, 취소하겠습니다.
                </button>
                <button
                  className="flex justify-center items-center flex-grow h-11 relative gap-2.5 px-1 py-3.5 rounded-lg bg-[#b1b2ff] text-sm text-white"
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
    </>
  );
}
