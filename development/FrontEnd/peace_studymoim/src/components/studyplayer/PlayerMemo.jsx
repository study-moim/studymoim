import { useState, useRef, useEffect } from "react";
import userInfo from "../../zustand/store";
import useFetch from "../../hooks/useFetch";

export default function PlayerMemo({ lectureId }) {
  const { info } = userInfo();
  // 생성중에는 create 못하게 하기
  const [isLoading, setIsLoading] = useState(false);
  // input창에 있는 값을 얻기, DOM요소에 접근하는 것
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;

  const [prevMemo, setPrevMemo] = useState("");
  const contentRef = useRef(prevMemo.content);
  useEffect(() => {
    const getPrevMemo = async () => {
      await fetch(
        `http://${API_SERVER}/api/v1/note/${lectureId}/${info.userId}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setPrevMemo(data);
          let memoContent = document.getElementById("memoText")
          memoContent.value = data.content
        });
    };
    getPrevMemo();
  }, []);

  function onSubmit(e) {
    e.preventDefault();

    if (!isLoading) {
      setIsLoading(true);
      // Create 호출
      // 두번째 인자로 메서드를 넣어줌
      fetch(`http://${API_SERVER}/api/v1/note/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body : 수정을 위한 정보를 넣어줘야함
        // + JSON 문자열로도 변환시켜줌
        body: JSON.stringify({
          userId: info.userId,
          lectureId: lectureId,
          content: contentRef.current.value,
        }),
      }).then((res) => {
        if (res.ok) {
          setIsLoading(false);
        }
      });
    }
  }
  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex flex-col justify-end items-end w-full h-full"
      >
        <textarea
          id="memoText"
          className="w-full h-full border p-2 scrollbar-none"
          placeholder="마크다운 양식으로 작성하기"
          ref={contentRef}
        ></textarea>
        <button className="shadow-innerDown w-[100px] h-[30px] mt-[10px] bg-[#b1b2ff] font-bold text-white rounded-md hover:bg-[#8b8dff] hover:shadow-innerUp">
          저장하기
        </button>
      </form>
    </>
  );
}
