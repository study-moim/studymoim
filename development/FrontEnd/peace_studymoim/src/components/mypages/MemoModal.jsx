import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function MemoModal(props) {
  window.onkeydown = function (event) {
    if (event.keyCode == 27) {
      props.onCancel();
    }
  };

  function cancelHandler() {
    props.onCancel();
  }

  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-50">
        {/*content*/}
        <div className="w-[350px] h-[350px] rounded-lg shadow-lg flex flex-col bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-center justify-between py-5 px-6 border-b">
            <p className="font-bold">{props.lectureTitle}</p>
            <button className="transition-all" onClick={() => cancelHandler()}>
              <FontAwesomeIcon
                icon={faXmark}
                size="lg"
                className="hover:text-red-500"
              />
            </button>
          </div>
          {/*body*/}
          <div className="flex flex-col items-center justify-center py-5 px-6 gap-5">
            <p className="text-[14px]">
              {props.memoData.content}
            </p>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
