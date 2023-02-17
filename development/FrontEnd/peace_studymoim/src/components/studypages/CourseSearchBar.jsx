import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";

export default function CourseSearchBar() {
  const [search, setSearch] = useState([]);
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const courseInfo = useFetch(`http://${API_SERVER}/api/v1/course/`);
  const studyId = useParams();
  const [items, setItems] = useState([{order:0, course: {course_id: 0}}]); 
  const studyInfo = useFetch(`http://${API_SERVER}/api/v1/study/${studyId.study_id}`).curricula
  useEffect(() => {
    setItems(studyInfo)
  }, [studyInfo])
 
  const updateChange = (e) => {
    // 검색한 단어 data
    let data = e.target.value;
    let filterData = courseInfo.filter((course) => { 
      return course.title
        .replace(" ", "")
        .toLocaleLowerCase()
        .includes(data.toLocaleLowerCase().replace(" ", ""));
    });
    if (data.length === 0) {
      filterData = [];
    }
    setSearch(filterData);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="w-[80%] relative flex my-5">
        <button className="absolute right-0 bg-[#B1B2FF] rounded-full w-[30px] h-[30px] my-[7px] mr-[10px] text-white">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <input
          type="text"
          placeholder="전체 강좌 검색"
          className="w-full h-[50px] border border-slate-500 rounded-[30px] pl-4 focus:outline-none focus:ring focus:ring-violet-300"
          onChange={(e) => updateChange(e)}
        />
        
      </div>
      <div className="w-[100%] h-[200px] overflow-y-scroll bg-[#E5E5E5] rounded-lg p-4">
        {search && search.map((item) => { 
          return (
            <div key={item.course_id} className="py-2 cursor-pointer" onClick={(item) => {setItems(...items, item)}}>
              <div className="font-bold text-lg">{item.title}</div>
            </div>
          );
        })} 
      </div>
    </div>
  );
}
