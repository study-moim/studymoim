import userInfo from "../../zustand/store";
import { useState, useMemo, useEffect } from "react";

export default function FollowerList({ follower, userId }) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const { info } = userInfo();
  const [isFollow, setIsFollow] = useState(false)
  const [changeFollow, setChangeFollow] = useState(false)
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
    getIsFollow()
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
        setChangeFollow(!changeFollow)
      }
    });
  }

  return (
    <>
      <div className="flex justify-start items-center gap-5 relativel">
        <div className="flex justify-center items-center gap-5 cursor-pointer">
          <div className="w-[50px] h-[50px] relative">
            <img
              className="absolute left-[-1px] top-[-1px] rounded-full"
              src={
                image
                  ? image
                  : "data:image/jpeg;base64,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"
              }
            />
          </div>
          <div className="flex flex-col justify-center items-center h-[50px] w-[300px] relative gap-[5px] border-b-[0.3px] border-gray-400 hover:border-[#989aff]">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[300px] text-base font-bold text-black">
              {follower.nickname}
            </p>
          </div>
        </div>
        <div className="w-full">
          {follower.userId === info.userId ? null : (
            <div className="w-full">
              {!isFollow ? (
                <button
                  onClick={() => followFunction("POST")}
                  className="w-full rounded-[20px] bg-[#b1b2ff] text-base font-bold text-center text-white py-2 px-6 hover:bg-[#989aff]"
                >
                  팔로우
                </button>
              ) : (
                <button
                  onClick={() => followFunction("DELETE")}
                  className="w-full rounded-[20px] bg-[#dc7d76] text-base font-bold text-center text-white py-2 px-6 hover:bg-[#d94f46]"
                >
                  팔로우 취소
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
