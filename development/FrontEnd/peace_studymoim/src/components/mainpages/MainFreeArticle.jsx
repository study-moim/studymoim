import { Link } from "react-router-dom";

export default function MainFreeArticle({ propData }) {
  const IMAGE_ROOT = import.meta.env.VITE_APP_IMAGE_ROOT;
  const image = IMAGE_ROOT + propData.user.saveName;

  if (propData.content.length >= 30) {
    return propData.content.substr(0, 30) + "..."; 
  }
  
  return (
    <Link
      to={`community/free/${propData.freeBoaredId}`}
      state={{
        propData: propData,
      }}
    >
      <div className="min-w-[350px] max-w-[350px] h-[150px] rounded-[15px] border p-5 cursor-pointer gap-2 transition ease-in-out duration-300 hover:-translate-y-1.5 hover:shadow-md">
        <div className="flex flex-col gap-2 h-[150px]">
          <p className="text-[15px] font-bold">{propData.title}</p>
          <p className="text-[13px] text-gray-500">{propData.content}</p>
          <div className="flex justify-start items-center">
            <img
              className="w-10 rounded-full border mr-3"
              src={propData.user.saveName ? image : "/logo.png"}
            />
            <p className="text-[13px] text-[#B1B2FF]">
              {propData.user.nickname}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
