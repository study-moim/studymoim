import { useState, useRef } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router";
import { userInfo } from "../../zustand/store";

export default function CommunityCommentForm({freeBoardId}) {
  const navigate = useNavigate();

  const { info } = userInfo();
  if (!info) {
    alert("로그인이 필요합니다.");
    navigate("/login");
  }
  // 생성시 바로 이동하는 기능
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
      fetch(`http://${API_SERVER}/api/v1/articles/free/comment/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body : 수정을 위한 정보를 넣어줘야함
        // + JSON 문자열로도 변환시켜줌
        body: JSON.stringify({
          "content": contentRef.current.value,
          "parentCommentId": null,
          "freeBoardId": freeBoardId,
          "userId": info.userId
        }),
      }).then((res) => {
        if (res.ok) {
          setIsLoading(false);
          alert("댓글이 작성되었습니다.")
        }
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-end gap-5 w-9/12">
      <textarea
        className="w-full pl-2.5 pr-[100px] pt-[14px] pb-[50px] bg-white border-[3px] border-[#b1b2ff]"
        style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
        placeholder="댓글을 입력해주세요."
        ref={contentRef}
      />
      <button className="p-2.5 text-[15px] rounded-[10px] font-bold text-left text-white bg-[#b1b2ff] hover:bg-[#9697ff] hover:scale-95">
        작성하기
      </button>
    </form>
  );
}
