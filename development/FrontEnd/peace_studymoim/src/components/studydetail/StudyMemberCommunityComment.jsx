export default function StudyMemberCoummunityComment({ items }) {
  const IMAGE_ROOT = import.meta.env.VITE_APP_IMAGE_ROOT;
  const image = IMAGE_ROOT + items.saveName;

  return (
    <div>
      <div
        className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-full h-[74px] relative gap-5 px-[30px] bg-white border-t-0 border-r-0 border-b-0 border-l-[11px] border-[#eef1ff]/[0.98]"
        style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
      >
        <img
          className="flex-grow-0 flex-shrink-0 rounded-full w-10"
          src={image} 
        />
       
          <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-center">
              {items.nickname}  
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-black">
            {items.content} 
          </p>
      </div>
    </div>
  );
}
