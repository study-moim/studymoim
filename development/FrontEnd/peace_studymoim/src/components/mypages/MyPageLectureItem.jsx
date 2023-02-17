import { Link } from "react-router-dom";

export default function MyPageLectureItem({ propData }) {

  return (
    <Link
      to={`/player/${propData.lectureId}`}
      state={{
        propData: propData,
      }}
      className="cursor-pointer"
    >
      <div className="h-[140px] w-[180px] relative mb-5">
        <img
          src={
            propData.thumbnail !== "path/to/image"
              ? propData.thumbnail
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebJh2gLipfb2bfmUkZSf7U39YW-7jxMH5_A&usqp=CAU"
          }
          className="w-full h-[100px] object-cover rounded-[15px]"
        />
        <div className="w-full">
          <p className="text-[13px] px-3 pt-3 h-[60px] truncate">
            {propData.title}
          </p>
          <p className="text-[12px] px-3">
            {propData.courseProviderName}
          </p>
        </div>
      </div>
    </Link>
  );
}
