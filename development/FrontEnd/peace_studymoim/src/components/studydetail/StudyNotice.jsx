export default function StudyNotice() {
  return (
    <div className="w-full flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[43px] rounded-[20px] bg-[#fdf2a5]">
      <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-center justify-center">
        전체 공지
      </p>
      <p className="flex-grow w-[1062px] text-[36px] text-center">
        공지 내용 
      </p>
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 rounded-[20px] bg-[#ff7262]">
        <button className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-white">EDIT</button>
      </div>
    </div>
  );
}
