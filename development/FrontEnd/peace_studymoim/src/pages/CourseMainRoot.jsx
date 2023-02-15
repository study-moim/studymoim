import CourseBanner from "../components/coursepages/RecommendBanner";
import MainCourse from "../components/mainpages/MainCourse";
import useFetch from "../hooks/useFetch";
import userInfo from "../zustand/store";
import {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import CourseTag from "../components/coursepages/CourseTag";
import NavPagination from "../components/NavBar/NavPagination.jsx";

export default function CourseMainRoot() {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  //const courseInfo = useFetch(`http://${API_SERVER}/api/v1/course/`);
  const tags = useFetch(`http://${API_SERVER}/api/v1/category/`);
  const { info } = userInfo();
  const [page, setPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [key, setKey] = useState("word");
  const [word, setWord] = useState("");
  const [tagId, setTagId] = useState(null);
  const [params, setParams] = useState({
      "key": "word",
      "word": "",
      "page": 0,
      "size": 8
  })
  useEffect(() => {
    getPage(tagId, word);
  }, [params])

    useEffect(() => {
        const getParams = () => {
            setParams({
                "key": key,
                "word": word,
                "page": currentPage-1,
                "size": 8
            })
        } 
        getParams();
    }, [key, word, currentPage]);

    const getPage = async () => {
        let resp = null
        let data = null;
        if(params.key == 'word'){
            resp = await fetch(`http://${API_SERVER}/api/v1/course?key=title&word=${params.word}&page=${params.page}&size=${params.size}`);
    
            data = await resp.json();
        }
        else if(params.key == 'tag'){
            resp = await fetch(`http://${API_SERVER}/api/v1/course/category/${params.word}?page=${params.page}&size=${params.size}`);
            data = await resp.json();
        } else {
            resp = await fetch(`http://${API_SERVER}/api/v1/course?key=title&word=&page=${params.page}&size=${params.size}`);
            data = await resp.json();
        }
        setPage(data);
    }
  const getPageByTitle = async (word) => {
      let query = Object.keys(params)
          .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
          .join('&');
      let resp = await fetch(`http://${API_SERVER}/api/v1/course`);
      let data = await resp.json();
      setPage(data);
  }

  // let filterTitle = courseInfo.filter((course) => {
  //   return course.title
  //     .replace(" ", "")
  //     .toLocaleLowerCase()
  //     .includes(word.toLocaleLowerCase().replace(" ", ""));
  // });

  // let filterTag = courseInfo.filter((course) => {
  //   if (
  //     course.categoryList.length != 0 &&
  //     course.categoryList[0].courseCategoryId == tagId
  //   ) {
  //     return course;
  //   }
  // });
  // let filterTag = courseInfo.filter((course) => {
  //   if (course.categoryList.length > 0) {
  //     let real = false
  //     course.categoryList.forEach(element => {
  //       if (element.courseCategoryId === tagId) {
  //         real = true;
  //       }
  //     })
  //     if (real) {
  //       return course
  //     }
  //   }
  // });

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="mt-3">
        {/* 큰 추천 배너 */}
        {info ? <CourseBanner /> : null}
      </div>
      <div className="w-full flex">
        <div className="w-[50%] flex items-center text-xl font-bold">
          전체 강좌
        </div>
        <div className="w-[50%] flex justify-end">
          <div className="w-[80%] relative flex my-5">
            <button className="absolute right-0 bg-[#B1B2FF] text-[15px] rounded-full w-[30px] h-[30px] my-[5px] mr-[5px] text-white">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input
              type="text"
              placeholder="전체 강좌 검색"
              className="w-full h-[40px] border text-[14px] border-slate-500 rounded-[30px] pl-4 focus:outline-none focus:ring focus:ring-violet-300"
              onChange={(e) => {
                  setKey('word')
                  setWord(e.target.value)
                  setCurrentPage(1)
              }}
            />
          </div>
        </div>
      </div>
      <p className="text-base mb-3"># 태그 검색</p>
      <div className="flex flex-row flex-wrap gap-2">
        <button
          className={
            "hover:bg-gray-200 min-w-[80px] w-fit flex flex-col justify-center items-center rounded-[10px] px-3 py-1 border "
          }
          onClick={async () => {
              setKey('')
              setWord('')
              setCurrentPage(1)
          }}
        >
          <p className="text-[14px]">전체</p>
        </button>
        {tags.map((tag) => (
          <div
            key={tag.courseCategoryId}
            onClick={async () => {
                setKey("tag");
                setWord(tag.courseCategoryId);
                setCurrentPage(1)
            }}
          >
            <CourseTag key={tag.courseCategoryId} tag={tag} />
          </div>
        ))}
      </div>

      <div className="gap-5 my-8 flex flex-row flex-wrap">
        {page ? page.content.map((course) => (
          <MainCourse key={course.course_id} propData={course} />
        )) : null}
      </div>
        <NavPagination
            firstLabel={<FontAwesomeIcon icon={faChevronLeft}/>}
            lastLabel={<FontAwesomeIcon icon={faChevronRight}/>}
            breakLabel="..."
            onPageChange={setCurrentPage}
            pageCount={page ? page.totalPages : 0}
            pageRangeDisplayed={5}
        />
    </div>
  );
}
