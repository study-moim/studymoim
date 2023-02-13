import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
        <div className="w-[50%] h-fit rounded-lg shadow-lg flex flex-col bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-center justify-between py-5 px-6 border-b">
            <p className="font-bold">{props.lectureData.title}</p>
            <button className="transition-all" onClick={cancelHandler}>
              <FontAwesomeIcon icon={faXmark} size="lg" className="hover:text-red-500" onClick={cancelHandler}/>
            </button>
          </div>
          {/*body*/}
          <div className="flex flex-col items-start py-5 px-6 gap-5">
            <p className="text-[14px]">{props.memoData.content}</p>
          </div>
          {/*footer*/}
          <div className="flex flex-col items-end py-5 px-6 ">
            <Link
              to={`/player/${props.lectureData.lectureId}`}
              state={{
                propData: props.lectureData,
              }}
              className="cursor-pointer w-[30%] rounded-[20px] bg-[#b1b2ff] text-[15px] text-center text-white py-1 hover:bg-[#989aff]"
            >
              강의 다시 보기
            </Link>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
