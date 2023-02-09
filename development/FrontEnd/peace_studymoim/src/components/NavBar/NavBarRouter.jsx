import { Link } from "react-router-dom";

export default function NavBarRouter() {
  return (
    <>
      <Link to="/">
        <img src="/logo.png" className="h-[46px]"/>
      </Link>
      <div className="hidden md:flex items-center space-x-3">
        <Link to="/Course" className="text-[16px] font-light hover:text-[#B1B2FF]">
          <b>강좌</b>
        </Link>
        <Link to="/study" className="text-[16px] font-light hover:text-[#B1B2FF]">
          <b>스터디</b>
        </Link>
        <Link to="/community" className="text-[16px] font-light hover:text-[#B1B2FF]">
          <b>커뮤니티</b>
        </Link>
      </div>
    </>
  );
}
