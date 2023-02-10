import useFetch from "../../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

export default function MemberManage({ propData }) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const requestMembers = useFetch(
    `http://${API_SERVER}/api/v1/study/${propData.studyId}/request`
  );
  const IMAGE_ROOT = import.meta.env.VITE_APP_IMAGE_ROOT;
  const leaderImage = IMAGE_ROOT + propData.leadUser.saveName;

  return (
    <>
      <div className="flex w-full flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[53px] px-[73px] py-[50px]">
        <div className="flex w-full justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative p-2.5">
          <p className="flex-grow-0 flex-shrink-0 text-2xl text-left">
            스터디원 관리
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-2xl text-left">
            총 {propData.members.length + 1}명
          </p>
        </div>

        <div className="flex justify-start"> 
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
          <img src={leaderImage} alt="" className="w-10 rounded-full" />
          <p className="flex-grow-0 flex-shrink-0 text-[25px] text-left text-black">
            {propData.leadUser.nickname}
          </p>
          <FontAwesomeIcon icon={faCrown} className="text-2xl" />
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[93px] h-[67px] gap-2.5 p-2.5 rounded-[20px] bg-contain bg-no-repeat bg-center" />
        </div>

        {propData.members &&
          propData.members.map((member) => {
            return (
              <div
                key={member.userId}
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-5"
              >
                <img src={IMAGE_ROOT + member.saveName} alt="" />
                <p className="flex-grow-0 flex-shrink-0 text-[30px] text-left text-black">
                  {member.nickname}
                </p>

                <button
                  onClick={() =>
                    fetch(
                      `http://${API_SERVER}/api/v1/study/${propData.studyId}/ban/${member.userId}`,
                      {
                        method: "PUT",
                        headers: {
                          "Content-Type": "application/json",
                        },
                      }
                    ).then((res) => {
                      if (res.ok) {
                        location.reload();
                      }
                    })
                  }
                  className="flex-grow-0 flex-shrink-0 text-[20px] text-left text-white"
                >
                  탈퇴
                </button>
              </div>
            );
          })}
        </div>
        

        {!propData.public ? (
          <div className="w-full">
            <div className="flex w-full justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative p-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-2xl text-left">
                신청회원 
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-2xl text-left">
                총 {requestMembers.length}명
              </p>
             </div>
         

            <div className="flex justify-around items-center flex-grow-0 flex-shrink-0 w-full h-1/12 relative gap-[5px] p-5 bg-[#ebefff]">
            {requestMembers.map((member) => {
                return (
                  <div key={member.requestId}>
                    <img className="flex-grow-0 flex-shrink-0 rounded-full w-10" src="" />
                    <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-center">
                      {member.user.nickname}
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 text-ml w-8/12 text-center bg-[#eef1ff]/[0.98] ">
                      {member.content}
                    </p>

                    {/* // requestStatus -수락 1, 거절 2  */}
                    <button
                      onClick={() =>
                        fetch(
                          `http://${API_SERVER}/api/v1/study/${propData.studyId}/request/${member.requestId}`,
                          {
                            method: "PUT",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                              userId: member.user.userId,
                              requestStatus: 1,
                            }),
                          }
                        ).then((res) => {
                          if (res.ok) {
                            location.reload();
                          }
                        })
                      }
                      className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-white gap-2.5 p-2.5 rounded-[10px]  bg-[#b1b2ff]"
                    >
                      수락
                    </button>
                    <button
                      onClick={() =>
                        fetch(
                          `http://${API_SERVER}/api/v1/study/${propData.studyId}/request/${member.requestId}`,
                          {
                            method: "PUT",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                              userId: member.user.userId,
                              requestStatus: 2,
                            }),
                          }
                        ).then((res) => {
                          if (res.ok) {
                            location.reload();
                          }
                        })
                      }
                      className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-white gap-2.5 p-2.5 rounded-[10px]  bg-[#ff7262]"
                    >
                      거절
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
