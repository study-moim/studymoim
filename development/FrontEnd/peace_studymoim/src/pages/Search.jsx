import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import TagList from "../components/overall/TagList";
import MainSearch from "../components/mainpages/MainSearch";
import MainCourse from "../components/mainpages/MainCourse";

export default function Search() {
  const searchtext = useParams();
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const searchData = useFetch(
    `http://${API_SERVER}/api/v1/course/search/` + searchtext.word
  );

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 flex flex-col justify-start items-center gap-[20px]">
        <MainSearch />
        <div className="w-full flex flex-col justify-between items-center">
          <p className="text-xl text-left text-gray-400 my-3"># 검색결과</p>
            <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-10 grid-cols-2">
              {searchData.map((course) => (
                <MainCourse key={course.course_id} propData={course} />
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}
