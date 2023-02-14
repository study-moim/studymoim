import CommunityComment from "../components/communitydetail/CommunityComment";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import userInfo from "../zustand/store";
import QuestionCommentForm from "../components/communitydetail/QuestionCommentForm";
import QustionLectureShort from "../components/communitydetail/QuestionLectureShort";
import QuestionEditForm from "../components/communitypages/QuestionEditForm";
import ButtonModifyDelete from "../components/communitydetail/ButtonModifyDelete";
import Moment from "moment";
import "moment/locale/ko";

export default function CommunityQuestionDetailRoot() {
  // 로그인 컷 콤보
  const navigate = useNavigate();
  const { info } = userInfo();
  useEffect(() => {
    if (!info) {
      navigate("/login");
      return;
    }
  });

  const [questionDetail, setQuestionDetail] = useState({});
  const [newCommentList, setNewCommentList] = useState([]);
  const [userList, setUserList] = useState([]);
  const wlh = window.location.pathname.substring(20, 300);
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const [thisIsMine, setThisIsMine] = useState(false);
  const [image, setImage] = useState("/logo.png");
  const getQuestion = async () => {
    await fetch(`http://${API_SERVER}/api/v1/articles/question/${wlh}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setQuestionDetail(data);
        setNewCommentList(data.questionBoardComments);
        setUserList(data.user);
        if (info.userId === data.user.userId) {
          setThisIsMine(true);
        }
        const IMAGE_ROOT = import.meta.env.VITE_APP_IMAGE_ROOT;
        data.user.saveName
          ? setImage(IMAGE_ROOT + data.user.saveName)
          : setImage("/logo.png");
      });
  };
  useEffect(() => {
    getQuestion();
  }, [wlh]);

  const commentLength = newCommentList.length;
  // 삭제기능
  const handleRemove = () => {
    if (window.confirm(`정말로 질문을 삭제하시겠습니까?`)) {
      fetch(`http://${API_SERVER}/api/v1/articles/question/${wlh}/`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          navigate("/temparticle");
        }
      });
    }
  };

  const [isModify, setIsModify] = useState(false);
  const clickModify = () => {
    setIsModify(!isModify);
  };

  return (
    <>
      {!isModify ? (
        <div className="flex flex-col justify-center items-center mt-[50px] max-w-6xl mx-auto px-4">
          <div className="flex flex-col w-9/12">
            <div className="w-full py-7 text-2xl font-bold text-black">
              {questionDetail.title}
            </div>
            <div className="flex justify-start items-center relative pb-7 border-b">
              <img
                className="w-[50px] h-[50px] object-cover rounded-full border"
                src={
                  image
                    ? image
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjplK5Iw7kiaLK5XX1g5VJwc3W8m92UjVRgw&usqp=CAU"
                }
              />
              <div className="pl-3">
                <NavLink
                  to={`/mypage/${userList.userId}`}
                  className="hover:text-[#989aff]"
                >
                  <div className="px-2.5 ext-[15px] font-bold">
                    {userList.nickname}
                  </div>
                </NavLink>
                <div className="px-2.5 text-[14px] text-center text-[#7b7474]">
                  {Moment(questionDetail.publishTime).format(
                    "YYYY년 MM월 DD일 HH:DD"
                  )}
                  &nbsp; 조회수 {questionDetail.hit}
                </div>
              </div>
              <div className={thisIsMine ? "absolute right-0" : "invisible"}>
                <ButtonModifyDelete
                  handleRemove={handleRemove}
                  clickModify={clickModify}
                  isModify={isModify}
                />
              </div>
            </div>
          </div>

          <div className="w-9/12 py-7 bg-white text-[20px] font-bold">
            {questionDetail.content}
          </div>
        </div>
      ) : (
        <QuestionEditForm
          title={questionDetail.title}
          content={questionDetail.content}
          wlh={questionDetail.questionBoardId}
          lectureId={questionDetail.lecture.lectureId}
          clickModify={clickModify}
          userId={info.userId}
        />
      )}
      <div className="w-full bg-gray-100 mt-[50px] border-b">
        <div className="flex justify-center">
          <QustionLectureShort lecture={questionDetail.lecture} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-100 py-[30px]  px-7">
        <div className="max-w-4xl mx-auto font-bold text-[#7b61ff] my-5 w-9/12">
          댓글 {commentLength}
        </div>
        <QuestionCommentForm questionBoardId={questionDetail.questionBoardId} />
        {newCommentList.map((comment) => (
          <CommunityComment
            key={comment.questionBoardCommentId}
            commentUserId={comment.user.userId}
            comment={comment}
            freeBoardId={questionDetail.questionBoardId}
          />
        ))}
      </div>
    </>
  );
}
