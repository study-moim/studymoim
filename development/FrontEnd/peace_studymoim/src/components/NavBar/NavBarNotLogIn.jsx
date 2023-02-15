import LoginModal from "./LoginModal";
import { useState } from "react";

/** @function 비로그인상태네비게이션바 */
export default function NavBarNotLogIn() {
  const [showModal, setShowModal] = useState(false);

  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <>
      <button
        className="text-[14px] w-[80px] text-white px-3 py-[5px] rounded-[10px] bg-[#F7E600] hover:bg-[#ebd43c]"
        onClick={() => setShowModal(true)}
      >
        로그인
      </button>
      
      {showModal ? (
        <LoginModal
          onCancel={closeModalHandler}
          onConfirm={closeModalHandler}
        />
      ) : null}
    </>
  );
}
