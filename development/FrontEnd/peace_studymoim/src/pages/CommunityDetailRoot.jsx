import CommunityComment from "../components/communitydetail/CommunityComment";
import CommunityCommentForm from "../components/communitydetail/CommunityCommentForm";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import userInfo from "../zustand/store";
import ButtonModifyDelete from "../components/communitydetail/ButtonModifyDelete";
import ArticleEditForm from "../components/communitypages/ArticleEditForm";
import Moment from "moment";
import "moment/locale/ko";

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
  const IMAGE_ROOT = import.meta.env.VITE_APP_IMAGE_ROOT;
  const image = IMAGE_ROOT + userList.saveName;

  const wlh = useLocation().pathname.substring(16, 300);
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;

  const [thisIsMine, setThisIsMine] = useState(false);
  useEffect(() => {
    fetch(`http://${API_SERVER}/api/v1/articles/free/${wlh}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArticleDetail(data);
        setNewCommentList(data.freeBoardComments);
        setUserList(data.user);
        if (info.userId === data.user.userId) {
          setThisIsMine(true);
        }
      });
  }, [wlh]);

  const commentLength = newCommentList.length;
  const dateBase = new Date(articleDetail.publishTime);
  const date = dateBase.toString().substring(0, 24);
  // 삭제기능
  const handleRemove = () => {
    if (window.confirm(`정말로 글을 삭제하시겠습니까?`)) {
      fetch(`http://${API_SERVER}/api/v1/articles/free/${wlh}/`, {
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
              {articleDetail.title}
            </div>
            <div className="flex justify-start items-center relative pb-7 border-b">
              <img
                className="w-[50px] h-[50px] object-cover rounded-full border"
                src={userList.saveName ? image : "/logo.png"}
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
                  {Moment(articleDetail.publishTime).format(
                    "YYYY년 MM월 DD일 HH:mm"
                  )}
                  &nbsp; 조회수 {articleDetail.hit}
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
          <pre className="w-9/12 py-7 bg-white text-[20px] break-all whitespace-pre-wrap font-sans">
            {articleDetail.content}
          </pre>
        </div>
      ) : (
        <ArticleEditForm
          title={articleDetail.title}
          content={articleDetail.content}
          wlh={articleDetail.freeBoardId}
          clickModify={clickModify}
          userId={info.userId}
        />
      )}

      <div className="flex flex-col justify-center items-center bg-gray-100 py-[30px] mt-[50px] px-7">
        <div className="max-w-4xl mx-auto font-bold text-[#7b61ff] my-5 w-9/12">
          댓글 {commentLength}
        </div>
        <CommunityCommentForm freeBoardId={articleDetail.freeBoardId} />
        {newCommentList.map((comment) => (
          <CommunityComment
            key={comment.freeBoardCommentId}
            commentUserId={comment.user.userId}
            comment={comment}
            freeBoardId={articleDetail.freeBoardId}
          />
        ))}
      </div>
    </>
  );
}
