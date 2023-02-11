import CommunityComment from "../components/communitydetail/CommunityComment";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import userInfo from "../zustand/store";
import QuestionCommentForm from "../components/communitydetail/QuestionCommentForm";
import QustionLectureShort from "../components/communitydetail/QuestionLectureShort";

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

  const getQuestion = async () => {
    await fetch(`http://${API_SERVER}/api/v1/articles/question/${wlh}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setQuestionDetail(data);
        setNewCommentList(data.questionBoardComments);
        setUserList(data.user);
      });
  };
  useEffect(() => {
    getQuestion();
  }, [wlh]);

  const commentLength = newCommentList.length;
  const dateBase = new Date(questionDetail.publishTime);
  const date = dateBase.toString().substring(0, 24);

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-[50px] max-w-6xl mx-auto px-4">
        <div className="flex flex-col w-9/12">
          <div className="w-full py-7 text-2xl font-bold text-black">
            {questionDetail.title}
          </div>
          <div className="flex justify-start items-center relative pb-7 border-b">
            <img
              className="w-[50px] h-[50px] object-cover rounded-full"
              src={
                questionDetail.saveName
                  ? questionDetail.saveName
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
                {date} &nbsp; 조회수 {questionDetail.hit}
              </div>
            </div>
            <div className="absolute right-0">
              <button className="text-[14px] text-center hover:font-bold">
                수정 &nbsp;
              </button>
              <button className="text-[14px] text-center hover:font-bold">
                삭제
              </button>
            </div>
          </div>
        </div>

        {/* TODO: 마크다운 형식으로 적용되게 하기 */}
        <div className="w-9/12 py-7 bg-white text-[20px] font-bold">
          {questionDetail.content}
        </div>
      </div>
      <div className="w-full bg-gray-100 mt-[50px] border-b-2">
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
