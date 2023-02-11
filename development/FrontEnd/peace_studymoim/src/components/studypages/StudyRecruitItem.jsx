import { Link, NavLink } from "react-router-dom";

export default function StudyRecruitItem({ props }) {
  const slicedContent = props.content.substring(0, 100) + "...";
  const firstcourse = props.curricula.map((e) => {
    return e.course.title;
  });

  return (
    <div className="rounded-[15px] border px-5 py-2 cursor-pointer gap-2 transition ease-in-out duration-300 hover:-translate-y-1.5 hover:shadow-md">
      <Link to={`/study/${props.studyId}`}>
        <div className="font-bold text-[18px] my-3">{props.title}</div>
        <div className="text-[12px] my-3 text-gray-800">
          {/* {props.content > 100 ? slicedContent : props.content} */}
          {/* <div dangerouslySetInnerHTML={{ __html: props.content }}></div> */}
        </div>
        <div className="flex flex-col justify-start items-start pb-2 border-b">
          <p className="text-[12px]">
            참가인원: {props.userGathered} / {props.userLimit} 명
          </p>
          <p className="text-[12px]">{props.startTime} 시작 예정</p>
            {props.curricula.length ? 
            <p className=" text-[12px]"> {firstcourse[0]} 외 {props.curricula.length - 1}개 강좌 </p> 
          : <p className=" text-[12px]"> 등록된 강좌가 없음 </p> }
            
        </div>
      </Link>
      <NavLink
        to={`/mypage/${props.leadUser.userId}`}
        className="hover:text-[#989aff]"
      >
        <span className="text-[12px] font-bold py-3 text-left">
          {props.leadUser.nickname}
        </span>
      </NavLink>
    </div>
  );
}