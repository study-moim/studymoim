import { Link } from "react-router-dom";

export default function StudyRecruitItem({ props }) {
  const slicedContent = props.content.substring(0, 100) + "...";
  const firstcourse = props.curricula.map((e) => {
    return e.course.title;
  });
  console.log(props);
  return (
    <Link to={`/study/${props.studyId}`} className="w-full hover:bg-gray-100">
      {/* {
        <img
          src={props.saveName ? props.saveName : "logo.png"}
          dd
          className="w-[60px] h-[60px] object-cover ml-4"
        />
      } */}
      <div className="mx-10 my-5 border-b">
        <div className="font-bold text-[18px] my-3">{props.title}</div>
        <div className="text-[12px] my-3 text-gray-800">
          {props.content > 100 ? slicedContent : props.content}
          {/* <div dangerouslySetInnerHTML={{ __html: props.content }}></div> */}
        </div>
        <div className="flex flex-row items-center gap-[30px] pb-5">
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
