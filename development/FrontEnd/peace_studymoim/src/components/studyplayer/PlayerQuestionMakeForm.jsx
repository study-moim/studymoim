export default function PlayerQuestionMakeForm() {
  return (
    <>
      <form className="flex flex-col justify-start items-start relative overflow-hidden gap-2.5 px-[12px] py-[10px] bg-white">
        <p className="text-xl font-bold text-left text-[#7b61ff]">질문 작성</p>
        <p className=" text-lg font-bold text-left text-black">공개 범위</p>
        <div className="flex justify-start items-start gap-5">
          <div className="rounded-[5px] bg-white border border-[#b1b2ff] text-[17px] text-center text-[#b1b2ff]">
            스터디
          </div>
          <div className="rounded-[5px] border border-[#7b7474] text-[17px] text-center text-[#7b7474]">
            전체
          </div>
        </div>
        <p className=" text-lg font-bold text-left text-black">제목</p>
        <input
          className="rounded-[5px] border border-[#7b7474]"
          placeholder="제목을 입력하세요"
        />
        <p className=" text-lg font-bold text-left text-black">내용</p>
        <textarea className="h-[350px] relative overflow-auto rounded-[5px] border border-[#7b7474]" placeholder="내용을 입력하세요"/>

        <div className="flex justify-start items-start gap-[70px] px-10">
          <div className="rounded-[5px] bg-[#d2daff] text-[17px] text-center text-black">
            취소
          </div>
          <button className="rounded-[5px] bg-[#d2daff] text-[17px] text-center text-black">
            작성
          </button>
        </div>
      </form>
    </>
  );
}
