import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import userInfo from "../../zustand/store";
import DeleteArticleModal from "../overall/DeleteArticleModal";

export default function ArticleCreateForm() {
  const [showModal, setShowModal] = useState(false);
  function closeModalHandler() {
    setShowModal(false);
  }

  const navigate = useNavigate();
  const { info } = userInfo();
  useEffect(() => {
    if (!info) {
      navigate("/login");
      return;
    }
  });

  // 생성중에는 create 못하게 하기
  const [isLoading, setIsLoading] = useState(false);

  // input창에 있는 값을 얻기, DOM요소에 접근하는 것
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const [contentLength, setContentLength] = useState(0);

  const changeContentValue = () => {
    if (contentRef.current && contentRef.current.value) {
      setContentLength(contentRef.current.value.length);
    }
  };

  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  function onSubmit(e) {
    e.preventDefault();

    // 제목이 20보다 크면 포커싱하는 함수
    if (titleRef.current.value.length > 20) {
      titleRef.current.focus();
      setTitleIsActive(false);
      return;
    }

    // 내용이 500보다 크면 포커싱하는 함수
    if (contentRef.current.value.length > 500) {
      contentRef.current.focus();
      setContentIsActive(false);
      return;
    }

    if (!isLoading) {
      setIsLoading(true);
      // Create 호출
      // 두번째 인자로 메서드를 넣어줌
      fetch(`http://${API_SERVER}/api/v1/articles/free/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body : 수정을 위한 정보를 넣어줘야함
        // + JSON 문자열로도 변환시켜줌
        body: JSON.stringify({
          title: titleRef.current.value,
          content: contentRef.current.value,
          userId: info.userId,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("자유글 생성완료");
          navigate("/temparticle");
          setIsLoading(false);
        }
      });
    }
  }

  // 제목 칸 클래스를 바꿀 flag 변수
  const [titleIsActive, setTitleIsActive] = useState(true);
  const [contentIsActive, setContentIsActive] = useState(true);

  const clickTitle = () => {
    setTitleIsActive(true);
  };
  const clickContent = () => {
    setContentIsActive(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 flex flex-col m-[100px]">
      <form onSubmit={onSubmit} className="flex flex-col gap-[30px] w-full">
        <p className="text-3xl text-center font-bold">자유 글 작성하기</p>
        <div className="group flex relative w-full">
          <input
            className={
              titleIsActive
                ? "px-7 text-xl font-bold focus:outline-none w-full"
                : "px-7 text-xl font-bold focus:outline-red-500 w-full"
            }
            placeholder="제목을 입력하세요.(최대 20자)"
            ref={titleRef}
            required
            // maxlength='20'
            onClick={clickTitle}
            onMouseLeave={() => setTitleIsActive(true)}
          />
          <span
            className={
              titleIsActive
                ? "hidden"
                : "transition-opacity bg-gray-800 px-1 text-base text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-100 z-1 m-4 mx-auto"
            }
          >
            제목을 20자 이하로 작성해주세요
          </span>
        </div>
        <div className="group flex relative w-full z-0">
          <textarea
            className={
              contentIsActive
              ?
              "flex justify-start w-full items-start h-[500px] gap-2.5 px-[26px] py-7 bg-white border border-gray-300 rounded-[10px]"
              :
              "flex justify-start w-full items-start h-[500px] gap-2.5 px-[26px] py-7 bg-white border border-gray-300 rounded-[10px] focus:outline-red-400"
            }
            placeholder="내용을 입력하세요.(500자)"
            ref={contentRef}
            // maxlength='500'
            onChange={changeContentValue}
            onClick={() => {
              clickTitle(), clickContent();
            }}
            required
          />
          <span
            className={
              contentIsActive
                ? "hidden"
                : "transition-opacity bg-gray-800 px-1 text-xl p-3 text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-100 m-4 mx-auto"
            }
          >
            내용을 500자 이하로 작성해주세요
          </span>
        </div>
        <div className="flex gap-5 justify-end">
          <div
            className={
              contentLength > 500
                ? "w-[120px] px-4 py-2 rounded text-sm font-bold text-center text-red-600"
                : "w-[120px] px-4 py-2 rounded text-sm text-center"
            }
          >
            {contentLength}/500자
          </div>
          <div
            className="w-[100px] px-4 py-2 rounded text-base font-bold text-center border border-gray-300 hover:bg-gray-300 cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            취소
          </div>
          <button
            onMouseLeave={setContentIsActive}
            className="w-[100px] px-4 py-2 rounded bg-[#ad9dfe] text-base font-bold text-center text-white hover:bg-[#989aff]"
          >
            등록
          </button>

          {showModal ? (
            <DeleteArticleModal
              onCancel={closeModalHandler}
              onConfirm={closeModalHandler}
            />
          ) : null}
        </div>
      </form>
    </div>
  );
}
