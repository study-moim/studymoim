import MainCourse from "./MainCourse";

export default function MainNotLogIn() {
  return (
    <>
      <p className="text-xl">실시간 인기 강좌</p>
      <div className="flex gap-[100px]">
        <MainCourse/>
        <MainCourse/>
        <MainCourse/>
      </div>
    </>
  );
}