import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function RingModal(props) {
    const navigate = useNavigate();
    console.log(props.alarm)
    return (
    <>
        <Link to={props.alarm.url} onClick={props.onLinkClick}>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 hover:brightness-90">
            <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[440px] gap-2 pt-2 pb-4 bg-white"
                style={{ boxShadow: "0px 1px 0px 0 #e4e8ee" }}
            >
                <div className="flex flex-col justify-end items-end self-stretch flex-grow-0 flex-shrink-0 pl-10">
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4 px-4">
                            <div className="flex justify-start items-center flex-grow relative gap-2.5">

                                <p className="flex-grow w-[360px] text-sm text-left">
                                    <span className="flex-grow w-[360px] text-sm text-left text-black">
                        {" "}
                                        {props.alarm.content} {" "}
                      </span>
                                </p>
                            </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 pl-16">
                    <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#a5acb8]">
                        {props.alarm.publishTime.replace('T', ' ')}
                    </p>
                </div>
            </div>
        </div>
        </Link>
    </>

    )
}