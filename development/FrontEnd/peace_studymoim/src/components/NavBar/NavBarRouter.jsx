import { Link } from "react-router-dom";

export default function NavBarRouter() {
  return (
    <>
      {/* TODO: 링크누르면 누른 상태가 보이도록 설정 */}
      <Link to="/">
        <img src="/logo.png" className="h-[46px]"/>
      </Link>
      <div className="hidden md:flex items-center space-x-3">
        <Link to="/Course" className="text-[18px] font-light hover:text-[#B1B2FF]">
          <b>강좌</b>
        </Link>
        <Link to="/study" className="text-[18px] font-light hover:text-[#B1B2FF]">
          <b>스터디</b>
        </Link>
        <Link to="/community" className="text-[18px] font-light hover:text-[#B1B2FF]">
          <b>커뮤니티</b>
        </Link>
      </div>
    </>
  );
}
