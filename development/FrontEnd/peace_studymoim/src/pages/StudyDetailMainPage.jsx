import StudyNotice from "../components/studydetail/StudyNotice";
import StudyIntroduceBanner from "../components/studydetail/StudyIntroduceBanner";
import { useState, useEffect } from "react";
import NowPlayStudy from "../components/studydetail/NowPlayStudy";
import StudyMemberCoummunity from "../components/studydetail/StudyMemberCommunity";
import LectureProgressList from "../components/studydetail/LectureProgressList";
import LectureManage from "../components/studydetail/LectureManage";
import MemberManage from "../components/studydetail/MemberManage";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import userInfo from "../zustand/store";

export default function StudyDetailMainPage() {
  const [currentClick, setCurrentClick] = useState("realtime");
  const [prevClick, setPrevClick] = useState(null);
  const studyId = useParams();
  const { info } = userInfo();
  const userInformation = info.userId;

  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const detailData = useFetch(
    `http:///${API_SERVER}/api/v1/study/${studyId.study_id}`
  );
  const recentPlayed = useFetch(`http://${API_SERVER}/api/v1/study/${studyId.study_id}/live/recent`);

  // console.log(detailData.leadUser.userId)
  const GetClick = (event) => {
    setCurrentClick(event.target.id);
  };

  useEffect(
    (e) => {
      if (currentClick !== null) {
        let current = document.getElementById(currentClick);
        current.style.backgroundColor = "#8871f9";
      }
      if (prevClick !== null) {
        let prev = document.getElementById(prevClick);
        prev.style.backgroundColor = "#b1b2ff";
      }
      setPrevClick(currentClick);
    },
    [currentClick]
  );

  return (
    <div className="max-w-6xl mx-auto px-4">
      <StudyIntroduceBanner propData={detailData}/>
      <StudyNotice propData={detailData} />

      <div className="flex flex-col w-full mt-10">
        <div className="flex justify-start items-start w-full">
          <button
            id="realtime"
            onClick={GetClick}
            className="w-2/12 rounded-tl-[13px] rounded-tr-[13px] bg-[#b1b2ff] border-2 border-[#b1b2ff] text-[15px] font-bold text-center text-white"
          >
            실시간 강의
          </button>
          <button
            id="community"
            onClick={GetClick}
            className="w-2/12 rounded-tl-[13px] rounded-tr-[13px] bg-[#b1b2ff] border-2 border-[#b1b2ff] text-[15px] font-bold text-center text-white"
          >
            커뮤니티
          </button>
          <button
            id="progress"
            onClick={GetClick}
            className="w-2/12 rounded-tl-[13px] rounded-tr-[13px] bg-[#b1b2ff] border-2 border-[#b1b2ff] text-[15px] font-bold text-center text-white"
          >
            강의별 진도율
          </button>
          <button
            id="membermanagement"
            onClick={GetClick}
            className="w-2/12 rounded-tl-[13px] rounded-tr-[13px] bg-[#b1b2ff] border-2 border-[#b1b2ff] text-[15px] font-bold text-center text-white"
          >
            멤버관리
          </button>
          <button
            id="course"
            onClick={GetClick}
            className="w-2/12 rounded-tl-[13px] rounded-tr-[13px] bg-[#b1b2ff] border-2 border-[#b1b2ff] text-[15px] font-bold text-center text-white"
          >
            강좌 관리
          </button>
        </div>
        {/* 태그들 안에 큰 네모 */}

        {/* {{userInformation} === detailData.leadUser.userId ? (
          <div className="p-3 bg-white border border-[#898989]">
            {currentClick === "realtime" ? <NowPlayStudy /> : null}
            {currentClick === "community" ? <StudyMemberCoummunity /> : null}
            {currentClick === "progress" ? <LectureProgressList /> : null}
            {currentClick === "membermanagement" ? <MemberManage /> : null}
            {currentClick === "course" ? <LectureManage /> : null}
          </div>
        ) : (
          <div className="p-3 bg-white border border-[#898989]">
            {currentClick === "realtime" ? <NowPlayStudy /> : null}
            {currentClick === "community" ? <StudyMemberCoummunity /> : null}
            {currentClick === "progress" ? <LectureProgressList /> : null}
          </div>
          
        )} */}
        <div className="p-3 bg-white border border-[#898989]">
            {currentClick === "realtime" ? <NowPlayStudy propData={detailData} state={{user: info, study: {studyId: studyId.study_id}, recent: recentPlayed}}/> : null}
            {currentClick === "community" ? <StudyMemberCoummunity propData={detailData} /> : null}
            {currentClick === "progress" ? <LectureProgressList propData={detailData} state={{user: info, study: {studyId: studyId.study_id}}} /> : null}
            {currentClick === "membermanagement" ? <MemberManage propData={detailData} /> : null}
            {currentClick === "course" ? <LectureManage propData={detailData} /> : null}
          </div>
      </div>
    </div>
  );
}
