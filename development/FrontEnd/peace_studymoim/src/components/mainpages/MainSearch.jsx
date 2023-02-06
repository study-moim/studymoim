import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function MainSearch() {
  const [word, setWord] = useState("");

  // 검색을 하면 해당 주소로 이동하게 설정 - router에 등록되어 있음
  const onSubmit = async () => {
    window.location.href = "/search/" + word;
  };

  
  const onKeyPress = (e) => {
    if(e.key == 'Enter') {
      onSubmit(); 
    }
  }

  return (
    <div 
    className="w-[80%] relative h-[50px] flex my-5"
    
    >
      <button className="absolute right-0 bg-[#B1B2FF] rounded-full w-[30px] h-[30px] my-[7px] mr-[10px] text-white">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      <input 
        type="text"
        placeholder="전체 강좌 검색" 
        className="w-full border border-[#B1B2FF] rounded-[30px] pl-4 bg-[#B1B2FF]/20 focus:outline-none focus:bg-white focus:border-gray-100"
        style={{ boxShadow: "0px 3px 5px 0px #B1B2FF" }}
        onChange={(e) => setWord(e.target.value)}
        onKeyPress={onKeyPress} />
    </div>
  );
}