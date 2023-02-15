import { Link } from "react-router-dom";

export default function NowPlayStudy(props) {
  const isLive = props.propData.live;

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();
  return (
    <>
      {isLive ? (
        <div className="flex flex-col justify-center items-center h-[400px] w-full relative overflow-hidden gap-5 pt-[30px] pb-[50px]">
          <p className="text-[20px] font-bold text-center"></p>
          <img src={props.state.recent.thumbnail} className="w-[300px]" />
          <p className="text-[15px] text-center">{props.state.recent.title}</p>
          <Link
            to={"/player/study/" + props.state.recent.lectureId}
            state={{
              user: props.state.user,
              study: props.state.study,
              videoId: props.state.recent.videoId,
              videoInfo: props.state.recent,
              lectureId: props.state.recent.lectureId,
            }}
            className="px-[65px] py-[14px] rounded-[15px] bg-[#ff7262] border-2 border-[#2e2f35] hover:animate-pulse"
            style={{ boxShadow: "3px 3px 0px 0 #2e2f35" }}
          >
            <p className="text-base font-bold text-center uppercase text-white">
              {year}년 {month + 1}월 {date}일 오늘의 스터디 참여
            </p>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-[400px] w-full relative overflow-hidden gap-5 p-[50px]">
          <p className="text-[20px] font-bold text-center">최근 함께 들은 강의</p>
          <p className="text-[15px] text-center opacity-50">
            {props.state.recent.title}
          </p>
          <div className="px-[65px] py-[14px] rounded-[15px] bg-[#ff7262] border-2 border-[#2e2f35]" style={{ boxShadow: "3px 3px 0px 0 #2e2f35" }}>
            <div className="text-base font-bold text-center uppercase text-white">
            {year}년 {month + 1}월 {date}일 진행중인 스터디가 없습니다.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
