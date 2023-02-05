import { useState } from "react";
import useFetch from "../../hooks/useFetch";
export default function CourseSearchBar() {
  const [searchtext, setSearchtext] = useState("");
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const data = useFetch(`http://${API_SERVER}/api/v1/course/search/${searchtext}`); 

  return (
    <div className="w-full"> 
      <input
        type="text"
        value={searchtext}
        onChange={(e) => {
          setSearchtext(e.target.value);
        }}
        className="w-full h-[90px] relative rounded border-2 border-[#b1b2ff]"
      />
    </div>
  );
}
