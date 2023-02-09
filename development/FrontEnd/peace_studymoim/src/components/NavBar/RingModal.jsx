import React from "react";
import RingModalItem from "./RingModalItem.jsx";

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
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        style={{ filter: "drop-shadow(0px 5px 15px rgba(0,0,0,0.2))" }}
      >
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-px">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
            <div
              className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[440px] gap-2 pt-2 pb-2 bg-white"
              style={{ boxShadow: "0px 1px 0px 0 #e4e8ee" }}
            >
              <p className="flex-grow w-[360px] text-sm text-left pl-5">
                <span className="flex-grow w-[360px] text-sm font-bold text-left text-[#7b61ff]">
                  알람 목록
                </span>
              </p>
              <div
                className="flex-grow cursor-pointer justify-end text-sm text-left pl-5"
                onClick={cancelHandler}
              >
                <span className="flex-grow justify-end text-sm font-bold text-left text-[#7b61ff]">
                  x
                </span>
              </div>
            </div>
          </div>
          {props.alarmList.map((alarm) => (
            <RingModalItem
              key={alarm.alarmId}
              alarm={alarm}
              onLinkClick={cancelHandler}
            />
          ))}
          {props.alarmList.length == 0 ? (
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
              <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[440px] gap-2 pt-2 pb-4 bg-white"
                style={{ boxShadow: "0px 1px 0px 0 #e4e8ee" }}
              >
                <div className="flex flex-col justify-end items-end self-stretch flex-grow-0 flex-shrink-0 pl-10 py-2">
                  <p className="flex-grow w-[360px] text-sm text-left">
                    <span className="flex-grow w-[360px] text-sm text-left text-gray-500">
                      {" "}
                      남은 알람이 없습니다.{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
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
