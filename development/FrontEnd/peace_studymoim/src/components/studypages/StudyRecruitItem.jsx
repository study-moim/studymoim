import { Link } from "react-router-dom";

export default function StudyRecruitItem(props) {
  return (
    <>
      <Link
        to={`/study/${props.id}`}
        className="my-[20px] flex flex-row gap-5 pl-[42px] pr-[29px] py-[20px] bg-white border-t-0 border-r-0 border-b-4 border-l-[11px] border-[#eef1ff]/[0.98] justify-evenly"
      > 
      <div className="flex flex-col justify-center w-8/12">
          <div className="border-t-0 border-r-0 border-b-[0.3px] border-l-0 border-black text-[22px] font-bold text-left text-black mb-4">
            {props.title}
          </div>
          <p className="text-[16px] text-left  text-[#898989]">
            {/* TODO: 등록강좌 하나만 불러오고 나머지는 등록강좌의 개수로 알려주자  */}
            등록강좌: 피그마 뿌셔뿌셔 및 2개 
          </p>
          <p className="text-[16px] text-left text-[#898989]">
            <div dangerouslySetInnerHTML={{ __html: props.description}}></div>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3.5 py-[3.5px]">
          {/* TODO: 나중에 며칠 남았는 지 알려주면 좋을듯?? 추추추추추후에  */}
          <p className="text-[12px] font-bold text-center text-[#898989]">
            참가인원: {props.recruitMembers}
          </p> 
          <p className="text-[12px] font-bold text-center text-[#898989]">
            {props.startDate} 시작 예정 
          </p>
        </div>
      </Link>
    </>
  );
}