import { Link } from "react-router-dom";
import NavBarLogIn from "./NavBarLogIn";
import NavBarNotLogIn from "./NavBarNotLogIn";
import { userInfo } from "../../zustand/store";

export default function NavBarRouter() {
  const { logIn } = userInfo();
  return (
    <>
      {/* TODO: 링크 누르면 토글 닫기 기능 추가 */}
      <div>
        <Link
          to="/course"
          className="block py-2 px-4 text-sm hover:bg-[#d0d1ff]"
        >
          <b>강좌</b>
        </Link>
        <Link
          to="/study"
          className="block py-2 px-4 text-sm hover:bg-[#d0d1ff]"
        >
          <b>스터디</b>
        </Link>
        <Link
          to="/community"
          className="block py-2 px-4 text-sm hover:bg-[#d0d1ff]"
        >
          <b>커뮤니티</b>
        </Link>
        {/* TODO: 작은화면에 맞춰 더 구성해야함 */}
        {logIn ? <NavBarLogIn /> : <NavBarNotLogIn />}
      </div>
    </>
  );
}
