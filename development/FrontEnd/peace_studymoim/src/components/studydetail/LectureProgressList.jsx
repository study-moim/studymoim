import LectureProgress from "./LectureProgress";

export default function LectureProgressList(props) { 

  return (
    <div className="flex flex-col justify-start items-center w-full h-fit relative overflow-hidden gap-5 p-[50px]">
      <LectureProgress curricula={props.propData.curricula} state={props.state} live={props.live}/> 
    </div>
  );
}
