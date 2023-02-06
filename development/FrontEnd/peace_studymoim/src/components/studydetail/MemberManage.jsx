import useFetch from "../../hooks/useFetch";

export default function MemberManage({ propData }) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const requestMembers = useFetch(
    `http://${API_SERVER}/api/v1/study/${propData.studyId}/request`)
  console.log(requestMembers) 
  return (
    <>
      <div className="flex w-full flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-[53px] px-[73px] py-[50px]">
        <div className="flex w-full justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative p-2.5">
          <p className="flex-grow-0 flex-shrink-0 text-2xl text-left">
            스터디원 관리
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-2xl text-left">
            총 {propData.members.length + 1}명
          </p>
        </div>

        <div className="grid grid-cols-2 p-2.5">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-5">
            <p className="flex-grow-0 flex-shrink-0 text-[30px] text-left text-black">
              {propData.leadUser.nickname}
            </p>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[93px] h-[67px] gap-2.5 p-2.5 rounded-[20px] bg-[url('frame-1688.png')] bg-contain bg-no-repeat bg-center" />
          </div>

          {propData.members &&
            propData.members.map((member) => {
              return (
                <div
                  key={member.userId}
                  className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-5"
                >
                  <p className="flex-grow-0 flex-shrink-0 text-[30px] text-left text-black">
                    {member.nickname}
                  </p>
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 rounded-[20px] bg-[#b1b2ff]">
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
                </div>
              );
            })}
        </div>

        {/*  TODO: 공개는 신청회원이 필요없음!  */}
        {!propData.public ? (
          <div>
            <div className="flex w-full justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative p-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-2xl text-left">
                신청회원
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-4xl text-left">
                총 1명
              </p>
            </div>

            <div className="flex justify-around items-center flex-grow-0 flex-shrink-0 w-full h-1/12 relative gap-[5px] p-5 rounded-[20px] border-2 border-black">
              {/* <img
                className="flex-grow-0 flex-shrink-0 w-2/12"
                src="logo.png"
              /> */}
              <p className="flex-grow-0 flex-shrink-0 w-2/12 text-4xl font-bold text-center text-black">
                닉네임
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-[32px] w-6/12 text-center text-black  bg-[#eef1ff]/[0.98] ">
                그냥 가입시켜주셈ㅋ
              </p>
              <button className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-white gap-2.5 p-2.5 rounded-[10px] bg-[#bd6ffc]">
                수락
              </button>
              <button className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-white gap-2.5 p-2.5 rounded-[10px] bg-[#f24e1e]">
                거절
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
