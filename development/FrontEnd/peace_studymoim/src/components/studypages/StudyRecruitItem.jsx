import { Link, NavLink } from "react-router-dom";

export default function StudyRecruitItem({ props }) {
  const slicedTitle = props.content.substring(0, 18) + "...";
  const firstcourse = props.curricula.map((e) => {
    return e.course.title;
  });
  const IMAGE_ROOT = import.meta.env.VITE_APP_IMAGE_ROOT;
  const image = IMAGE_ROOT + props.leadUser.saveName;

  return (
    <div className="rounded-[15px] border px-5 pt-2 cursor-pointer gap-2 transition ease-in-out duration-300 hover:-translate-y-1.5 hover:shadow-md">
      <Link to={`/study/${props.studyId}`}>
        <div className="font-bold text-[18px] my-3">{props.title.length > 18 ? slicedTitle : props.title}</div>
        <div className="text-[12px] my-3 text-gray-800">
          {/* {props.content > 100 ? slicedContent : props.content} */}
          {/* <div dangerouslySetInnerHTML={{ __html: props.content }}></div> */}
        </div>
        <div className="min-h-[36px] flex flex-col justify-start items-start pb-2 border-b">
          <p className="text-[12px]">
            참가인원: {props.userGathered} / {props.userLimit} 명
          </p>
          <p className="text-[12px]">{props.startTime} 시작 예정</p>
          {props.curricula.length ? (
            <p className=" text-[12px]">
              {" "}
              {firstcourse[0]} 외 {props.curricula.length - 1}개 강좌{" "}
            </p>
          ) : (
            <p className=" text-[12px]"> 등록된 강좌가 없음 </p>
          )}
        </div>
      </Link>
      <NavLink
        to={`/mypage/${props.leadUser.userId}`}
        className="hover:text-[#989aff] flex justify-end items-center gap-2 py-2"
      >
        <img
          className="w-8 rounded-full border"
          src={props.leadUser.saveName ? image : "/logo.png"}
        />
        <span className="text-[12px] font-bold">{props.leadUser.nickname}</span>
      </NavLink>
    </div>
  );
}
