import { userInfo } from "../../zustand/store";
import { useState } from "react";

export default function MyPageLeftBar({ getClick, clickModal, clickUserId }) {
  const { info } = userInfo();
  let [logInUserId, setLogInUserId] = useState(info.userId)
  // console.log(logInUserId,"ioadsigasdiodgiogsdaoi")
  if (!info.userId) {
    setLogInUserId(0)
  }
  if (clickUserId.clickWho === info.userId || clickUserId.clickWho === 0 ) {
    return (
      <div className="w-[336px]">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div className="w-[150px] h-[150px] relative">
            <img
              className=" left-[-1px] top-[-1px]"
              src="data:image/jpeg;base64,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"
            />
          </div>
          <p className="text-[25px] font-bold text-center text-black">싸피킴</p>
          <p className="text-base font-bold text-center text-black">
            <span
              className="text-sky-700 cursor-pointer hover:text-[#989aff]"
              id="follower"
              onClick={clickModal}
            >
              팔로워&nbsp;
            </span>
            30.9M&nbsp;|&nbsp;
            <span
              id="following"
              className="text-sky-700 cursor-pointer hover:text-[#989aff]"
              onClick={clickModal}
            >
              팔로잉&nbsp;
            </span>
            0
          </p>
          <button
            id="modify"
            className="w-full rounded-[20px] bg-[#b1b2ff] text-base font-bold text-center text-white py-2 px-6 hover:scale-105 hover:bg-[#989aff]"
            onClick={clickModal}
          >
            프로필 수정하기
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 mt-5">
          <p
            onClick={getClick}
            id="study"
            className="cursor-pointer text-base text-center text-black hover:scale-105"
          >
            스터디
          </p>
          <p
            onClick={getClick}
            id="course"
            className="cursor-pointer text-base text-center text-black hover:scale-105"
          >
            강좌 수강 내역
          </p>
          <p
            onClick={getClick}
            id="lecture"
            className="cursor-pointer text-base text-center text-black hover:scale-105"
          >
            강의 수강 내역
          </p>
          <p
            onClick={getClick}
            id="memo"
            className="cursor-pointer text-base text-center text-black hover:scale-105"
          >
            메모
          </p>
          <p
            onClick={getClick}
            id="article"
            className="cursor-pointer text-base text-center text-black hover:scale-105"
          >
            작성한 글
          </p>
          <p
            onClick={getClick}
            id="like"
            className="cursor-pointer text-base text-center text-black hover:scale-105"
          >
            좋아요한 강좌
          </p>
          <p
            onClick={getClick}
            id="static"
            className="cursor-pointer text-base text-center text-black hover:scale-105"
          >
            통계
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-[336px]">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div className="w-[157px] h-[156px] relative">
            <img
              className=" left-[-1px] top-[-1px]"
              src="data:image/jpeg;base64,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"
            />
          </div>
          <p className="text-[25px] font-bold text-center text-black">싸피킴</p>
          <p className="text-l font-bold text-center text-black">
            <span
              className="text-sky-700 cursor-pointer hover:text-[#989aff]"
              id="follower"
              onClick={clickModal}
            >
              팔로워&nbsp;
            </span>
            30.9M&nbsp;|&nbsp;
            <span
              className="text-sky-700 cursor-pointer hover:text-[#989aff]"
              id="following"
              onClick={clickModal}
            >
              팔로잉&nbsp;
            </span>
            0
          </p>
          {/* TODO: 온클릭으로 팔로우 언팔로우 구현 */}
          <button className="w-full rounded-[20px] bg-[#b1b2ff] text-[13px] font-bold text-center text-white py-2 px-6 hover:scale-110 hover:bg-[#989aff]">
            팔로우
          </button>
          {/* TODO: 누르면 어디로 이동? 아니면 다른 기능? */}
          <button className="w-full rounded-[20px] bg-[#b1b2ff] text-base font-bold text-center text-white py-2 px-6 hover:scale-110 hover:bg-[#989aff]">
            쪽지 보내기
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 mt-5">
          <p
            onClick={getClick}
            id="study"
            className="cursor-pointer text-base text-center text-black hover:scale-105"
          >
            스터디
          </p>
          <p
            onClick={getClick}
            id="course"
            className="cursor-pointer text-base text-center text-black hover:scale-105"
          >
            강좌 수강 내역
          </p>
          <p
            onClick={getClick}
            id="article"
            className="cursor-pointer text-base text-center text-black hover:scale-105"
          >
            작성한 글
          </p>
          <p
            onClick={getClick}
            id="static"
            className="cursor-pointer text-l text-center text-black hover:scale-105"
          >
            통계
          </p>
        </div>
      </div>
    );
  }
}
