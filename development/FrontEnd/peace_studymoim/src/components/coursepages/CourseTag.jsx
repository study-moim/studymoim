export default function Tag({ tag }) {
  return (
    <button className={"hover:bg-gray-200 min-w-[80px] w-fit flex flex-col justify-center items-center rounded-[10px] px-2 py-1 border "}>
        <div className="flex justify-center items-center gap-2">
            <img
              src={tag.imgurl}
              alt="x"
              className="w-5 h-5 rounded-full"
            />
            <p className="text-[14px]">
              {tag.name_eng}
            </p>
          </div>
    </button>
  );
}
