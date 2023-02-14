import MainCourse from "./MainCourse";
import useFetch from "../../hooks/useFetch";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

export default function MainNotLogIn({ searchKey, searchData }) {
  const navigate = useNavigate();
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const courseInfo = useFetch(`http://${API_SERVER}/api/v1/course/`); 
  // const freeArticleInfo = useFetch(`http://${API_SERVER}/api/v1/free`); 
  // const courseArticleInfo = useFetch(``); 
  const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
    <span {...props}>{children}</span>
  );

  const settings = {
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
    slidesToShow: 4,
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

  let filterInfo = courseInfo.filter((course) => {
    if (searchKey == "word") {
      return course.title
        .replace(" ", "")
        .toLocaleLowerCase()
        .includes(searchData.toLocaleLowerCase().replace(" ", ""));
    } else if (searchKey == "tag") {
      if (
        course.categoryList.length != 0 &&
        course.categoryList[0].courseCategoryId == searchData
      ) {
        return course;
      }
    } else {
      return courseInfo;
    }
  });

  return (
    <>
      <div className="flex justify-start items-center">
        <p className="text-lg text-left font-bold my-5 mr-3"># 전체 강좌</p>
        <FontAwesomeIcon
          icon={faCircleArrowRight}
          onClick={() => {
            navigate('/Course');
          }}
        />
      </div>

      <Slider {...settings}>
        {filterInfo.map((course) => (
          <div key={course.course_id}>
            <MainCourse key={course.course_id} propData={course} />
          </div>
        ))}
      </Slider>

      {/* <div className="flex justify-start items-center">
        <p className="text-lg text-left font-bold my-5 mr-3"># 자유 게시글</p>
        <FontAwesomeIcon
          icon={faCircleArrowRight}
          onClick={() => {
            navigate('/community');
          }}
        />
      </div>

      <Slider {...settings}>
        {freeArticleInfo.map((course) => (
          <div key={course.course_id}>
            <MainCourse key={course.course_id} propData={course} />
          </div>
        ))}
      </Slider> */}

    </>
  );
}
