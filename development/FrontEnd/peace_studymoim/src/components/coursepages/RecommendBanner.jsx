import useFetch from "../../hooks/useFetch";
import userInfo from "../../zustand/store";
import { Link } from "react-router-dom";

export default function RecommendBanner() {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const { info } = userInfo();
  const userId = info.userId;
  const userNickname = info.nickname;

  const recommendCourse = useFetch(
    `http://${API_SERVER}/api/v1/user/${userId}/recommend/courses`
  )[0];


  return (
    <div className="flex flex-col w-full bg-[#ebefff] pt-[15px] pb-[30px] px-[25px] gap-[15px]">
      <p className="w-full text-[40px] font-bold">
        <span className="font-bold text-[#a259ff]">{userNickname}</span>
        <span className="font-bold text-black">님과 딱 맞는 강좌</span>
      </p>
      <p className="w-full text-[#58595d] pl-[5px]">
        <span className="w-full text-[17px] font-bold text-[#58595d]">
          {recommendCourse && recommendCourse.title}
        </span>
        <br />
        <span className="w-full text-[14px] text-[#58595d]">
          {recommendCourse && recommendCourse.courseProviderName}
        </span>
      </p>
      <div className="flex w-full">
        {recommendCourse ? (
          <Link
            to={`/course/${recommendCourse.course_id}`}
            state={{
              propData: recommendCourse,
            }}
            className="px-[65px] py-[14px] rounded-[15px] bg-[#ff7262] border-2 border-[#2e2f35] hover:animate-pulse"
            style={{ boxShadow: "3px 3px 0px 0 #2e2f35" }}
          >
            <button className="text-base font-bold text-center uppercase text-white">
              강좌 들으러 가기
            </button>
          </Link>
        ) : (
          null
        )}
      </div>
      {/* <div className="flex w-6/12 justify-center items-center">
        {recommendCourse ? 
          <img src={recommendCourse.thumbnail} alt="" className="w-full" />
          :
          <img src="" alt="" /> 
        }
      </div> */}
    </div>
  );
}
