import LectureProgress from "./LectureProgress";

export default function LectureProgressList(props) {
  return (
    <div className="flex flex-col justify-start items-center w-full h-[1275px] relative overflow-hidden gap-5 p-[50px]">
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[272px] h-[51px] relative gap-[21px] border-t-0 border-r-0 border-b-[0.3px] border-l-0 border-black">
        <p className="flex-grow w-[272px] h-[31px] text-2xl font-bold text-center text-black">
          수강중인 강좌
        </p>
      </div>
      <LectureProgress curricula={props.propData.curricula} state={props.state}/>
    </div>
  );
}
