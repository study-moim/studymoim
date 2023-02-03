import StudyRecruitItem from "./StudyRecruitItem";

export default function StudyRecruitList(props) {
  return (
    <div className="w-full">
      {props.recruits.map((recruit) => (
        <div className="cursor-pointer hover:scale-105 w-11/12 ml-6">
          <StudyRecruitItem
            key={recruit.studyId}
            studyId={recruit.studyId}
            userLimit={recruit.userLimit}
            startTime={recruit.startTime}
            public={recruit.public}
            saveName={recruit.saveName}
            title={recruit.title}
            userGathered={recruit.userGathered} 
            notice={recruit.notice}
            finished={recruit.finished}
            close={recruit.close} 
          />
        </div>
      ))}
    </div>
  );
}

