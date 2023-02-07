import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function CourseBanner({ dataForBanner }) {
  return (
    <div className="w-full flex flex-col bg-[#ebefff] p-[30px] gap-[20px] rounded-[15px] ">
      <img className="w-[350px] h-[250px] " src={dataForBanner.thumbnail}></img>
      <div className="w-full text-[45px] font-bold pl-2">
        <p className="text-[25px] pt-5 font-bold">{dataForBanner.title}</p>
        <p className="text-[20px] pt-10 font-bold">
          {dataForBanner.courseProvider}
        </p>
        <p className="text-base text-[#58595d]">
          {/* 총 N시간 N분 28개 강의 */}총 {dataForBanner.totalTime}초,{" "}
          {dataForBanner.totalLecture}개 강의
        </p>
      </div>
      <div className="flex gap-[10px] items-center pl-2">
        <button className="text-[25px]">
          <FontAwesomeIcon
            icon={faHeart}
            color="rgb(148 163 184)"
            className="hover:text-red-500"
          />
        </button>
        <p className="text-[20px]">{dataForBanner.likeUserCount}</p>
      </div>
      <button
        className="px-[65px] py-[18px] rounded-[15px] bg-[#ff7262] border-2 border-[#2e2f35] hover:animate-pulse text-base font-bold text-center uppercase text-white"
        style={{ boxShadow: "3px 3px 0px 0 #2e2f35" }}
      >
        강의듣기
      </button>
    </div>
  );
}
