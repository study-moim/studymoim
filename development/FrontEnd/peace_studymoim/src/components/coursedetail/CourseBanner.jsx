export default function CourseBanner() {
  return (
    <div
      className="bg-[#D2DAFF] h-[300px] flex flex-row my-10"
    >
      <div className="w-6/12 h-full flex-col flex justify-between p-5">
        <div>
          <p className="text-4xl mt-4 font-bold">[기초강좌 피그마 기초이론]</p>
          <p className="text-2xl mt-6 font-bold">오쌤의 니가스터디</p>
          <p className="text-base mt-3 text-[#646464]">
            총 N시간 N분 28개 강의
          </p>
        </div>
        <div className="flex gap-[10px] items-center">
          <button
            className="text-2xl text-white border-black font-bold bg-[#FF6D2C] py-2 px-4 rounded-xl
          border-t-[2px] border-l-[2px] border-r-[6px] border-b-[6px] hover:bg-[#c85c2e] hover:scale-95
          "
          >
            수강하기
          </button>
          <div className="flex gap-[10px]">
            <p className="text-2xl font-bold text-red-600">♥</p>
            <p className="text-2xl font-bold">126</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-6/12">
        <img className="w-[350px] h-[250px]" src="/django.png"></img>
      </div>
    </div>
  );
}
