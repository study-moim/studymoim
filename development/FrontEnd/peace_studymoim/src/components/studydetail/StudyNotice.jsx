import NoticeModal from "./NoticeModal";
import { useState, useEffect } from "react";

export default function StudyNotice({ propData }) {
  const [showModal, setShowModal] = useState(false);
  function closeModalHandler() {
    setShowModal(false);
  }
  useEffect(() => {}, [propData]);

  return (
    <div className="w-full flex justify-around items-center flex-grow-0 flex-shrink-0 relative gap-[43px] rounded-[20px] bg-[#fdf2a5]">
      <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center justify-center w-2/12">
        전체 공지
      </p>
      <p className="flex-grow w-8/12 text-xl text-center">
        {propData.notice && propData.notice}
      </p>
      {/* TODO: 방장만 되게 해야하는데 외 않 돼?  */}
      <button
        onClick={() => setShowModal(true)}
        className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-white  bg-[#ff7262] rounded-[20px] p-2.5"
      >
        EDIT
      </button>

      {showModal ? <NoticeModal onCancel={closeModalHandler} /> : null}
    </div>
  );
}
