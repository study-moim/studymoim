import { Link } from "react-router-dom";
import NavBarNotLogInMd from "./NavBarNotLoginMd"
import NavBarLoginMd from "./NavBarLoginMd"
import userInfo from "../../zustand/store";

export default function NavBarRouter() {
  const { logIn } = userInfo();
  return (
    <>
      {/* TODO: 링크 누르면 토글 닫기 기능 추가 */}
      <div className="flex flex-col gap-3 px-4 pb-5 border-b pl-7 shadow-md">
        <Link
          to="/course"
          className="text-[16px] font-light hover:text-[#B1B2FF]"
        >
          <b>강좌</b>
        </Link>
        <Link
          to="/study"
          className="text-[16px] font-light hover:text-[#B1B2FF]"
        >
          <b>스터디</b>
        </Link>
        <Link
          to="/community"
          className="text-[16px] font-light hover:text-[#B1B2FF]"
        >
          <b>커뮤니티</b>
        </Link>
        {/* TODO: 작은화면에 맞춰 더 구성해야함 */}
        {logIn ? <NavBarLoginMd /> : <NavBarNotLogInMd />}
      </div>
    </>
  );
}
