import CourseBanner from "../components/coursepages/RecommendBanner";
import MainCourse from "../components/mainpages/MainCourse";
import useFetch from "../hooks/useFetch";
import userInfo from "../zustand/store";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CourseTage from "../components/coursepages/CourseTag";

export default function CourseMainRoot() {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const courseInfo = useFetch(`http://${API_SERVER}/api/v1/course/`);
  const tags = useFetch(`http://${API_SERVER}/api/v1/category/`);
  const { info } = userInfo();
  const [word, setWord] = useState("");
  const [tagId, setTagId] = useState("");

  let filterTitle = courseInfo.filter((course) => {
    return course.title
      .replace(" ", "")
      .toLocaleLowerCase()
      .includes(word.toLocaleLowerCase().replace(" ", ""));
  });

  let filterTag = courseInfo.filter((course) => {
    if (
      course.categoryList.length != 0 &&
      course.categoryList[0].courseCategoryId == tagId
    ) {
      return course;
    }
  });

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="mt-3">
        {/* 큰 추천 배너 */}
        {info ? <CourseBanner /> : null}
      </div>
      <div className="w-full flex">
        <div className="w-[50%] flex items-center text-xl font-bold">
          전체 강좌
        </div>
        <div className="w-[50%] flex justify-end">
          <div className="w-[80%] relative flex my-5">
            <button className="absolute right-0 bg-[#B1B2FF] rounded-full w-[30px] h-[30px] my-[5px] mr-[5px] text-white">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input
              type="text"
              placeholder="전체 강좌 검색"
              className="w-full h-[40px] border border-slate-500 rounded-[30px] pl-4 focus:outline-none focus:ring focus:ring-violet-300"
              onChange={(e) => {
                setWord(e.target.value);
                setTagId("");
              }}
            />
          </div>
        </div>
      </div>
      <p className="text-base mb-3"># 태그 검색</p>
      <div className="flex flex-row flex-wrap gap-2">
        <button
          className={
            "hover:bg-gray-200 min-w-[80px] w-fit flex flex-col justify-center items-center rounded-[10px] px-3 py-1 border "
          }
          onClick={async () => {
            setWord("");
            setTagId("");
          }}
        >
          <p className="text-[14px]">전체</p>
        </button>
        {tags.map((tag) => (
          <div
            key={tag.courseCategoryId}
            onClick={async () => {
              setWord("qwertyuiop");
              setTagId(tag.courseCategoryId);
            }}
          >
            <CourseTage tag={tag} />
          </div>
        ))}
      </div>

      <div className="gap-5 my-8 flex flex-row flex-wrap">
        {filterTitle.map((course) => (
          <MainCourse key={course.course_id} propData={course} />
        ))}
        {filterTag.map((course) => (
          <MainCourse key={course.course_id} propData={course} />
        ))}
      </div>
    </div>
  );
}
