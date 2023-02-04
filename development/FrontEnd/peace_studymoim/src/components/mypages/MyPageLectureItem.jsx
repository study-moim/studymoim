import { Link } from "react-router-dom";

export default function MyPageLectureItem({ propData }) {
    const slicedTitle = propData.title.substring(0, 25) + "...";
  
  return (
    <Link
    to={`/player/${propData.lectureId}`}
    state={{
      propData: propData,
    }}
    className="cursor-pointer"
  >
        <div className="flex flex-col justify-start items-center h-[245px] relative gap-4 bg-white shadow-lg rounded-md">
          <img
            src={
              propData.thumbnail !== "path/to/image"
              ? propData.thumbnail
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebJh2gLipfb2bfmUkZSf7U39YW-7jxMH5_A&usqp=CAU"
            }
            className="w-full h-[146px] object-cover"
            />
          <p className="w-[209px] h-[65px] text-xl font-bold text-left text-black">
            {propData.title.length > 24 ? slicedTitle : propData.title}
          </p>
        </div>
            </Link>
    );
  }
  