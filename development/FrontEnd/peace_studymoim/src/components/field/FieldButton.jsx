import { useState } from "react";
export default function FieldButton(props) {
  const [isActive, SetIsActive] = useState(false);
  
  return (
    <div>
      {!isActive ? (
        <div
          onClick={() => {
            SetIsActive(!isActive);
            console.log(isActive);
          }}
          className={
            "flex justify-center items-center relative px-[46px] py-7 rounded-[20px] bg-white border-[3px] border-[#b1b2ff] shadow-innerDown text-xl font-medium text-center text-black active:text-[#7b61ff] cursor-pointer" +
            (isActive && "")
          }
        >
          {props.field}
        </div>
      ) : (
        <div
          onClick={() => {
            SetIsActive(!isActive);
            console.log(isActive);
          }}
          className={
            "flex justify-center items-center relative px-[46px] py-7 rounded-[20px] bg-[#e7e7e7] border-[3px] border-[#b1b2ff] shadow-innerUp text-xl font-medium text-center text-black active:text-[#7b61ff] cursor-pointer" +
            (isActive && "")
          }
        >
          {props.field}
        </div>
      )}
    </div>
  );
}

//
