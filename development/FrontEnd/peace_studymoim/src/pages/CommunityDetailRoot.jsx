import CommunityComment from "../components/communitydetail/CommunityComment";
import CommunityCommentForm from "../components/communitydetail/CommunityCommentForm";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function CommunityDetailRoot() {
  const [articleDetail, setArticleDetail] = useState({});
  const [newCommentList, setNewCommentList] = useState([]);
  const [userList, setUserList] = useState([]);
  
  const wlh = window.location.pathname.substring(16, 300);
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;

  useEffect(() => {
    fetch(`http://${API_SERVER}/api/v1/articles/free/${wlh}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArticleDetail(data);
        setNewCommentList(data.freeBoardComments);
        setUserList(data.user)
        // console.log(typeof(data))
      });
  }, [wlh]);

  const commentLength = newCommentList.length;
  const dateBase = new Date(articleDetail.publishTime);
  const date = dateBase.toString().substring(11, 24);
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-[20px] mt-[50px] max-w-6xl mx-auto px-4">
        <div className="flex flex-col w-10/12">
          <div className="flex justify-start items-end  w-[1162px] relative gap-[15px] px-[30px]">
            <img className="w-[40px]" src={userList.saveName} />
            <Link
              to={`/mypage/${userList.userId}`}
              className="hover:text-cyan-700 text-black hover:scale-105"
              state={{ clickWho: userList.userId }}
            >
              <div className="text-xl font-bold">{userList.nickname}</div>
            </Link>
            <div className="text-xl text-[#7b7474]">
              {date}
            </div>
            <div className="text-xl font-bold text-[#898989]">
              조회수 {articleDetail.hit}
            </div>
            <div className="text-xl font-bold text-[#898989]">
              댓글 {commentLength}
            </div>
          </div>
          <div className="w-[1162px] pl-[30px] pr-[269px] py-5 text-2xl font-bold text-black">
            {articleDetail.title}
          </div>
        </div>
        {/* TODO: 마크다운 형식으로 적용되게 하기 */}
        <div
          className="w-10/12 h-[531px] px-[39px] py-7 bg-white border-[3px] border-[#b1b2ff] text-[20px] font-bold text-left text-black"
          style={{ boxShadow: "0px 2px 5px 0 rgba(0,0,0,0.25)" }}
        >
          {articleDetail.content}
        </div>
        <CommunityCommentForm freeBoardId={articleDetail.freeBoardId} />
        {newCommentList.map((comment) => (
          <CommunityComment
            key={comment.freeBoardCommentId}
            comment={comment}
          />
        ))}
      </div>
    </>
  );
}
