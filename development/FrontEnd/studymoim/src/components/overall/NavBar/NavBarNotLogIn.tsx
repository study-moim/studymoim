import { Link } from "react-router-dom";
import NavBarRouter from "./NavBarRouter";

/** @function 비로그인상태네비게이션바 */
export default function NavBarNotLogIn() {
  return (
    <div className="flex justify-between items-center w-full pr-[17px] bg-white">
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
        <NavBarRouter />
      </div>
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-[26px]">
        <button
          className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-3.5 py-[11px] rounded-[14px] bg-[#ffe3ba]"
          style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
        >
          <Link
            to="/login"
            className="flex-grow-0 flex-shrink-0 text-xl text-left text-black"
          >
            로그인
          </Link>
        </button>
      </div>
    </div>
  );
}
