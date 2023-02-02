import MyPageCourse from '../mypages/MyPageCourse'; 
import CourseSearchBar from '../studypages/CourseSearchBar';
export default function LectureManage() {
  return (
    <>
      <div className="flex flex-col justify-start items-center h-[1512px] relative gap-[78px] px-[120px] py-[50px]">
        <CourseSearchBar /> 
        <MyPageCourse /> 
      </div>
    </>
  );
}
