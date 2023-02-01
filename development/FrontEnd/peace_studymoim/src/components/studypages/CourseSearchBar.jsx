import { useState } from "react";
import useFetch from "../../hooks/useFetch";
export default function CourseSearchBar() {
  const [search, setSearch] = useState("");
  useFetch(`https://localhost:8080/api/v1/course/info/${search}`)
  // 뻐킹 검색 안돼서 포기 
  return (
    <div className="w-full"> 
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="w-full h-[90px] relative rounded border-2 border-[#b1b2ff]"
      />
    </div>
  );
}
