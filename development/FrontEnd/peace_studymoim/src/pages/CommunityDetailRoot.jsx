import CommunityComment from "../components/communitydetail/CommunityComment";
import CommunityCommentForm from "../components/communitydetail/CommunityCommentForm";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { userInfo } from "../zustand/store";

export default function CommunityDetailRoot() {
  // 로그인 컷 콤보
  const navigate = useNavigate();
  const { info } = userInfo();
  useEffect(() => {
    if (!info) {
      navigate("/login");
      return;
    }
  });

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
        setUserList(data.user);
      });
  }, [wlh]);

  const commentLength = newCommentList.length;
  const dateBase = new Date(articleDetail.publishTime);
  const date = dateBase.toString().substring(11, 24);
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-[50px] max-w-6xl mx-auto px-4">
        <div className="flex flex-col w-9/12">
          <div className="w-full py-7 text-2xl font-bold text-black">
            {articleDetail.title}
          </div>
          <div className="flex justify-start items-center relative pb-7 border-b">
            <img
              className="w-[50px] h-[50px] object-cover rounded-full"
              src={
                articleDetail.saveName
                  ? freeArticle.saveName
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjplK5Iw7kiaLK5XX1g5VJwc3W8m92UjVRgw&usqp=CAU"
              }
            />
            <div className="pl-3">
              <Link
                to={`/mypage/${userList.userId}`}
                className="hover:text-[#989aff]"
                state={{ clickWho: userList.userId }}
              >
                <div className="px-2.5 ext-[15px] font-bold">
                  {userList.nickname}
                </div>
              </Link>
              <div className="px-2.5 text-[14px] text-center text-[#7b7474]">
                {date} &nbsp; 조회수 {articleDetail.hit}
              </div>
            </div>
          </div>
        </div>

        {/* 수정 삭
        {/* TODO: 마크다운 형식으로 적용되게 하기 */}
        <div className="w-9/12 py-7 bg-white text-[20px] font-bold">
          {articleDetail.content}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-gray-100 py-[30px] mt-[50px] px-7">
        <div className="max-w-4xl mx-auto font-bold text-[#7b61ff] my-5 w-9/12">
          댓글 {commentLength}
        </div>
        <CommunityCommentForm freeBoardId={articleDetail.freeBoardId} />
        {newCommentList.map((comment) => (
          <CommunityComment
            key={comment.freeBoardCommentId}
            comment={comment}
            freeBoardId={articleDetail.freeBoardId}
          />
        ))}
      </div>
    </>
  );
}
