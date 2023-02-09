export default function StudyMemberCoummunityComment({ items }) {

  return (
    <div>
      <div
        className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-full h-[74px] relative gap-5 px-[30px] bg-white border-t-0 border-r-0 border-b-0 border-l-[11px] border-[#eef1ff]/[0.98]"
        style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
      >
        {/* <img
          className="flex-grow-0 flex-shrink-0"
          src="picture=true,-edit-icon=false.png"
        /> */}
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
          <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-center">
            <span className="flex-grow-0 flex-shrink-0 text-xl font-bold text-center text-black">
              {items.nickname}  
            </span>
            {/* <span className="flex-grow-0 flex-shrink-0 text-xl fo2nt-bold text-center text-[#7b61ff]">
              방장
            </span> */}
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-black">
            {items.content} 
          </p>
        </div>
      </div>
    </div>
  );
}
