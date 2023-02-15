import useFetch from "../../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faUser } from "@fortawesome/free-solid-svg-icons";

export default function MemberManage({ propData }) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const requestMembers = useFetch(
    `http://${API_SERVER}/api/v1/study/${propData.studyId}/request`
  );

  const IMAGE_ROOT = import.meta.env.VITE_APP_IMAGE_ROOT;
  const leaderImage = IMAGE_ROOT + propData.leadUser.saveName;
  return (
    <>
      <div className="flex w-full flex-col justify-start items-start p-[40px]">
        <p className="w-full text-[20px] font-bold pb-3 border-b mb-5">
          스터디원 총 {propData.members.length + 1}명
        </p>
        <div className="flex">
          <div className="flex flex-col items-center pr-8 mr-8 gap-2 broder border-r">
            <img
              src={propData.leadUser.saveName ? leaderImage : "/logo.png"}
              alt=""
              className="w-24 rounded-full border"
            />
            <p className="text-[16px] font-bold">
              {propData.leadUser.nickname}
            </p>
          </div>
          <div>
            <div className="flex gap-7">
              {propData.members &&
                propData.members.map((member) => {
                  return (
                    <div
                      key={member.userId}
                      className="flex flex-col items-center gap-2"
                    >
                      <img
                        src={
                          member.saveName
                            ? IMAGE_ROOT + member.saveName
                            : "/logo.png"
                        }
                        alt=""
                        className="w-24 rounded-full border"
                      />
                      <p className="text-[16px]">{member.nickname}</p>

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
                        className="text-[15px] text-red-600 hover:bg-red-600 hover:text-white border px-6  rounded-md border-red-600"
                      >
                        강퇴
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div>
        {!propData.public ? (
          <div className="flex w-full flex-col justify-start items-start p-[40px]">
            <p className="w-full text-[20px] font-bold pb-3 border-b mb-5">
              {" "}
              새로운 신청 총 {requestMembers.length}명
            </p>

            {requestMembers.map((member) => {
              return (
                <div
                  key={member.requestId}
                  className="flex w-full h-1/12 relative gap-5 p-5"
                >
                  <div className="flex flex-col gap-2 w-2/12 items-center justify-start">
                    {member.user.saveName ? (
                      <img
                        className="rounded-full w-24 border"
                        src={member.user.saveName}
                      />
                    ) : (
                      <img
                        className="rounded-full w-24 border"
                        src="/logo.png"
                      />
                    )}

                    <p className="text-[16px]">
                      {member.user.nickname}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 h-full w-8/12 mr-5">
                    <p className="text-[16px] w-full border-b py-2">
                      <b>{member.user.nickname}</b>님의 신청 메시지
                    </p>
                    <p className="text-[16px] font-bold w-full min-h-full break-all whitespace-pre-wrap font-sans rounded-md py-1">
                      {member.content}
                    </p>
                  </div>

                  {/* // requestStatus -수락 1, 거절 2  */}
                  <div className="w-2/12 flex flex-col gap-2 justify-center">
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
                      className="w-full px-4 py-2 rounded-md border border-[#ad9dfe] text-[#ad9dfe] text-[15px] text-center hover:text-white hover:bg-[#989aff]"
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
                      className="w-full px-4 py-2 text-[15px] text-red-600 hover:bg-red-600 hover:text-white border rounded-md border-red-600"
                    >
                      거절
                    </button>
                  </div>
                </div>
              );
            })}
            {/* </div> */}
          </div>
        ) : null}
      </div>
    </>
  );
}
