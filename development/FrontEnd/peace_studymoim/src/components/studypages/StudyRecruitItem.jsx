import { Link } from "react-router-dom";

export default function StudyRecruitItem(props) {
  return ( 
    <Link to={`/study/${props.id}`} className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[187px] w-[1111px] relative gap-5 pl-[42px] pr-[29px] py-[35px] bg-white border-t-0 border-r-0 border-b-4 border-l-[11px] border-[#eef1ff]/[0.98] cursor-pointer hover:scale-105">
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[1054px] h-[58px] gap-[21px] border-t-0 border-r-0 border-b-[0.3px] border-l-0 border-black">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[58px] w-[830px]">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
            <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-black">
              {props.title}
            </p>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3.5">
            <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-[#898989]">
              등록 강좌 : linux 및 2개
            </p>
            <div className="flex-grow-0 flex-shrink-0 w-[100px] h-[100px] relative overflow-hidden" />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[58px] w-[182px]">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
            <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-center text-black">
              {props.startDate} 예정
            </p>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3.5">
            <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-[#898989]">
              참가인원 : {props.recruitMembers} 
            </p>
          </div>
        </div>
      </div>
      <p className="flex-grow-0 flex-shrink-0 w-[1040px] h-[53px] text-xl text-left text-black">
        <span className="flex-grow-0 flex-shrink-0 w-[1040px] h-[53px] text-xl text-left text-black">
          {props.description}
        </span>
      </p>
    </Link>
  );
}
