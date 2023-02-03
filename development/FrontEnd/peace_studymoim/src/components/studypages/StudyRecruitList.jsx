import StudyRecruitItem from "./StudyRecruitItem";

export default function StudyRecruitList(props) {
  return (
    <div>
      {props.recruits.map((recruit) => (
        <div className="cursor-pointer hover:scale-105 w-11/12 ml-6">
          <StudyRecruitItem
            key={recruit.studyId}
            id={recruit.studyId}
            userLimit={recruit.userLimit}
            startTime={recruit.startTime}
            public={recruit.public}
            saveName={recruit.saveName}
            title={recruit.title}
            content={recruit.content}
          />
        </div>
      ))}
    </div>
  );
}

