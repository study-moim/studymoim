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
            className="text-[14px] text-center hover:font-bold"
          >
            수정 &nbsp;
          </button>
          <button
            onClick={handleRemove}
            className="text-[14px] text-center hover:font-bold "
          >
            삭제
          </button>
        </div>
      ) : null}
    </>
  );
}
