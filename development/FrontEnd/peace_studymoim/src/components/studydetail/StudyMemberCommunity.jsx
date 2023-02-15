import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useRef, useEffect, useState } from "react";
import userInfo from "../../zustand/store";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import StudyMemberCoummunityComment from "./StudyMemberCommunityComment";

export default function StudyMemberCoummunity({ propData }) {
  const { info } = userInfo();
  const studyId = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const contentRef = useRef(null);
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const [studyCommunity, setStudyCommunity] = useState([]);

  useEffect(() => {
    const getStudyCommunity = async () => {
      await fetch(
        `http://${API_SERVER}/api/v1/study/community/${studyId.study_id}`
      )
        .then((res) => res.json())
        .then((json) => {
          setStudyCommunity(json);
        });
    };
    getStudyCommunity();
  }, [studyId.study_id]);

  useEffect(() => {
    if (!info) {
      navigate("/login");
      return;
    }
  });

  function onSubmit(e) {
    e.preventDefault();
    if (!isLoading) {
      setIsLoading(true);
      fetch(`http://${API_SERVER}/api/v1/study/community`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: contentRef.current.value,
          studyId: studyId.study_id,
          userId: info.userId,
        }),
      }).then((res) => {
        if (res.ok) {
          setIsLoading(false);
          window.location.reload();
        }
      });
    }
  }

  return (
    <div className="flex flex-col justify-start items-center w-full h-fit relative overflow-hidden gap-7 px-[50px] pt-[40px] pb-[30px]">
      <form
        onSubmit={onSubmit}
        className="flex relative h-[42px] border border-slate-500 bg-white rounded-[30px] w-full"
      >
        <button className="absolute right-0 bg-[#B1B2FF] text-[15px] rounded-full w-[30px] h-[30px] my-[5px] mr-[5px] text-white">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
        <input
          type="text"
          placeholder="스터디원들과 대화해보세요!"
          className="w-full h-[40px] border text-[14px] rounded-[30px] pl-4 focus:outline-none focus:ring focus:ring-violet-300 focus:border-none"
          ref={contentRef}
        />
      </form>
      {studyCommunity.map((items) => {
        return (
          <div className="w-full" key={items.studyCommunityId}>
            <StudyMemberCoummunityComment
              key={items.studyCommunityId}
              items={items}
            />
          </div>
        );
      })}
    </div>
  );
}
