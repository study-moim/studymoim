import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch.jsx";
export default function NowPlayStudy(props) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const isLive = useFetch(`http://${API_SERVER}/api/v1/study/${props.state.study.studyId}/live`)
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate(); 
  // TODO: 나중에 바꿔야함 !! 
  // const studyFirst = propData.curricula[0].course.course_id;
  console.log(props.state.recent)
  return (
    <>
      {/* TODO: 강의 있을 때 없을 때 나눠서  */}
      {/* <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[430px] w-full relative overflow-hidden gap-5 p-[50px]">
        <p className="flex-grow-0 flex-shrink-0 text-3xl font-bold text-center text-black">
          현재 진행 중인 강의가 없습니다.
        </p>
      </div> */} 


      <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[700px] w-full relative overflow-hidden gap-5 p-[50px]"> 
        <p className="flex-grow-0 flex-shrink-0 text-3xl font-bold text-center">
          {year}년 {month + 1}월 {date}일 오늘의 스터디
        </p>
        <img
          src={props.state.recent.thumbnail}
          className="flex-grow-0 flex-shrink-0 object-contain opacity-50"
        />
        {isLive ? (<div>
             <p className="flex-grow-0 flex-shrink-0 text-xl text-center opacity-50">
               {props.state.recent.title}
             </p>
             <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-1/2 relative gap-2.5 px-[140px] py-[27px] rounded-[20px] bg-[#b1b2ff]">
             <Link
              to={'/study/player/'+props.state.recent.lectureId}
              state={{
                user: props.state.user,
                study: props.state.study,
                videoId: props.state.recent.videoId
              }}
              className="flex-grow-0 flex-shrink-0 text-3xl font-bold text-center text-white"
            >
              스터디 참여
            </Link>
          </div>) : (<div>
            <img
              src={props.state.recent.thumbnail}
              className="flex-grow-0 flex-shrink-0 object-contain opacity-50"
            />
            <p className="flex-grow-0 flex-shrink-0 text-xl text-center opacity-50">
              {props.state.recent.title}
            </p>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-1/2 relative gap-2.5 px-[140px] py-[27px] rounded-[20px] bg-[#b1b2ff]">

            <Link
                className="flex-grow-0 flex-shrink-0 text-3xl font-bold text-center text-white opacity-30"
            >
              스터디 중이 아닙니다
            </Link>
          </div>)
         }
        </div>
      </div>
    </>
  );
}
