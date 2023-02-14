import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import SelectedCourse  from "./SelectedCourse";

export default function DeleteModal(props) {
  const [search, setSearch] = useState("");
  const [selectCourse, setSelectCourse] = useState([]);
  const [selectCourseTitle, setSelectCourseTitle] = useState([]);
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const data = useFetch(`http://${API_SERVER}/api/v1/course/`);

  const filterTitle = data.filter((p) => {
    return p.title
      .replace(" ", "")
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase());
  });

  window.onkeydown = function (event) {
    if (event.keyCode == 27) {
      props.onCancel();
    }
  };

  const navigate = useNavigate();

  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    navigate("/study");
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-slate-200 rounded-t">
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                className="w-full h-[90px] relative rounded border-2 border-[#b1b2ff]"
              />
            </div>
            {/*body*/}
            <div>
              {selectCourseTitle.map((course) => (
                <SelectedCourse propData={course}/>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 grid-cols-2">
              {filterTitle.map((course) => (
                <div
                  onClick={() => {
                    setSelectCourse([...selectCourse, course.course_id]);
                    setSelectCourseTitle([...selectCourseTitle, course.title]);
                  }}
                >
                  <div className="relative w-[234px]">
                    <div className="flex flex-col justify-start items-center h-[245px] relative gap-4 bg-white shadow-lg rounded-md">
                      <img
                        src={
                          course.thumbnail !== "path/to/image"
                            ? course.thumbnail
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebJh2gLipfb2bfmUkZSf7U39YW-7jxMH5_A&usqp=CAU"
                        }
                        className="w-full h-[146px] object-cover"
                      />
                      <p className="w-[209px] h-[65px] text-xl font-bold text-left text-black">
                        {course.title.length > 24
                          ? course.title.substring(0, 25) + "..."
                          : course.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/*footer*/}
            <div className="flex items-center justify-between p-6 gap-5">
              <button
                className="flex justify-center items-center flex-grow h-11 relative gap-2.5 px-1 py-3.5 rounded-lg bg-white border border-[#4f4f4f] text-sm text-[#4f4f4f]"
                onClick={confirmHandler}
              >
                네, 취소하겠습니다.
              </button>
              <button
                className="flex justify-center items-center flex-grow h-11 relative gap-2.5 px-1 py-3.5 rounded-lg bg-[#b1b2ff] text-sm text-white"
                onClick={cancelHandler}
              >
                아니요, 다시 돌아갈래요.
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
