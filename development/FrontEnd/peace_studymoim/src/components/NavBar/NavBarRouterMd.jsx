import { Link } from "react-router-dom";
import NavBarNotLogInMd from "./NavBarNotLoginMd"
import NavBarLoginMd from "./NavBarLoginMd"
import userInfo from "../../zustand/store";

export default function NavBarRouter() {
  const { logIn } = userInfo();
  return (
    <>
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
        {logIn ? <NavBarLoginMd /> : <NavBarNotLogInMd />}
      </div>
    </>
  );
}
