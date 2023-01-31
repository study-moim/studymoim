import { useState, useRef } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router";

export default function CommunityCreateForm() {
  const freeArticleLast = useFetch("http://localhost:8080/api/v1/articles/free/");
  const lastArticle = freeArticleLast[freeArticleLast.length - 1];

  // const lastArticleID = lastArticle.free_board_id;

  // 생성시 바로 이동하는 기능
  const navigate = useNavigate();
  // 생성중에는 create 못하게 하기
  const [isLoading, setIsLoading] = useState(false);

  // input창에 있는 값을 얻기, DOM요소에 접근하는 것
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  function onSubmit(e) {
    e.preventDefault();

    if (!isLoading) {
      setIsLoading(true);
      // Create 호출
      // 두번째 인자로 메서드를 넣어줌
      fetch("http://localhost:8080/api/v1/articles/free/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body : 수정을 위한 정보를 넣어줘야함
        // + JSON 문자열로도 변환시켜줌
        body: JSON.stringify({
          free_board_id: 5,
          title: titleRef.current.value,
          content: contentRef.current.value,
          publish_time: "2022-04-28T05:40:55.183+00:00",
          is_deleted: false,
          hit: 0,
          user_id: 1,
          user_name: "독기가득준",
          user_picture:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk2lbyOkPrt9t2d4mh_DxbsvngVe0V208oPS9JYsl5vQ&s",
        }),
      }).then((res) => {
        if (res.ok) {
          alert("자유글 생성완료");
          navigate("/community");
          setIsLoading(false);
        }
      });
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 flex flex-col gap-[43px] m-[100px]">
      <form onSubmit={onSubmit} className="flex flex-col gap-[50px]">
        <p className="text-5xl text-center text-[#7b61ff]">
          질문 작성하기
        </p>
        <div className="flex  justify-between gap-[27px]">
          <input
            className="w-9/12 px-[26px] py-3 bg-white border-[3px] border-[#b1b2ff]"
            style={{ boxShadow: "0px 2px 5px 0 rgba(0,0,0,0.25)" }}
            placeholder="제목을 입력하세요"
            ref={titleRef}
          />
          <button className="w-[104px] px-4 py-2 rounded bg-[#7b61ff] text-lg font-bold text-center text-[#f2f2f2] hover:bg-[#5f44e8] hover:scale-95">
            작성하기
          </button>
        </div>
        <textarea
          className="flex justify-start items-start   h-[700px] gap-2.5 px-[26px] py-7 bg-white border-[3px] border-[#b1b2ff]"
          style={{ boxShadow: "0px 2px 5px 0 rgba(0,0,0,0.25)" }}
          placeholder="마크다운 양식으로 입력이 가능합니다."
          ref={contentRef}
        />
      </form>
    </div>
  );
}
