import PlayerQuestionComment from "./PlayerQuestionComment";

export default function PlayerQuestionCommentList({commentToggle, questionBoardComments}) {

  return (
    <div className="flex flex-col justify-start items-start relative gap-[15px] w-full">
      {questionBoardComments.map((comment) => {
        return (
          <PlayerQuestionComment key={comment.questionBoardCommentId} comment={comment} />
        )
      })}
    </div>
  );
}
