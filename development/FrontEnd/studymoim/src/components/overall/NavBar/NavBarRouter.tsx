import { Link } from "react-router-dom";

export default function NavBarRouter() {
  return (
    <>
      {/* TODO: 링크누르면 누른 상태가 보이도록 설정 */}
      <Link
        to="/"
        className="flex-grow-0 flex-shrink-0 w-[108px] h-[67px] object-cover"
      >
        <img src="\src\assets\logo.png" />
      </Link>
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[266px] relative gap-4">
        <Link
          to="/lecture_main"
          className="flex-grow-0 flex-shrink-0 text-[28px] text-left text-[#7b7474]"
        >
          <b>강좌</b>
        </Link>
        <Link
          to="/study_main"
          className="flex-grow-0 flex-shrink-0 text-[28px] text-left text-[#7b7474]"
        >
          <b>스터디</b>
        </Link>
        <Link
          to="/community_main"
          className="flex-grow-0 flex-shrink-0 text-[28px] text-left text-[#7b7474]"
        >
          <b>커뮤니티</b>
        </Link>
      </div>
    </>
  );
}
