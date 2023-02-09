import { useState, useRef, useEffect } from "react";
import userInfo from "../../zustand/store";

export default function PlayerQuestionMakeForm({ clickNew, lectureId }) {
  const { info } = userInfo();
  // 생성중에는 create 못하게 하기
  const [isLoading, setIsLoading] = useState(false);

  // input창에 있는 값을 얻기, DOM요소에 접근하는 것
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  function onSubmit(e) {
    e.preventDefault();
    if (!isLoading) {
      setIsLoading(true);
      // Create 호출
      // 두번째 인자로 메서드를 넣어줌
      fetch(`http://${API_SERVER}/api/v1/articles/question/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body : 수정을 위한 정보를 넣어줘야함
        // + JSON 문자열로도 변환시켜줌
        body: JSON.stringify({
          title: titleRef.current.value,
          content: contentRef.current.value,
          lectureId: lectureId,
          userId: info.userId,
        }),
      }).then((res) => {
        if (res.ok) {
          setIsLoading(false);
          clickNew()
        }
      });
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col justify-start items-start gap-2.5 bg-white w-full mb-5">
        <p className="text-xl font-bold text-left text-[#7b61ff]">질문 작성</p>
        <p className=" text-lg font-bold text-left text-black">제목</p>
        <input
          className="rounded-[5px] border border-[#7b7474] w-full h-10 px-2"
          placeholder="제목을 입력하세요"
          ref={titleRef}
        />
        <p className=" text-lg font-bold text-left text-black">내용</p>
        <textarea
          className="h-[350px] relative overflow-auto rounded-[5px] border border-[#7b7474] w-full p-2"
          placeholder="내용을 입력하세요"
          ref={contentRef}
        />

        <div className="flex justify-start items-start gap-[70px]">
          <div
            className="rounded-[5px] bg-[#ff8484] text-[17px] text-center text-black p-2 w-24 cursor-pointer"
            onClick={clickNew}
          >
            취소
          </div>
          <button className="rounded-[5px] bg-[#aab9fd] text-[17px] text-center text-black p-2 w-24">
            작성
          </button>
        </div>
      </form>
    </>
  );
}
