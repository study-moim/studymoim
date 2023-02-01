export default function LectureShort({ propData, lectureIndex }) {
  return (
    <div className="px-10 w-full h-[180px] flex flex-row justify-between items-center border gap-5">
      <p className="text-3xl font-bold pr-3">{lectureIndex}</p>
      <img className="w-[300px] h-full" src={propData.thumbnail} alt="x" />
      <p className="text-3xl font-bold">{propData.title}</p>
      <div className="text-3xl pt-1 bg-[#a294fa] text-white text-center w-[50px] h-[50px] rounded-full cursor-pointer">
        ▶
      </div>
    </div>
  );
}
