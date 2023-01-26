export default function PlayerMemo() {
  return (
    <>
      <form className="flex flex-col justify-end items-end w-full h-full">
        <textarea className="w-full h-full border" placeholder="마크다운 양식으로 작성하기"></textarea>
        <button className="shadow-innerDown w-[100px] h-[30px] mt-[10px] bg-[#b1b2ff] font-bold text-white rounded-md hover:bg-[#8b8dff] hover:shadow-innerUp">저장하기</button>
      </form>
    </>
  );
}
