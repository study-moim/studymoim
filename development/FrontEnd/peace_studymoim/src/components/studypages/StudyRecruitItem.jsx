import { Link, NavLink } from "react-router-dom";

export default function StudyRecruitItem({ props }) {
  const slicedContent = props.content.substring(0, 100) + "...";
  const firstcourse = props.curricula.map((e) => {
    return e.course.title;
  });

  return (
    <Link to={`/study/${props.studyId}`} className="w-full hover:bg-gray-100">
      <p></p>
      <div className="mx-10 my-5 border-b">
        <div className="font-bold text-[18px] my-3">{props.title}</div>
        <div className="text-[12px] my-3 text-gray-800">
          {props.content > 100 ? slicedContent : props.content}
          {/* <div dangerouslySetInnerHTML={{ __html: props.content }}></div> */}
        </div>
        <div className="flex flex-row justify-start items-center gap-[30px] pb-5">
          {/* <img
            className="w-[50px] h-[50px] object-cover rounded-full"
            src={
              props.leadUser.saveName ? props.leadUser.saveName : "/logo.png"
            }
          /> */}
          <NavLink
            to={`/mypage/${props.leadUser.userId}`}
            className="hover:text-[#989aff]"
          >
            <div className="px-2.5 ext-[15px] font-bold">
              {props.leadUser.nickname}
            </div>
          </NavLink>
          <p className="text-[12px] font-bold text-center text-gray-500">
            참가인원: {props.userGathered} / {props.userLimit} 명
          </p>
          <p className="text-[12px] font-bold text-center text-gray-500">
            {props.startTime} 시작 예정
          </p>
          <p className=" text-[15px] font-bold text-center text-black">|</p>
          <p className=" text-[15px] font-bold text-center text-black">
            {firstcourse[0]} 외 {props.curricula.length - 1}개 강의
          </p>
        </div>
      </div>
    </Link>
  );
}
