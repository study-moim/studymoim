import CommunityComment from "../components/communitydetail/CommunityComment";
import CommunityCommentForm from "../components/communitydetail/CommunityCommentForm";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CommunityDetailRoot() {
  const props = useLocation().state;
  // console.log(props)
  const commentList = props.comments;
  const commentLength = props.comments.length;

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-[20px] mt-[50px] max-w-6xl mx-auto px-4">
        <div className="flex flex-col w-10/12">
          <div className="flex justify-start items-end  w-[1162px] relative gap-[15px] px-[30px]">
            <img className="w-[40px]" src={props.userPicture} />
            <Link
              to={`/mypage/${props.userId}`}
              className="hover:text-cyan-700 text-black hover:scale-105"
              state={{clickWho: props.userId}}
            >
              <div className="text-xl font-bold">{props.userName}</div>
            </Link>
            <div className="text-xl text-[#7b7474]">{props.publishTime}</div>
            <div className="text-xl font-bold text-[#898989]">
              조회수 {props.hit}
            </div>
            <div className="text-xl font-bold text-[#898989]">
              댓글 {commentLength}
            </div>
          </div>
          <div className="w-[1162px] pl-[30px] pr-[269px] py-5 text-2xl font-bold text-black">
            {props.title}
          </div>
        </div>
        {/* TODO: 마크다운 형식으로 적용되게 하기 */}
        <div
          className="w-10/12 h-[531px] px-[39px] py-7 bg-white border-[3px] border-[#b1b2ff] text-[20px] font-bold text-left text-black"
          style={{ boxShadow: "0px 2px 5px 0 rgba(0,0,0,0.25)" }}
        >
          {props.content}
        </div>
        <CommunityCommentForm />
        {commentList.map((comment) => (
          <CommunityComment
            key={comment.freeBoardCommentId}
            comment={comment}
          />
        ))}
      </div>
    </>
  );
}
