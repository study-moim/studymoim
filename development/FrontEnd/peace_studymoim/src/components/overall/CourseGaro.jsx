import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
export default function CourseGaro({ item }) {
  return (
    <>
      <div className="w-[798px] h-[220px] relative"> 
        <div className="w-[412px] h-[220px] absolute left-0 top-0">
          <img
            src={item.course.thumbnail}
            className="w-[418px] h-[220px] absolute left-[-7px] top-[-1px] object-none"
          />
        </div>
        <div className="flex flex-col justify-start items-start w-[380px] h-[219px] absolute left-[418px] top-0 gap-1.5">
          <p className="flex-grow-0 flex-shrink-0 w-[435.98px] h-[41.32px] text-[34px] font-bold text-left text-black">
            {item.course.title}
          </p>
          <p className="flex-grow-0 flex-shrink-0 w-[172.07px] text-xl text-left text-[#bd6ffc]">
          {item.course.providerChannelName}
          </p>
          <p className="flex-grow-0 flex-shrink-0 w-[162.57px] text-xl text-left text-[#b1b2ff]">
          강의 수: {item.course.lectures.length}개
          </p>
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
    </>
  );
}
