import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import MainCarousel from "../components/mainpages/MainCarousel";
import Tag from "../components/overall/Tag";
import MainSearch from "../components/mainpages/MainSearch";
import { logoImage } from "../zustand/store";
import MainCourse from "../components/mainpages/MainCourse";

export default function Search() {
  const { logos } = logoImage();
  const searchtext = useParams();
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const searchData = useFetch(
    `http://${API_SERVER}/api/v1/course/search/` + searchtext.word
  )
  
  console.log(searchData)

  return (
    <div>
    <MainCarousel />
    <div className="max-w-6xl mx-auto px-4 flex flex-col justify-start items-center gap-[20px]">
      <MainSearch />
      <div className="w-full flex flex-col justify-between items-center">
        <p className="text-xl text-left text-gray-400 my-3"># 인기태그</p>
        {/* TODO: map으로 돌려서 데이터에있는거 다 출력해야함 인기태그를 백에서 주면 좋을듯 */}
        <div className="grid gap-4 grid-cols-5 grid-flow-row auto-rows-auto my-5">
          {logos.map((logo) => (
            <Tag key={logo.id} logo={logo} />
          ))}
        </div>
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
