import useFetch from "../../hooks/useFetch";
import userInfo from "../../zustand/store";
import MainStudy from "./MainStudy";
import MainCourse from "./MainCourse";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import StudyListItem from "../mypages/StudyLiseItem";

export default function MainLogIn({ searchKey, searchData }) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const { info } = userInfo();
  const userId = info.userId;
  const userNickname = info.nickname;
  const navigate = useNavigate();

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
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const recommendCourses = useFetch(
    `http://${API_SERVER}/api/v1/user/${userId}/recommend/courses`
  );
  const myStudies = useFetch(
    `http://${API_SERVER}/api/v1/user/${userId}/studies`
  );
  const studyInfo = useFetch(`http://${API_SERVER}/api/v1/study/`);

  let filterInfo = recommendCourses.filter((course) => {
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
      return recommendCourses;
    }
  });

  return (
    <>
      <div className="flex justify-start items-center">
        <p className="text-lg text-left font-bold my-5">
          # {userNickname}님 추천강좌
        </p>
      </div>
      {filterInfo.length > 3 ? (
        <Slider {...settings}>
          {filterInfo.map((course) => (
            <div key={course.course_id}>
              <MainCourse key={course.course_id} propData={course} />
            </div>
          ))}
        </Slider>
      ) : (
        <div>
          {filterInfo.map((course) => (
            <MainCourse key={course.course_id} propData={course} />
          ))}
        </div>
      )}

      <div className="flex justify-start items-center">
        <p className="text-lg text-left font-bold my-5"># 내 스터디 바로가기</p>
        <FontAwesomeIcon
          icon={faCircleArrowRight}
          onClick={() => {
            navigate(`/mypage/${userId}`);
          }}
        />
      </div>

      {!myStudies && (
        <Slider {...settings}>
          {studyInfo.map((study) => (
            <MainStudy key={study.studyId} propData={study} />
          ))}
        </Slider>
      )}

      {myStudies.length > 2 ? (
        <Slider {...settings}>
          {myStudies.map((study) => (
            <StudyListItem key={study.studyId} propData={study} />
          ))}
        </Slider>
      ) : (
        <div className="flex justify-start">
          {myStudies.map((study) => (
            <StudyListItem key={study.studyId} propData={study} />
          ))}
        </div>
      )}
    </>
  );
}
