export default function PlayerQuestionCommentCreate() {
  // TODO: 댓글 포스트 기능 넣어야함
  return (
    <form className="flex w-full h-8 mb-2">
      <textarea type="text" className="text-xs border w-9/12 scrollbar-none" required/>
      <button className="border text-xs p-1 rounded-lg w-3/12">작성</button>
    </form>
  );
}
