export default function PlayerQuestionComment({comment}) {

  return (
    <div className="flex flex-col justify-start items-start gap-2.5 w-full" >
      <div className="flex flex-col justify-start items-start gap-2.5 p-2.5 rounded-[5px] w-full bg-[#eef]">
        <p className="text-xs font-bold text-left text-black">
        {comment.user.nickname} | {comment.publishTime.substring(0,10)} {" "} {comment.publishTime.substring(11,16)}
        </p>
        <p className="text-[11px] text-left text-black overflow-auto max-h-40 scrollbar-none">
          {comment.content}
        </p>
      </div>
    </div>
  );
}
