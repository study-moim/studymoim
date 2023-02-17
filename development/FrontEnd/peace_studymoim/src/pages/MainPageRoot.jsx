import userInfo from "../zustand/store";
import MainLogIn from "../components/mainpages/MainLogIn";
import MainNotLogIn from "../components/mainpages/MainNotLogIn";
import getArticles from "../hooks/getArticles";
import getQuestions from "../hooks/getQuestions";
import useFetch from "../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faDivide,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import MainFreeArticle from "../components/mainpages/MainFreeArticle";
import MainLectureQuestion from "../components/mainpages/MainLectureQuestion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainPageRoot.css";

export default function MainPageRoot() {
  const navigate = useNavigate();
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const freeArticleInfo = useFetch(
    `http://${API_SERVER}/api/v1/articles/free`
  ).content;
  const courseArticleInfo = useFetch(
    `http://${API_SERVER}/api/v1/articles/question`
  ).content;

  const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
    <span {...props}>{children}</span>
  );

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
        <div className="w-full my-5 flex flex-col justify-center items-center"></div>
        {logIn ? <MainLogIn /> : <MainNotLogIn />}
        <div className="flex justify-start items-center">
          <p
            className="text-lg text-left font-bold my-5 mr-3 cursor-pointer hover:text-[#989aff]"
            onClick={() => {
              navigate("/community");
            }}
          >
            # 자유 질문
          </p>
          <FontAwesomeIcon
            className="cursor-pointer hover:text-[#989aff]"
            icon={faCircleArrowRight}
            size="1x"
            onClick={() => {
              navigate("/community");
            }}
          />
        </div>

        {freeArticleInfo &&
          (freeArticleInfo.length > 2 ? (
            <Slider {...twoSettings}>
              {freeArticleInfo.map((free) => (
                <div key={free.freeBoardId}>
                  <MainFreeArticle key={free.freeBoardId} propData={free} />
                </div>
              ))}
            </Slider>
          ) : (
            <div className="flex justify-start gap-3">
              {freeArticleInfo.map((free) => (
                <div key={free.freeBoardId}  className="w-[31%]"> 
                  <MainFreeArticle key={free.freeBoardId} propData={free} />
                </div>
              ))}
            </div>
          ))}

        <div className="flex justify-start items-center">
          <p
            className="text-lg text-left font-bold my-5 mr-3 cursor-pointer hover:text-[#989aff]"
            onClick={() => {
              navigate("/community");
            }}
          >
            # 강의 질문
          </p>
          <FontAwesomeIcon
            className="cursor-pointer hover:text-[#989aff]"
            icon={faCircleArrowRight}
            onClick={() => {
              navigate("/community");
            }}
          />
        </div>

        {courseArticleInfo &&
          (courseArticleInfo.length > 2 ? (
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
          ) : (
            <div className="flex justify-start gap-3">
              {courseArticleInfo.map((course) => (
                <div key={course.questionBoardId} className="w-[31%]">
                  <MainLectureQuestion
                    key={course.questionBoardId}
                    propData={course}
                  />
                </div>
              ))}
            </div>
          ))}

        <div className="my-10"></div>
      </div>
    </div>
  );
}
