import { Link } from "react-router-dom";

export default function NavBarRouter() {
  return (
    <>
      {/* TODO: 링크누르면 누른 상태가 보이도록 설정 */}
      <Link to="/" className="w-[70px] h-[46px] hover:scale-105 ">
        <img src="\src\assets\logo.png" />
      </Link>
      <div className="hidden md:flex items-center space-x-3 mt-[5px]">
        <Link to="/lecture" className="text-[20px] text-[#7b7474] hover:text-[#B1B2FF] hover:scale-105">
          <b>강좌</b>
        </Link>
        <Link to="/study" className="text-[20px] text-[#7b7474] hover:text-[#B1B2FF] hover:scale-105">
          <b>스터디</b>
        </Link>
        <Link to="/community" className="text-[20px] text-[#7b7474] hover:text-[#B1B2FF] hover:scale-105">
          <b>커뮤니티</b>
        </Link>
      </div>
    </>
  );
}
