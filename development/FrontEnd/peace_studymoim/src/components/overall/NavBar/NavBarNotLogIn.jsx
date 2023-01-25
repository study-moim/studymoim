import { Link } from "react-router-dom";

/** @function 비로그인상태네비게이션바 */
export default function NavBarNotLogIn() {
  return (
    <button
      className="px-3.5 py-[11px] rounded-[14px] bg-[#F0DB4F] hover:bg-[#DDC946] hover:scale-90"
      style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
    >
      <Link to="/login" className="text-[11px] text-white">
        로그인
      </Link>
    </button>
  );
}
