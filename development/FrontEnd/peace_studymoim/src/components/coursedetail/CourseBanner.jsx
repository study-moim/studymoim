import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import userInfo from "../../zustand/store";
import { useState, useMemo, useEffect } from "react";

export default function CourseBanner({ dataForBanner }) {
  const { info } = userInfo();
  const [likeCount, setLikeCount] = useState(dataForBanner.likeUserCount)

  const minute = parseInt(dataForBanner.totalTime / 60)
  // async 여기배끼셈
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const [isLike, setIsLike] = useState(false);
  useEffect(() => {
    const getIsLike = async () => {
      await fetch(
        `http://${API_SERVER}/api/v1/course/${dataForBanner.courseId}/${info.userId}`
      )
        .then((res) => res.json())
        .then((json) => {
          setIsLike(json);
        });
    };
    getIsLike();
  }, [isLike]);

  function likeFunction(methods) {
    fetch(`http://${API_SERVER}/api/v1/course/${dataForBanner.courseId}/${info.userId}`, {
      method: methods,
      headers: {
        "Content-Type": "application/json",
      }
    }).then((res) => {
      if (res.ok) {
        setIsLike(!isLike)
        if (methods==="POST") {
          setLikeCount(likeCount+1)
        } else {
          setLikeCount(likeCount-1)
        }
      }
    });
  }



  return (
    <div className="w-full flex flex-col bg-[#ebefff] p-[30px] gap-[20px] rounded-[15px] ">
      <img className="w-[350px] h-[250px] " src={dataForBanner.thumbnail}></img>
      <div className="w-full text-[45px] font-bold pl-2">
        <p className="text-[25px] pt-5 font-bold">{dataForBanner.title}</p>
        <p className="text-[20px] pt-10 font-bold">
          {dataForBanner.courseProvider}
        </p>
        <p className="text-base text-[#58595d]">
          총 {minute}분,{" "}
          {dataForBanner.totalLecture}개 강의
        </p>
      </div>
      <div className="flex gap-[10px] items-center pl-2">
        {!isLike ? (
          <button className="text-[25px]" onClick={() => likeFunction("POST")}>
            <FontAwesomeIcon
              icon={faHeart}
              className="hover:text-red-500 text-red-200"
            />
          </button>
        ) : (
          <button className="text-[25px]" onClick={() => likeFunction("DELETE")}>
            <FontAwesomeIcon
              icon={faHeart}
              className="hover:text-red-200 text-red-500"
            />
          </button>
        )}
        <p className="text-[20px]">{likeCount}</p>
      </div>
      {/* <button
        className="px-[65px] py-[18px] rounded-[15px] bg-[#ff7262] border-2 border-[#2e2f35] hover:animate-pulse text-base font-bold text-center uppercase text-white"
        style={{ boxShadow: "3px 3px 0px 0 #2e2f35" }}
      >
        강의듣기
      </button> */}
    </div>
  );
}
