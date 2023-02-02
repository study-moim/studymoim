import { Link } from "react-router-dom";
import BellIcon from "./BellIcon";
import MailIcon from "./MailIcon";
import { userInfo } from "../../zustand/store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Backdrop from "../overall/Backdrop";
import RingModal from "./RingModal";

/** @function 로그인된상태네비게이션바 */
export default function NavBarLogIn() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { setLogOut } = userInfo();
  
  function closeModalHandler() {
    setShowModal(false);
  }


  function logoutHandler() {
    setLogOut();
    localStorage.clear();
    navigate("/");
  }

  return (
    <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 w-[360px] relative gap-[20px]">
      {/* TODO: 알림모달? 드랍박스? 기능넣고, 필요한 화면 추가 */}
      <div onClick={() => setShowModal(true)}>
        <BellIcon />
      </div>

      {showModal ? <RingModal onCancel={closeModalHandler} /> : null}

      {showModal ? <Backdrop onCancel={closeModalHandler} /> : null}
      <Link to="/mail">
        <MailIcon />
      </Link>
      <Link to={`/mypage/0`} state={{ clickWho: 0 }}>
        <button
          className="text-[11px] text-white px-3.5 py-[6px] rounded-[14px] bg-[#f0db4f] hover:bg-[#ebd43c] hover:scale-90"
          style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
        >
          MyPage
        </button>
      </Link>
      {/* TODO: 로그아웃 버튼 따로 만들고 기능넣기 */}
      <button
        className="text-[11px] px-3.5 py-[6px] rounded-[14px] text-white bg-[#ff7262] hover:bg-[#ff5441] hover:scale-90"
        style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
        onClick={logoutHandler}
      >
        로그아웃
      </button>
    </div>
  );
}
