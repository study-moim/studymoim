import userInfo from "../../zustand/store";
import useFetch from "../../hooks/useFetch";

export default function MyPageMine({ getClick, myId, clickModal }) {
  const { info } = userInfo();
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const followingLength = useFetch(`http://${API_SERVER}/api/v1/user/${myId}/follow/following`);
  const followerLength = useFetch(`http://${API_SERVER}/api/v1/user/${myId}/follow/follower`);
  const IMAGE_ROOT = import.meta.env.VITE_APP_IMAGE_ROOT;
  const image = IMAGE_ROOT + info.saveName;
  return (
    <div className="w-[336px]">
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <img
          className="rounded-full border w-[130px] h-[130px]"
          src={info.saveName ? image : "/logo.png"}
        />

        <p className="text-[18px] font-bold text-center text-black mt-2">{info.nickname}</p>
        <p className="text-[15px] text-center text-black">
          <span className="cursor-pointer hover:text-[#989aff]" id="follower" onClick={clickModal}>
            팔로워 {followerLength} &nbsp;
          </span>
          | &nbsp;
          <span id="following" className="cursor-pointer hover:text-[#989aff]" onClick={clickModal}>
            팔로잉 {followingLength}
          </span>
        </p>
        <button
          id="modify"
          className="w-[90%] rounded-[20px] bg-[#b1b2ff] text-[15px] text-center text-white py-1 hover:bg-[#989aff]"
          onClick={clickModal}
        >
          프로필 수정하기
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
          id="lecture"
          className="cursor-pointer text-[15px] text-center text-black hover:scale-105"
        >
          강의 수강 내역
        </p>
        <p
          onClick={getClick}
          id="memo"
          className="cursor-pointer text-[15px] text-center text-black hover:scale-105"
        >
          메모
        </p>
        <p
          onClick={getClick}
          id="article"
          className="cursor-pointer text-[15px] text-center text-black hover:scale-105"
        >
          작성한 글
        </p>
        <p
          onClick={getClick}
          id="like"
          className="cursor-pointer text-[15px] text-center text-black hover:scale-105"
        >
          좋아요한 강좌
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
