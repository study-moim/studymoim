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
    <div className="flex justify-center items-center bg-[#ebefff]">
      <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-6/12 relative gap-[45px] pl-[150px] pr-[30px] py-[30px]">
        <p className="flex-grow-0 flex-shrink-0 w-full text-[60px] font-bold text-left">
          <span className="flex-grow-0 flex-shrink-0 w-full font-bold text-left text-[#a259ff]">
            {userNickname}
          </span>
          <span className="flex-grow-0 flex-shrink-0 w-full font-bold text-left text-black">
            님과
          </span>
          <br />
          <span className="flex-grow-0 flex-shrink-0 w-full font-bold text-left text-black">
            딱 맞는 강좌
          </span>
        </p>
        <p className="flex-grow-0 flex-shrink-0 w-full text-left text-[#58595d]">
          <span className="flex-grow-0 flex-shrink-0 w-full text-2xl font-bold text-left text-[#58595d]">
            {recommendCourse && recommendCourse.title}
          </span>
          <br />
          <span className="flex-grow-0 flex-shrink-0 w-full text-xl text-left text-[#58595d]">
            {recommendCourse && recommendCourse.courseProviderName}
          </span>
        </p>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-full gap-10 pr-[349.1875px]">
          <div
            className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative pl-[65px] pr-[66.046875px] py-[22px] rounded-[15px] bg-[#ff7262] border-2 border-[#2e2f35]"
            style={{ boxShadow: "3px 3px 0px 0 #2e2f35" }}
          >
            {recommendCourse ? (
              <Link
                to={`/course/${recommendCourse.course_id}`}
                state={{
                  propData: recommendCourse,
                }}
              >
                <button className="flex-grow-0 flex-shrink-0 text-base font-bold text-center uppercase text-white">
                  강좌 들으러 가기
                </button>
              </Link>
            ) : (
              <button className="flex-grow-0 flex-shrink-0 text-base font-bold text-center uppercase text-white">
                강좌 들으러 가기
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex w-6/12 justify-center items-center flex-grow-0 flex-shrink-0 ">
        {recommendCourse ? 
          <img src={recommendCourse.thumbnail} alt="" className="w-full" />
          :
          <img src="" alt="" /> 
        }
      </div>
    </div>
  );
}
