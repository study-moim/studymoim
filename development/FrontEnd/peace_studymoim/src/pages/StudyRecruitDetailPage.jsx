import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function StudyRecruitDetailPage(props) {
  const studyId = useParams();
  const detailId = studyId.study_recruit_id;
  const detailData = useFetch(
    `https://react-a-3b3d0-default-rtdb.firebaseio.com/react/${detailId}.json`
  );

  function acceptHandler() {}

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
              <Link to={'update'}>
                <button className="text-xl font-bold text-center uppercase text-white">
                  수정하기(임시버튼)
                </button>
              </Link>
            </div>
          </div>
          <img
            src={detailData.studyImg}
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
                    {detailData.startDate}
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
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left uppercase text-[#2f343a]">
                    종료 예정일
                  </p>
                  {detailData.dueDate ? (
                    <p className="flex-grow-0 flex-shrink-0 w-[236px] text-xs text-left text-[#2f343a]">
                      {detailData.dueDate}
                    </p>
                  ) : (
                    <p className="flex-grow-0 flex-shrink-0 w-[236px] text-xs text-left text-[#2f343a]">
                      기간미정
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
                    {detailData.recruitMembers}명
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
                  <p className="flex-grow-0 flex-shrink-0 w-[236px] text-xs text-left text-[#2f343a]">
                    {detailData.recruitMethod}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              dangerouslySetInnerHTML={{ __html: detailData.description }}
            ></div>
          </div>
          <div className="flex flex-col justify-start items-center relative gap-9">
            <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left">
              커리큘럼
            </p>
            {/* TODO: 커리큘럼은 강의 추가가 되면 하는 걸로!  */}
            {/* <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-full gap-2.5 pl-2.5 pb-2.5 rounded-[20px] bg-white border-[3px] border-[#7b61ff]">
              <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[921px] gap-[30px] p-[50px] rounded-[20px]">
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
