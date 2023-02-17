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
        className="text-left text-[16px] hover:text-[#B1B2FF]"
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
