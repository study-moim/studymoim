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
    <div className="w-full flex justify-around items-center flex-grow-0 flex-shrink-0 relative gap-[43px] bg-[#b1b2ff]">
   
      <FontAwesomeIcon icon={faBullhorn} className="flex-grow-0 flex-shrink-0 text-xl font-bold justify-center p-2.5 pl-5 text-white"/>
      <p className="flex-grow w-8/12 text-xl text-center">
        {propData.notice && propData.notice}
      </p>
      
      {userInfo === props.userId ? 
      <FontAwesomeIcon icon={faPenToSquare} className="flex-grow-0 flex-shrink-0 text-xl font-bold text-center text-white p-2.5 pr-5" onClick={() => setShowModal(true)} /> 
      : null 
      }
    
      {showModal ? <NoticeModal onCancel={closeModalHandler} /> : null}
    </div>
  );
}
