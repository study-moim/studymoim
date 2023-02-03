import StudyRecruitItem from "./StudyRecruitItem";

export default function StudyRecruitList(props) {
  return (
    <div className="w-full">
      {props.recruits.map((recruit) => (
        <div className="cursor-pointer hover:scale-105 w-11/12 ml-6">
          <StudyRecruitItem
            key={recruit.studyId}
            studyId={recruit.studyId}
            title={recruit.title}
            content={recruit.content} 
            startTime={recruit.startTime}
            saveName={recruit.saveName}
            userLimit={recruit.userLimit}
            userGathered={recruit.userGathered}
            notice={recruit.notice}
            curricula={recruit.curricula}
            public={recruit.public}
            finished={recruit.finished}
            close={recruit.close} 
          />
        </div>
      ))}
    </div>
  );
}

