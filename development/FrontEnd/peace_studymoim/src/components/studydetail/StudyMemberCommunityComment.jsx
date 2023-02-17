import Moment from "moment";
import "moment/locale/ko";

export default function StudyMemberCoummunityComment({ items }) {
  const IMAGE_ROOT = import.meta.env.VITE_APP_IMAGE_ROOT;
  const image = IMAGE_ROOT + items.saveName;

  return (
    <div className="flex gap-4 items-start">
      <img className="rounded-full w-11 h-11 border" src={items.saveName? image : "/logo.png"} />
      <div>
        <div className="flex gap-3 items-center">
          <div className="text-[15px] font-bold text-center">
            {items.nickname}
          </div>
          <div className="text-[14px] text-center text-gray-500">
            {Moment(items.publishTime).format("YYYY년 MM월 DD일 HH:mm")}
          </div>
        </div>
        <p className="text-[16px] text-black">{items.content}</p>
      </div>
    </div>
  );
}
