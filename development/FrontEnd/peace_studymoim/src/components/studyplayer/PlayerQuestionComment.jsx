import { useEffect, useRef, useState } from "react";
import userInfo from "../../zustand/store";

export default function PlayerQuestionComment({ comment, commentToggle, getCreateComment }) {
  const { info } = userInfo();
  const [isMine, setIsMine] = useState(false);

  useEffect(() => {
    if (info.userId === comment.userId) {
      setIsMine(true);
    }
  }, []);
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const handleRemove = () => {
    if (window.confirm(`댓글을 삭제하시겠습니까?`)) {
      fetch(
        `http://${API_SERVER}/api/v1/articles/question/comment/${comment.questionBoardCommentId}/`,
        {
          method: "DELETE",
        }
      ).then((res) => {
        if (res.ok) {
          alert("댓글 삭제완료");
          getCreateComment()
        }
      });
    }
  };
  return (
    <div className="flex flex-col justify-start items-start gap-2.5 w-full">
      <div className="flex flex-col justify-start items-start gap-2.5 p-2.5 rounded-[5px] w-full bg-[#eef]">
        <div className="flex justify-between w-full">
          <p className="text-xs font-bold text-left text-black">
            {comment.user.nickname} | {comment.publishTime.substring(0, 10)}{" "}
            {comment.publishTime.substring(11, 16)}
          </p>
          <p
            className={
              !isMine
                ? "text-xs font-bold text-left text-black cursor-pointer"
                : "text-xs font-bold invisible"
            }
            onClick={handleRemove}
          >
            삭제
          </p>
        </div>
        <p className="text-[11px] text-left text-black overflow-auto w-full max-h-20 break-all scrollbar-none">
          {comment.content}
        </p>
      </div>
    </div>
  );
}
