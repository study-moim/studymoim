import { NavLink } from "react-router-dom";

export default function StudyIntroduceBanner({ propData }) {
  return (
    <div className="w-full flex justify-start items-center relative gap-10 border borer-2">
      <div className="flex flex-col justify-start items-start w-5/12 h-[212px] relative gap-10 px-[9px] py-[39.47999954223633px]">
        <p className=" text-2xl font-bold text-left">
          {propData && propData.title}
        </p>
        <p className=" text-xl text-left">
          {propData.content && propData.content}
        </p>
      </div>

      <div className="flex flex-col justify-start items-start gap-10">
        <div className="flex w-full justify-start items-center relative gap-[15px]">
          <p className=" text-2xl font-bold text-left">스터디장</p>

          {propData.leadUser && (
            <NavLink
              to={`/mypage/${propData.leadUser.userId}`}
              className="hover:text-[#989aff]"
            >
              <div className="px-2.5 ext-[15px] font-bold">
                {propData.leadUser.nickname}
              </div>
            </NavLink>
          )}
        </div>

        <div className="flex w-full justify-start items-center relative gap-[15px]">
          <p className=" text-2xl font-bold text-left">스터디원</p>

          {propData.members &&
            propData.members.map((member) => {
              return (
                <NavLink
                  to={`/mypage/${member.userId}`}
                  className="hover:text-[#989aff]"
                >
                  <div className="px-2.5 ext-[15px] font-bold">
                    {member.nickname}
                  </div>
                </NavLink>
              );
            })}
        </div>
      </div>
    </div>
  );
}
