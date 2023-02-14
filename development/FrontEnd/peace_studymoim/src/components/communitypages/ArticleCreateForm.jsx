import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import userInfo from "../../zustand/store";
import DeleteArticleModal from '../overall/DeleteArticleModal'; 

export default function ArticleCreateForm() {
  const [showModal, setShowModal] = useState(false);
  function closeModalHandler() {
    setShowModal(false);
  }

  const navigate = useNavigate();
  const { info } = userInfo();
  useEffect(() => {
    if (!info) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }
  });

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

  return (
    <div className="max-w-6xl mx-auto px-4 flex flex-col m-[100px]">
      <form onSubmit={onSubmit} className="flex flex-col gap-[30px] ">
        <p className="text-3xl text-center font-bold">자유 글 작성하기</p>
        <input
          className="px-7 text-xl font-bold focus:outline-none"
          placeholder="제목을 입력하세요."
          ref={titleRef}
          required
        />
        <textarea
          className="flex justify-start items-start h-[500px] gap-2.5 px-[26px] py-7 bg-white border border-gray-300 rounded-[10px]"
          placeholder="내용을 입력하세요."
          ref={contentRef}
          required
        />
        <div className="flex gap-5 justify-end">
          <div
            className="w-[100px] px-4 py-2 rounded text-base font-bold text-center border border-gray-300 hover:bg-gray-300 cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            취소
          </div>
          <button className="w-[100px] px-4 py-2 rounded bg-[#ad9dfe] text-base font-bold text-center text-white hover:bg-[#989aff]">
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
