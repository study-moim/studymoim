export default function ButtonModifyDelete({
  handleRemove,
  clickModify,
  isModify
}) {
  return (
    <>
      {!isModify ? (
        <div>
          <button
            onClick={clickModify}
            className="text-[14px] text-center hover:font-bold text-[#aaab5a]"
          >
            수정 &nbsp;
          </button>
          <button
            onClick={handleRemove}
            className="text-[14px] text-center hover:font-bold text-red-400"
          >
            삭제
          </button>
        </div>
      ) : null}
    </>
  );
}
