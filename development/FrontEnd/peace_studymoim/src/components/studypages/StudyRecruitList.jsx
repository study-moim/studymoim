import StudyRecruitItem from "./StudyRecruitItem";

export default function StudyRecruitList(props) {
  return (
    <div>
      {props.recruits.map((recruit) => (
        <div className="cursor-pointer hover:scale-105 w-11/12 ml-6">
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
        </div>
      ))}
    </div>
  );
}
