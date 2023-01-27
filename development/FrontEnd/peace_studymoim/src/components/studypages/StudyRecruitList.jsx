import StudyRecruitItem from "./StudyRecruitItem";

export default function StudyRecruitList(props) {
  return (
    <div>
      <ul className="flex flex-col justify-start items-start gap-[47px]">
      {props.recruits.map((recruit) => (
        <StudyRecruitItem
          key={recruit.id}
          id={recruit.id}
          recruitMembers={recruit.recruitMembers}
          startDate={recruit.startDate}
          recruitMethod={recruit.recruitMethod}
          dueDate={recruit.dueDate}
          studyImg={recruit.studyImg}
          title={recruit.title}
          description={recruit.description}   
        />
      ))}
    </ul>
    </div>
  );
}
