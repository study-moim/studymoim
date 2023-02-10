export default function MyPageUpdateForm() {
  return (
    <>
      <div className="min-w-[400px] max-w-[40%] ">
        <div className="flex flex-col justify-center items-center">
          <p className="text-[15px] font-bold text-left text-black">
            관심 분야
          </p>
          <button className="text-[15px] font-bold text-left text-black">
            수정하기
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[15px] font-bold text-left text-black">
            프로필 사진
          </p>
          <button className="text-[15px] font-bold text-left text-black">
            파일 찾기
          </button>
          <button className="text-[15px] font-bold text-left text-black">
            삭제
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[15px] font-bold text-left text-black">
            Email
          </p>
        </div>
        <button className="text-[15px] font-bold text-center text-black">
          수정하기
        </button>
      </div>
    </>
  );
}
