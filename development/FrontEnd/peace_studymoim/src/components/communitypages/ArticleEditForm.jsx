import { useState, useRef } from "react";
import { useNavigate } from "react-router";

export default function ArticleEditForm({
  userId,
  content,
  title,
  clickModify,
  wlh
}) {
  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef(null);
  const [localTitle, setLocalTitle] = useState(title);
  const localTitleInput = useRef(null);
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const navigate = useNavigate();
  const handleQuitEdit = () => {
    clickModify();
    setLocalContent(content);
  };
  // 수정완료시 이벤트처리할 함수
  const handleEdit = () => {
    if (localContent.length < 1) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`정말 수정하시겠습니까?`)) {
      toggleIsEdit();
    }
  };

  const putArticle = () => {
    const putData = {
      title: localTitle,
      content: localContent,
      userId: userId,
    };
    console.log(wlh, "wlh")
    console.log(putData, "pppppppppppppppppppppppppppppppppp")
    fetch(`http://${API_SERVER}/api/v1/articles/free/${wlh}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(putData),
    }).then((res) => {
      if (res.ok) {
        navigate("/temparticle", {
          state: {
            wlh: wlh,
          },
        });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 flex flex-col m-[100px]">
      <form onSubmit={putArticle} className="flex flex-col gap-[30px] ">
        <p className="text-3xl text-center font-bold">자유 글 수정하기</p>
        <input
          className="px-7 text-xl font-bold focus:outline-none"
          placeholder="제목을 입력하세요."
          ref={localTitleInput}
          value={localTitle}
          maxLength="20"
          onChange={(e) => setLocalTitle(e.target.value)}
          required
        />
        <textarea
          className="flex justify-start items-start h-[500px] gap-2.5 px-[26px] py-7 bg-white border border-gray-300 rounded-[10px]"
          placeholder="내용을 입력하세요."
          ref={localContentInput}
          value={localContent}
          maxLength="500"
          onChange={(e) => setLocalContent(e.target.value)}
          required
        />
        <div className="flex gap-5 justify-end">
          <div
            onClick={handleQuitEdit}
            className="w-[100px] px-4 py-2 rounded text-base font-bold text-center border border-gray-300 hover:bg-gray-300 cursor-pointer"
          >
            취소
          </div>
          <button
            onClick={handleEdit}
            className="w-[100px] px-4 py-2 rounded bg-[#ad9dfe] text-base font-bold text-center text-white hover:bg-[#989aff]"
          >
            수정완료
          </button>
        </div>
      </form>
    </div>
  );
}
