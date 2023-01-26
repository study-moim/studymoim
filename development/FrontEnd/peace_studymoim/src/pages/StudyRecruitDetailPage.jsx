import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

export default function StudyRecruitDetailPage(props) {
  const studyId = useParams();
  const detailId = studyId.study_recruit_id;
  // const detailData = useFetch("https://react-a-3b3d0-default-rtdb.firebaseio.com/react/-NMbq6hAfH3ze2XCo5ku.json");
  const detailData = useFetch(
    `https://react-a-3b3d0-default-rtdb.firebaseio.com/react/${detailId}.json`
  );

  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-2.5 pb-5 bg-white">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1193px] text-[40px] font-bold text-center text-black">
            스터디 상세
          </p>
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[1213px] gap-2.5 pl-2.5 pb-2.5 rounded-[20px] bg-white border-[3px] border-[#7b61ff]">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[921px] py-[50px] rounded-[20px]">
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden">
              <div className="flex flex-col justify-start items-start self-stretch flex-grow overflow-hidden gap-2.5 p-2.5">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-2.5">
                  <p className="flex-grow-0 flex-shrink-0 w-[168px] h-9 text-2xl font-bold text-left text-[#7b7474]">
                    시작 예정
                  </p>
                  <p className="flex-grow-0 flex-shrink-0 w-[168px] h-9 text-2xl font-bold text-left text-black">
                    {detailData.startDate}
                  </p>
                </div>
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-2.5">
                  <p className="flex-grow-0 flex-shrink-0 w-[168px] h-9 text-2xl font-bold text-left text-[#7b7474]">
                    완료 예정
                  </p>
                  <p className="flex-grow-0 flex-shrink-0 w-[168px] h-9 text-2xl font-bold text-left text-black">
                    {detailData.dueDate}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow overflow-hidden gap-2.5 p-2.5">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-2.5">
                  <p className="flex-grow-0 flex-shrink-0 w-[168px] h-9 text-2xl font-bold text-left text-[#7b7474]">
                    모집인원
                  </p>
                  <p className="flex-grow-0 flex-shrink-0 w-[168px] h-9 text-2xl font-bold text-left text-black">
                    {detailData.recruitMembers}
                  </p>
                </div>
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-2.5">
                  <p className="flex-grow-0 flex-shrink-0 w-[168px] h-9 text-2xl font-bold text-left text-[#7b7474]">
                    인원 모집 방법
                  </p>
                  <p className="flex-grow-0 flex-shrink-0 w-[168px] h-9 text-2xl font-bold text-left text-black">
                    {detailData.recruitMethod}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[120px] relative overflow-hidden gap-5 px-2.5 py-5">
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[901px] text-3xl font-bold text-left text-black">
                {detailData.title}
              </p>
              <div dangerouslySetInnerHTML={{ __html : detailData.description }} className="self-stretch flex-grow-0 flex-shrink-0 w-[901px] text-xl text-left text-black" />
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
