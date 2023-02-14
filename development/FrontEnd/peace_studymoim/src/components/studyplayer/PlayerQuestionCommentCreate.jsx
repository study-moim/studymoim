import { useState, useRef } from "react";
import userInfo from "../../zustand/store";

export default function PlayerQuestionCommentCreate({
  questionBoardId,
  getCreateComment
}) {
  const { info } = userInfo();

  // 생성중에는 create 못하게 하기
  const [isLoading, setIsLoading] = useState(false);
  // input창에 있는 값을 얻기, DOM요소에 접근하는 것
  const contentRef = useRef(null);
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;

  function onSubmit(e) {
    e.preventDefault();

    if (!isLoading) {
      setIsLoading(true);
      // Create 호출
      // 두번째 인자로 메서드를 넣어줌
      fetch(`http://${API_SERVER}/api/v1/articles/question/comment/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body : 수정을 위한 정보를 넣어줘야함
        // + JSON 문자열로도 변환시켜줌
        body: JSON.stringify({
          content: contentRef.current.value,
          questionBoardId: questionBoardId,
          userId: info.userId,
        }),
      }).then((res) => {
        if (res.ok) {
          let current = document.getElementById("cc");
          current.value = null;
          getCreateComment()
          setIsLoading(false);
          alert("댓글이 작성되었습니다.");
        }
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full h-8 mb-2">
      <textarea
        id="cc"
        type="text"
        className="text-xs border w-9/12 scrollbar-none"
        required
        maxLength="200"
        ref={contentRef}
      />
      <button className="border text-xs p-1 rounded-lg w-3/12">작성</button>
    </form>
  );
}
