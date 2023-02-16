import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import MemoCourse from "./MemoCourse";

export default function MyPageMemo({ getPageName }) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const noteInfo = useFetch(
    `http://${API_SERVER}/api/v1/note/course/${getPageName}`
  );

  return (
    <>
      {noteInfo.length > 0 ? (
        <div className="max-w-2xl">
          {noteInfo.map((data) => (
            <MemoCourse key={data.course_id} courseData={data} />
          ))}
        </div>
      ) : (
        <div className="w-full h-[50%] flex flex-col justify-center items-center gap-10">
          <div className="text-3xl">작성한 메모가 없습니다.</div>
          <Link
            to={"/study"}
            className="border w-[30%] text-center border-[#bdbef9] h-[50px] pt-3 hover:bg-[#bdbef9] rounded-lg font-bold"
          >
            강좌 수강하고 메모하기
          </Link>
        </div>
      )}
    </>
  );
}
