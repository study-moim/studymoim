import React from "react";
import { Link } from "react-router-dom";
import Moment from "moment";
import "moment/locale/ko";

export default function RingModal(props) {
  return (
    <>
      <Link to={props.alarm.url} onClick={props.onLinkClick}>
        <div className=" px-5 py-3 flex flex-col justify-start items-start hover:bg-gray-100 gap-2 border-t">
          <p className="w-[360px] text-[15px]">{props.alarm.content}</p>
          <p className="text-[14px] text-gray-500">
            {Moment(props.alarm.publishTime).format("YYYY년 MM월 DD일 HH:DD")}{" "}
          </p>
        </div>
      </Link>
    </>
  );
}
