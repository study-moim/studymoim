import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import userInfo from "../../zustand/store";

export default function MyPageYours({ getClick, yourId, clickModal }) {
  const { info } = userInfo();
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const yourInformation = useFetch(
    `http://${API_SERVER}/api/v1/user/${yourId}/`
  );
  const followingLength = useFetch(
    `http://${API_SERVER}/api/v1/user/${yourId}/follow/following`
  );
  const followerLength = useFetch(
    `http://${API_SERVER}/api/v1/user/${yourId}/follow/follower`
  );
  const followCheck = useFetch(
    `http://${API_SERVER}/api/v1/user/${yourId}/follow?userId=${info.userId}`
  );
  const IMAGE_ROOT = import.meta.env.VITE_APP_IMAGE_ROOT;
  const image = IMAGE_ROOT + yourInformation.saveName;
  function followFunction(methods) {
    fetch(`http://${API_SERVER}/api/v1/user/${yourId}/follow/`, {
      method: methods,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: info.userId,
      }),
    }).then((res) => {
      if (res.ok) {
        window.location.reload()
      }
    });
  }


  return (
    <div className="w-[336px]">
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <div className="w-[150px] h-[150px] relative">
        <img
            className="rounded-full border"
            src={
              yourInformation.saveName
                ? image
                : "/logo.png"
            }
            />
        </div>
        <p className="text-[18px] font-bold text-center text-black mt-2">
          {yourInformation.nickname}
        </p>
        <p className="text-[15px] text-center text-black">
          <span
            className="cursor-pointer hover:text-[#989aff]"
            id="follower"
            onClick={clickModal}
          >
            팔로워 {followerLength} &nbsp;
          </span>
          | &nbsp;
          <span
            className="cursor-pointer hover:text-[#989aff]"
            id="following"
            onClick={clickModal}
          >
            팔로잉 {followingLength}
          </span>
        </p>
        {!followCheck ? (
          <button
            onClick={() => followFunction("POST")}
            className="w-[90%] rounded-[20px] bg-[#b1b2ff] text-[15px] text-center text-white py-1 hover:bg-[#989aff]"
          >
            팔로우
          </button>
        ) : (
          <button onClick={() => followFunction("DELETE")} className="w-[90%] rounded-[20px] bg-[#b1b2ff] text-[15px] text-center text-white py-1 hover:bg-[#989aff]">
            팔로우 취소
          </button>
        )}
        {/* TODO: 누르면 어디로 이동? 아니면 다른 기능? */}
        <button className="w-[90%] rounded-[20px] bg-[#b1b2ff] text-[15px] text-center text-white py-1 hover:bg-[#989aff]">
          쪽지 보내기
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 mt-5">
        <p
          onClick={getClick}
          id="study"
          className="cursor-pointer text-[15px] text-center text-black hover:scale-105"
        >
          스터디
        </p>
        <p
          onClick={getClick}
          id="course"
          className="cursor-pointer text-[15px] text-center text-black hover:scale-105"
        >
          강좌 수강 내역
        </p>
        <p
          onClick={getClick}
          id="article"
          className="cursor-pointer text-[15px] text-center text-black hover:scale-105"
        >
          작성한 글
        </p>
        {/* <p
          onClick={getClick}
          id="static"
          className="cursor-pointer text-[15px] text-center text-black hover:scale-105"
        >
          통계
        </p> */}
      </div>
    </div>
  );
}
