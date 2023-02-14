import React from "react";
import RingModalItem from "./RingModalItem.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

export default function RingModal(props) {
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
      <div className="justify-center items-start flex overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none pt-16">
        <div onClick={() => cancelHandler()} className="absolute opacity-25 w-full h-full inset-0 bg-black"></div>
        <div className="absolute min-w-[400px] max-w-[60%] bg-white shadow-2xl rounded-lg z-45">
          <div className="flex w-full items-center justify-between px-5 py-3 border-b">
            <p className="text-[15px] font-semibold flex items-center gap-3">
              <FontAwesomeIcon icon={faBell} color="ye"/> 새로운 소식
            </p>
            <button className="transition-all" onClick={() => cancelHandler()}>
              <FontAwesomeIcon
                icon={faXmark}
                size="lg"
                className="hover:text-red-500"
              />
            </button>
          </div>
          <div className="flex flex-col w-full items-start justify-start">
            {props.alarmList.map((alarm) => (
              <RingModalItem
                key={alarm.alarmId}
                alarm={alarm}
                onLinkClick={cancelHandler}
              />
            ))}
            {props.alarmList.length == 0 ? <p className="text-[15px]  px-5 py-3">새로운 소식이 없습니다.</p> : null}
          </div>
        </div>
      </div>
      {/* <div onClick={() => cancelHandler()} className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
    </>
  );
}

{
  /* <button
                className="text-red-500 background-transparent text-xl font-bold uppercase px-6 py-2 outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 hover:scale-125 hover:text-red-800"
                onClick={() => props.onCancel()}
              >
                X
              </button> */
}
