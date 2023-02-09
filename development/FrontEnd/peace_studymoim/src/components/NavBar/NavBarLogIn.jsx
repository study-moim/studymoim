import { Link, NavLink } from "react-router-dom";
import BellIcon from "./BellIcon";
import MailIcon from "./MailIcon";
import userInfo from "../../zustand/store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import RingModal from "./RingModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

/** @function 로그인된상태네비게이션바 */
export default function NavBarLogIn() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { setLogOut , info } = userInfo();
  
  if (!info) {
    return null
  }

  function closeModalHandler() {
    setShowModal(false);
  }


  function logoutHandler() {
    setLogOut();
    localStorage.clear();
    navigate("/");
  }

  return (
    <div className="flex justify-end items-center w-[360px] relative gap-[10px]">
      {/* TODO: 알림모달? 드랍박스? 기능넣고, 필요한 화면 추가 */}
      <div onClick={() => setShowModal(true)} className="w-[30px] flex items-center hover:scale-110 cursor-pointer">
        <FontAwesomeIcon icon={faBell} className="text-[20px]"/>
      </div>
      {showModal ? <RingModal onCancel={closeModalHandler} /> : null}
      <Link to="/mail" className="w-[30px] flex items-center hover:scale-110 cursor-pointer">
      <FontAwesomeIcon icon={faEnvelope} className="text-[20px]"/>
      </Link>
      <a href={`/mypage/${info.userId}`}>
        <button
          className="text-[14px] w-[80px] text-white px-3 py-[5px] rounded-[10px] bg-[#f0db4f] hover:bg-[#ebd43c]"
        >
          MyPage
        </button>
      </a>
      {/* TODO: 로그아웃 버튼 따로 만들고 기능넣기 */}
      <button
        className="text-[14px] w-[80px] text-white px-3 py-[5px] rounded-[10px] bg-[#ff7262] hover:bg-[#ff5441]"
        onClick={logoutHandler}
      >
        로그아웃
      </button>
    </div>
  );
}
