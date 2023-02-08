import useFetch from "../../hooks/useFetch";
import userInfo from "../../zustand/store";
import MainCourse from "./MainCourse";
export default function MainLogIn({searchKey, searchData}) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const { info } = userInfo(); 
  const userId = info.userId;
  const userNickname = info.nickname; 
    
  const recommendCourses = useFetch(`http://${API_SERVER}/api/v1/user/${userId}/recommend/courses`);
  
  let filterInfo = recommendCourses.filter((course) => {
    if(searchKey == "word"){
      return course.title
      .replace(" ", "")
      .toLocaleLowerCase()
      .includes(searchData.toLocaleLowerCase().replace(" ", ""));
    }else if(searchKey == "tag"){
      if (
        course.categoryList.length != 0 &&
        course.categoryList[0].courseCategoryId == searchData
      ) {
        return course;
      }
    }else{
      return recommendCourses;
    }
  });


  return (
    <>
    <p className="text-lg text-left font-bold my-5">#{userNickname}님 추천강좌</p>
      <div className="gap-5 mb-8 flex flex-row flex-wrap">
        {filterInfo.map((course) => (
          <MainCourse key={course.course_id} propData={course} />
        ))}
      </div>
    </>
  );
}