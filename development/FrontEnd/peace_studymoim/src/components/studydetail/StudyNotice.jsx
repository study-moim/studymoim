import NoticeModal from "./NoticeModal";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
export default function StudyNotice({ propData, props, userInfo }) {
  const [showModal, setShowModal] = useState(false);
  function closeModalHandler() {
    setShowModal(false);
  }

  useEffect(() => {}, [props, userInfo]);

  return (
    <div className="py-2 px-5 w-full flex items-center relative border border-[#b1b2ff] rounded-[5px]">
      <FontAwesomeIcon icon={faBullhorn} className="text-xl justify-center pr-8" />
      <p className="flex-grow w-8/12 text-[17px]">{propData.notice}</p>

      {userInfo === props.userId ? (
        <div
          className="flex items-center gap-3  cursor-pointer hover:text-[#8871f9]"
          onClick={() => setShowModal(true)}
        >
          <FontAwesomeIcon icon={faPenToSquare} className="text-[17px] text-center" />
          공지 작성
        </div>
      ) : null}

      {showModal ? <NoticeModal onCancel={closeModalHandler} /> : null}
    </div>
  );
}
