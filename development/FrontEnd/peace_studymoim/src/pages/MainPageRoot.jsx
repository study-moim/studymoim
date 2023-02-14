import MainSearch from "../components/mainpages/MainSearch";
// import TagList from "../components/overall/TagList";
import userInfo from "../zustand/store";
import MainLogIn from "../components/mainpages/MainLogIn";
import MainNotLogIn from "../components/mainpages/MainNotLogIn";
import getArticles from "../hooks/getArticles";
import getQuestions from "../hooks/getQuestions";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
// import CourseTag from "../components/coursepages/CourseTag";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainFreeArticle from "../components/mainpages/MainFreeArticle";
import MainLectureQuestion from "../components/mainpages/MainLectureQuestion";

export default function MainPageRoot() {
  const navigate = useNavigate();
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;

  // const tags = useFetch(`http://${API_SERVER}/api/v1/category/`)
  const freeArticleInfo = useFetch(
    `http://${API_SERVER}/api/v1/articles/free`
  ).content;
  const courseArticleInfo = useFetch(
    `http://${API_SERVER}/api/v1/articles/question`
  ).content;
  console.log('아티클인포임ㅋ', courseArticleInfo)
  const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
    <span {...props}>{children}</span>
  );

  const [word, setWord] = useState("");
  const [searchType, setSearchType] = useState("");

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const twoSettings = {
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: (
      <SlickButtonFix>
        <img src="/left-arrow.png" alt="" />
      </SlickButtonFix>
    ),
    nextArrow: (
      <SlickButtonFix>
        <img src="/right-arrow.png" alt="" />
      </SlickButtonFix>
    ),
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  getArticles();
  getQuestions();
  const { logIn } = userInfo();

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 justify-center items-center">
        <Slider {...settings}>
          <div>
            <img src="/banner1.png" alt="" />
          </div>
          <div>
            <img src="/banner2.png" alt="" />
          </div>
        </Slider>
        <div className="w-full my-3 flex flex-col justify-center items-center">
          <div className="w-[50%] relative h-[50px] flex my-5">
            <button className="absolute right-0 bg-[#B1B2FF] rounded-full w-[30px] h-[30px] my-[10px] mr-[10px] text-white">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input
              type="text"
              placeholder="전체 강좌 검색"
              className="w-full border border-[#B1B2FF] rounded-[30px] pl-4 bg-[#B1B2FF]/20 focus:outline-none focus:bg-white focus:border-gray-100"
              style={{ boxShadow: "0px 3px 5px 0px #B1B2FF" }}
              onChange={(e) => {
                setSearchType("word");
                setWord(e.target.value);
              }}
            />
          </div>
        </div>
        {/* <div className="w-full flex flex-col">
          <p className="text-lg text-left font-bold mb-5"># 인기태그</p>
          <div className="flex flex-row flex-wrap gap-2">
            <button
              className={
                "hover:bg-gray-200 min-w-[80px] w-fit flex flex-col justify-center items-center rounded-[10px] px-3 py-1 border "
              }
              onClick={async () => {
                setSearchType("");
              }}
            >
              <p className="text-[14px]">전체</p>
            </button>
            {tags.map((tag) => (
              <div
                key={tag.courseCategoryId}
                onClick={async () => {
                  setSearchType("tag");
                  setWord(tag.courseCategoryId);
                }}
              >
                <CourseTag tag={tag} />
              </div>
            ))}
          </div>
        </div> */}
        {/* 로그인된 상태라면 MainLogIn를 아니면 MainNotLogIn을 보여준다. */}
        {logIn ? (
          <MainLogIn searchKey={searchType} searchData={word} />
        ) : (
          <MainNotLogIn searchKey={searchType} searchData={word} />
        )}
        <div className="flex justify-start items-center">
          <p className="text-lg text-left font-bold my-5 mr-3"># 자유 질문</p>
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            onClick={() => {
              navigate("/community");
            }}
          />
        </div>

        {freeArticleInfo && (
          <Slider {...twoSettings}>
            {freeArticleInfo.map((free) => (
              <div key={free.freeBoardId}>
                <MainFreeArticle key={free.freeBoardId} propData={free} />
              </div>
            ))}
          </Slider>
        )}

        <div className="flex justify-start items-center">
          <p className="text-lg text-left font-bold my-5 mr-3"># 강의 질문</p>
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            onClick={() => {
              navigate("/community");
            }}
          />
        </div>

        {courseArticleInfo && (
          <Slider {...twoSettings}>
            {courseArticleInfo.map((course) => (
              <div key={course.questionBoardId}>
                <MainLectureQuestion
                  key={course.questionBoardId}
                  propData={course}
                />
              </div>
            ))}
          </Slider>
        )}

        <div className="my-5"></div>
      </div>
    </div>
  );
}
