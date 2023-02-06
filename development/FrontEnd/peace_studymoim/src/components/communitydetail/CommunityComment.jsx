import { useEffect, useRef, useState } from "react";
import userInfo from "../../zustand/store";
import { Link } from "react-router-dom";

export default function CommunityComment({ comment }) {
  console.log(comment)
  const [pt, setPt] = useState(comment.publishTime);
  if (pt === null) {
    return null;
  }

  const { info } = userInfo();
  const [isMine, setIsMine] = useState(false);
  useEffect(() => {
    if (info.userId === comment.user["userId"]) {
      setIsMine(true);
    }
  }, []);
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const dateBase = new Date(comment.publishTime);
  const date = dateBase.toString().substring(0, 24);

  const handleRemove = () => {
    if (window.confirm(`댓글을 삭제하시겠습니까?`)) {
      fetch(
        `http://${API_SERVER}/api/v1/articles/free/comment/${comment.freeBoardCommentId}/`,
        {
          method: "DELETE",
        }
      ).then((res) => {
        if (res.ok) {
          alert("댓글 삭제완료");
          window.location.reload();
        }
      });
    }
  };

  return (
    <>
      <div className="flex flex-col max-w-4xl mx-auto border border-gray-200 rounded-[10px] justify-end items-end w-9/12 bg-white mb-3 p-7">
        <div className="w-full">
          {/* 댓글 맨위 */}
          <div className="flex flex-row justify-between pb-5 border-b">
            <div className="flex justify-start items-center relative gap-px">
              <img
                className="w-10 rounded-full"
                src="data:image/jpeg;base64,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"
              />
              <div className="pl-3">
                <Link
                  to={`/mypage/${comment.user.userId}`}
                  className="hover:text-[#989aff]"
                  state={{ clickWho: comment.user.userId }}
                >
                  <div className="px-2.5 ext-[15px] font-bold">
                    {comment.user.nickname}
                  </div>
                </Link>
                <div className="px-2.5 text-[14px] text-center text-[#7b7474]">
                  {date}
                </div>
              </div>
            </div>
            {/* 수정 삭제 버튼 */}

            <div className={!isMine ? "invisible" : "visible"}>
              <button
                onClick={handleRemove}
                className="text-[14px] text-center hover:font-bold"
              >
                삭제
              </button>
            </div>
          </div>
          {/* 댓글 내용 */}
          <div className="flex w-full justify-start mt-5 text-[15px] text-center">
            {comment.content}
          </div>
        </div>
      </div>
    </>
  );
}
