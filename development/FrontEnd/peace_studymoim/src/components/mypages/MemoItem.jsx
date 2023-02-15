import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import MemoModal from "./MemoModal";
import Moment from "moment/moment";
import "moment/locale/ko";

export default function MemoLecture({ lectureData, userId }) {
  const lectureId = lectureData.lectureId;
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const memoInfo = useFetch(`http://${API_SERVER}/api/v1/note/${lectureId}/${userId}`);
  const slicedTitle = lectureData.title.substring(0, 40) + "...";
  const [showModal, setShowModal] = useState(false);

  function closeModalHandler() {
    setShowModal(!showModal);
  }

  return (
    <div
      className="flex justify-start items-center relative p-[10px] mx-[20px] rounded-[15px] bg-white border-[1px] border-[#eef1ff]/[0.98] mt-1 z-1 hover:border-[#7b61ff]"
    >
      <p className="text-[13px] min-w-[60%] max-w-[60%]">
        {lectureData.title.length > 40 ? slicedTitle : lectureData.title}
      </p>
      <p className="text-[12px] text-gray-500 min-w-[30%] max-w-[30%]">
        {Moment(memoInfo.lastModifiedDate).format("YY-MM-DD / HH:mm 작성")}
      </p>
      <button onClick={() => setShowModal(!showModal)} className="text-[13px] text-right font-bold text-[#7b61ff] min-w-[10%] max-w-[10%]">
        자세히
      </button>
      {showModal ? (
        <MemoModal
          key={memoInfo.noteId}
          lectureData={lectureData}
          memoData={memoInfo}
          onCancel={closeModalHandler}
        />
      ) : null}
    </div>
  );
}
