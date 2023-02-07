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
        className="mt-[5px] px-3.5 py-[6px] rounded-[14px] bg-[#F0DB4F] text-[11px] text-white hover:bg-[#DDC946] hover:scale-90"
        style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
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
