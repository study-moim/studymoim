import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Backdrop from "../components/overall/Backdrop";
import StudyRecruitModalNotOpen from "../components/studypages/StudyRecruitModalNotOpen";
import StudyRecruitModalOpen from "../components/studypages/StudyRecruitModalOpen";
import MainCourse from "../components/mainpages/MainCourse";
export default function StudyRecruitDetailPage(props) {
  const [showOpenModal, setShowOpenModal] = useState(false);
  const [showNotOpenModal, setShowNotOpenModal] = useState(false);

  const studyId = useParams();

  const detailId = studyId.study_recruit_id;
  const detailData = useFetch(`http:///${API_SERVER}/api/v1/study/${detailId}`);
  console.log(detailData);
  function closeModalHandler() {
    if (detailData.public) {
      setShowNotOpenModal(false);
    } else {
      setShowOpenModal(false);
    }
  }

  function acceptHandler() {
    if (!detailData.public) {
      setShowNotOpenModal(true);
    } else {
      setShowOpenModal(true);
    }
  }

  return (
    <>
      <div className="max-w-6xl mx-auto px-4">
        {/* Banner 부분  */}
        <div className="flex justify-around items-center relative bg-[#d2daff] mb-10">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-1/2 h-[214px] relative gap-2.5 py-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-[50px] font-bold text-left text-black">
                {detailData.title}
              </p>
            </div>
            <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 h-[168px] w-full gap-2.5 py-2.5">
              <div
                className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative pl-[65px] pr-[66.046875px] py-[22px] rounded-[15px] bg-[#ff6d2c] border-2 border-[#2e2f35]"
                style={{ boxShadow: "3px 3px 0px 0 #2e2f35" }}
              >
                {/* TODO: 이거 누르면 modal 창!  */}
                {/* 방장이면 수정 버튼으로 나머지 사람들은 스터디 신청으로 바뀌게..?  */}
                <button
                  onClick={acceptHandler}
                  className="text-xl font-bold text-center uppercase text-white"
                >
                  스터디 신청
                </button>
              </div>
              <Link to={"update"}>
                <button className="text-xl font-bold text-center uppercase text-white">
                  수정하기(임시버튼)
                </button>
              </Link>
            </div>
          </div>
          <img
            src={detailData.saveName}
            className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-3/4 w-2/5 relative gap-2.5 p-2.5"
          />
        </div>

        {/* 스터디 정보 부분  */}
        <div className="flex flex-col justify-start items-center relative gap-5">
          <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left">
            스터디 모집 상세
          </p>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-5 pl-5 pr-3 py-4 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>

                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                  <p className="flex-grow-0 flex-shrink-0 text-ml font-bold text-left uppercase text-[#2f343a]">
                    시작예정일
                  </p>
                  <p className="flex-grow-0 flex-shrink-0 w-[236px] text-xs text-left text-[#2f343a]">
                    {detailData.startTime}
                  </p>
                </div>
              </div>

              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 pt-2">
                <svg
                  width={2}
                  height={80}
                  viewBox="0 0 2 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="none"
                >
                  <path d="M1 0V80" stroke="#E9EAED" />
                </svg>
              </div>

              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5 pl-5 pr-3 py-4 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                  <p className="flex-grow-0 flex-shrink-0 text-ml font-bold text-left uppercase text-[#2f343a]">
                    모집현황
                  </p>
                  {detailData.close ? (
                    <p className="flex-grow-0 flex-shrink-0 w-[236px] text-xs text-left text-[#2f343a]">
                      모집완료
                    </p>
                  ) : (
                    <p className="flex-grow-0 flex-shrink-0 w-[236px] text-xs text-left text-[#2f343a]">
                      모집중
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-5 pl-5 pr-3 py-4 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>

                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left uppercase text-[#2f343a]">
                    모집인원
                  </p>
                  <p className="flex-grow-0 flex-shrink-0 w-[236px] text-xs text-left text-[#2f343a]">
                    {detailData.userLimit}
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 pt-2">
                <svg
                  width={2}
                  height={80}
                  viewBox="0 0 2 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="none"
                >
                  <path d="M1 0V80" stroke="#E9EAED" />
                </svg>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5 pl-5 pr-3 py-4 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left uppercase text-[#2f343a]">
                    인원 모집 방법
                  </p>
                  {detailData.public ? (
                    <p className="flex-grow-0 flex-shrink-0 w-[236px] text-xs text-left text-[#2f343a]">
                      공개
                    </p>
                  ) : (
                    <p className="flex-grow-0 flex-shrink-0 w-[236px] text-xs text-left text-[#2f343a]">
                      수락
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div dangerouslySetInnerHTML={{ __html: detailData.content }}></div>
          </div>
          <div className="flex flex-col justify-start items-center relative gap-9">
            <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left">
              커리큘럼
            </p>
            {/* TODO: 커리큘럼은 강의 추가가 되면 하는 걸로!  */}
            <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-full gap-2.5 pl-2.5 pb-2.5 rounded-[20px] bg-white border-[3px] border-[#7b61ff]">
              {detailData.curricula &&
                detailData.curricula.map((item) => {

                  return (
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-10/12 relative gap-1.5">
                      <div className="flex-grow-0 flex-shrink-0 w-[412px] h-[220px] relative">
                        <img
                          src={item.course.thumbnail}
                          className="w-[418px] h-[226px] absolute left-[-7px] top-[-1px] object-none"
                        />
                        <div className="flex flex-col justify-start items-center absolute left-[263.88px] top-[-0.88px] px-[45px] py-[70px] bg-black/[0.67]">
                          <p className="flex-grow-0 flex-shrink-0 text-3xl font-bold text-left text-white">
                            {item.course.lectures.length}
                          </p>
                          <svg
                            width={46}
                            height={46}
                            viewBox="0 0 46 46"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0 w-[45px] h-[45px] relative"
                            preserveAspectRatio="xMidYMid meet"
                          >
                            <path
                              d="M25.6963 16.0596H5.07129V19.8096H25.6963V16.0596Z"
                              fill="white"
                            />
                            <path
                              d="M25.6963 8.55957H5.07129V12.3096H25.6963V8.55957Z"
                              fill="white"
                            />
                            <path
                              d="M18.1963 23.5596H5.07129V27.3096H18.1963V23.5596Z"
                              fill="white"
                            />
                            <path
                              d="M29.4463 21.6846V36.6846L40.6963 29.1846L29.4463 21.6846Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>

                      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[219px] w-3/12 relative gap-1.5">
                        <p className="flex-grow-0 flex-shrink-0 w-[435.98px] h-[41.32px] text-[34px] font-bold text-left text-black">
                          {item.course.title}
                        </p>
                        <p className="flex-grow-0 flex-shrink-0 w-[172.07px] text-xl text-left text-[#bd6ffc]">
                          {item.course.providerChannelName}
                        </p>
                        <p className="flex-grow-0 flex-shrink-0 w-[162.57px] text-xl text-left text-[#b1b2ff]">
                          강의 수: {item.course.lectures.length}개
                        </p>
                        <svg
                          width={53}
                          height={54}
                          viewBox="0 0 53 54"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M47.6445 6.42036C46.4228 5.01898 44.9722 3.9073 43.3757 3.14884C41.7791 2.39038 40.0679 2 38.3397 2C36.6115 2 34.9003 2.39038 33.3037 3.14884C31.7072 3.9073 30.2566 5.01898 29.0349 6.42036L26.4994 9.32737L23.9639 6.42036C21.4961 3.59099 18.149 2.00147 14.659 2.00147C11.169 2.00147 7.82198 3.59099 5.35419 6.42036C2.88639 9.24973 1.5 13.0872 1.5 17.0885C1.5 21.0899 2.88639 24.9273 5.35419 27.7567L7.88969 30.6637L26.4994 52L45.109 30.6637L47.6445 27.7567C48.8668 26.356 49.8364 24.6928 50.498 22.8624C51.1595 21.0319 51.5 19.0699 51.5 17.0885C51.5 15.1071 51.1595 13.1452 50.498 11.3147C49.8364 9.4842 48.8668 7.82109 47.6445 6.42036Z"
                            stroke="#9A9A9A"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {showOpenModal ? (
            <StudyRecruitModalOpen
              onCancel={closeModalHandler}
              onConfirm={closeModalHandler}
            />
          ) : null}
          {showOpenModal ? <Backdrop onCancel={closeModalHandler} /> : null}

          {showNotOpenModal ? (
            <StudyRecruitModalNotOpen onCancel={closeModalHandler} />
          ) : null}

          {showNotOpenModal ? <Backdrop onCancel={closeModalHandler} /> : null}
        </div>
      </div>
    </>
  );
}
