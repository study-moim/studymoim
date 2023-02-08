import { useState, useRef } from "react";
import userInfo from "../../zustand/store";

export default function QuestionCommentForm({ questionBoardId }) {
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
          setIsLoading(false);
          alert("댓글이 작성되었습니다.");
          window.location.reload();
        }
      });
    }
  }
  return (
    <form
      onSubmit={onSubmit}
      className="max-w-4xl mx-auto flex flex-col items-end gap-3 w-9/12 "
    >
      <textarea
        className="w-full p-5 bg-white border border-gray-200 rounded-[10px]"
        placeholder="댓글을 입력해주세요."
        ref={contentRef}
      />
      <button className="p-2.5 w-[100px] rounded-[10px] text-center font-bold text-[14px] text-white bg-[#b1b2ff] hover:bg-[#9697ff] mb-3">
        등록하기
      </button>
    </form>
  );
}
