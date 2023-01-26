export default function CommunityInnerCommentForm() {
  return (
    <form className="flex flex-col items-end gap-5 w-9/12 m-[40px]">
      <textarea
        className="w-full pl-2.5 pr-[100px] pt-[14px] pb-[50px] bg-white border-[3px] border-[#b1b2ff]"
        style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
        placeholder="답글을 입력해주세요."
      />
      <button className="p-2.5 text-[12px] rounded-[10px] font-bold text-left text-white bg-[#b1b2ff] hover:bg-[#9697ff] hover:scale-95">
        작성하기
      </button>
    </form>
  );
}
