import StudyNotice from "../components/studydetail/StudyNotice";
import StudyIntroduceBanner from "../components/studydetail/StudyIntroduceBanner";
import { useState, useEffect } from "react";
import NowPlayStudy from "../components/studydetail/NowPlayStudy";
import StudyMemberCoummunity from "../components/studydetail/StudyMemberCommunity";
import LectureProgressList from "../components/studydetail/LectureProgressList";
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
  const [detailData, setDetailData] = useState([]);
  const [userList, setUserList] = useState([]);
  const [curriculum, setCurriculum] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await fetch(`http:///${API_SERVER}/api/v1/study/${studyId.study_id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetailData(data);
        setUserList(data.leadUser);
        setCurriculum(data.curricula);
      });
  };

  const recentPlayed = useFetch(
    `http://${API_SERVER}/api/v1/study/${studyId.study_id}/live/recent`
  );

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
      <StudyIntroduceBanner
        propData={detailData}
        props={userList}
        userInfo={userInformation}
        curriculum={curriculum}  
      />
      <StudyNotice
        propData={detailData}
        props={userList}
        userInfo={userInformation}
      />

      <div className="flex flex-col w-full mt-10">
        {info.userId === userList.userId ? (
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
          </div>
        ) : (
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
          </div>
        )}

        {info.userId === userList.userId ? (
          <div className="p-3 bg-white border border-[#898989]">
            {currentClick === "realtime" ? (
              <NowPlayStudy
                propData={detailData}
                state={{
                  user: info,
                  study: { studyId: studyId.study_id },
                  recent: recentPlayed,
                }}
              />
            ) : null}
            {currentClick === "community" ? (
              <StudyMemberCoummunity propData={detailData} />
            ) : null}
            {currentClick === "progress" ? (
              <LectureProgressList
                propData={detailData}
                state={{ user: info, study: { studyId: studyId.study_id } }}
              />
            ) : null}
            {currentClick === "membermanagement" ? (
              <MemberManage propData={detailData} />
            ) : null}
          </div>
        ) : (
          <div className="p-3 bg-white border border-[#898989]">
            {currentClick === "realtime" ? (
              <NowPlayStudy
                propData={detailData}
                state={{
                  user: info,
                  study: { studyId: studyId.study_id },
                  recent: recentPlayed,
                }}
              />
            ) : null}
            {currentClick === "community" ? (
              <StudyMemberCoummunity propData={detailData} />
            ) : null}
            {currentClick === "progress" ? (
              <LectureProgressList
                propData={detailData}
                state={{ user: info, study: { studyId: studyId.study_id } }}
              />
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
