import { Link, NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import userInfo from "../../zustand/store";

export default function StudyListItem({ propData }) {
  const firstcourse = propData.curricula.map((e) => {
    return e.course.title;
  });
  const IMAGE_ROOT = import.meta.env.VITE_APP_IMAGE_ROOT;
  const image = IMAGE_ROOT + propData.leadUser.saveName;
  const userId = useParams();
  const { info } = userInfo();
 
  return (
    <>
      <div className="flex-grow-1 flex-shrink-0 rounded-[15px] border px-5 py-2 cursor-pointer gap-2 transition ease-in-out duration-300 hover:-translate-y-1.5 hover:shadow-md ">
        {info.userId == userId.user_id ? (
          <Link
            to={`/studyDetail/${propData.studyId}`}
            state={{
              propData: propData,
            }}
            // className="min-w-[31%] max-w-[31%]"
          >
            <div className="font-bold text-[18px] my-3 truncate">
              {propData.title}
            </div>
            <div className="flex flex-col justify-start items-start pb-2 border-b truncate">
              <p className="text-[12px]">
                참가인원: {propData.userGathered} / {propData.userLimit} 명
              </p>
              <p className="text-[12px] truncate">{propData.startTime} 시작</p>
              {propData.curricula.length ? (
                <p className="min-h-[36px] text-[12px] truncate">
                  {firstcourse[0]} 외 {propData.curricula.length - 1}개 강좌
                </p>
              ) : (
                <p className="min-h-[36px] text-[12px] truncate">
                  {" "}
                  등록된 강좌가 없음{" "}
                </p>
              )}
            </div>
          </Link>
        ) : (
          <div>
            <div className="font-bold text-[18px] my-3 truncate">
              {propData.title}
            </div>
            <div className="flex flex-col justify-start items-start pb-2 border-b truncate">
              <p className="text-[12px]">
                참가인원: {propData.userGathered} / {propData.userLimit} 명
              </p>
              <p className="text-[12px] truncate">{propData.startTime} 시작</p>
              {propData.curricula.length ? (
                <p className="min-h-[36px] text-[12px] truncate">
                  {firstcourse[0]} 외 {propData.curricula.length - 1}개 강좌
                </p>
              ) : (
                <p className="min-h-[36px] text-[12px] truncate">
                  {" "}
                  등록된 강좌가 없음{" "}
                </p>
              )}
            </div>
          </div>
        )}

        <NavLink
          to={`/mypage/${propData.leadUser.userId}`}
          className="hover:text-[#989aff] flex gap-3 justify-end items-center pt-2"
        >
          <p className="text-[12px] font-bold py-3 text-right">
            {propData.leadUser.nickname}
          </p>
          <img
            className="rounded-full border w-[30px] h-[30px]"
            src={propData.leadUser.saveName ? image : "/logo.png"}
          />
        </NavLink>
      </div>
    </>
  );
}
