import userInfo from "../../zustand/store";
import { useState, useMemo, useEffect } from "react";

export default function FollowerList({ follower, userId }) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const { info } = userInfo();
  const [isFollow, setIsFollow] = useState(false);
  const [changeFollow, setChangeFollow] = useState(false);
  const IMAGE_ROOT = import.meta.env.VITE_APP_IMAGE_ROOT;
  const image = IMAGE_ROOT + follower.saveName;
  useEffect(() => {
    const getIsFollow = async () => {
      await fetch(
        `http://${API_SERVER}/api/v1/user/${follower.userId}/follow?userId=${info.userId}`
      )
        .then((res) => res.json())
        .then((json) => {
          setIsFollow(json);
        });
    };
    getIsFollow();
  }, [changeFollow]);

  function followFunction(methods) {
    fetch(`http://${API_SERVER}/api/v1/user/${follower.userId}/follow/`, {
      method: methods,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: info.userId,
      }),
    }).then((res) => {
      if (res.ok) {
        setChangeFollow(!changeFollow);
      }
    });
  }

  return (
    <>
      <div className="flex justify-between items-center relative mb-5">
        <div className="flex w-[80%] items-center gap-5">
          <img
            className="rounded-full border w-[45px]"
            src={follower.saveName ? image : "/logo.png"}
          />
        <div className="flex flex-col justify-start items-start w-[80%]">
          <p className="text-[15px] font-bold text-black">{follower.nickname}</p>
          <p className="text-[12px] text-gray-400">{follower.email}</p>
        </div>
        </div>
        <div>
          {follower.userId === info.userId ? null : (
            <div className="w-full">
              {!isFollow ? (
                <button
                  onClick={() => followFunction("POST")}
                  className="rounded-[5px] border border-[#b1b2ff] text-[14px] text-center py-1 px-3 text-black hover:bg-[#989aff] hover:text-white"
                >
                  팔로우
                </button>
              ) : (
                <button
                  onClick={() => followFunction("DELETE")}
                  className="rounded-[5px] border border-[#dc7d76] text-[14px] text-center py-1 px-3 text-black hover:bg-[#d94f46] hover:text-white"
                >
                  삭제
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
