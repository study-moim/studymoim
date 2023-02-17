import MainCourse from "./MainCourse";
import useFetch from "../../hooks/useFetch";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import MainStudy from "./MainStudy";
import './MainNotLogin.css';

export default function MainNotLogIn() {
  const navigate = useNavigate();

  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const courseInfo = useFetch(`http://${API_SERVER}/api/v1/course?size=1000000`).content;
  const studyInfo = useFetch(`http://${API_SERVER}/api/v1/study/`);

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

  return (
    <>
      <div className="flex justify-start items-center">
        <p className="text-lg text-left font-bold my-5 mr-3 cursor-pointer hover:text-[#989aff]" onClick={() => {
            navigate("/Course");
          }}># 전체 강좌</p>
        <FontAwesomeIcon
         className="cursor-pointer hover:text-[#989aff]"
          icon={faCircleArrowRight}
          onClick={() => {
            navigate("/Course");
          }}
        />
      </div>

      {courseInfo && (
        <Slider arrows={false} {...settings}>
        {courseInfo.map((course) => (
          <div key={course.course_id}>
            <MainCourse key={course.course_id} propData={course} />
          </div>
        ))}
      </Slider> )}
      

      <div className="mb-5">
        <div className="flex justify-start items-center">
          <p className="text-lg text-left font-bold my-5 mr-3 mt-5 cursor-pointer hover:text-[#989aff]"  onClick={() => {
              navigate("/study");
            }}>
            # 모집 중인 스터디
          </p>
          <FontAwesomeIcon
           className="cursor-pointer hover:text-[#989aff]"
            icon={faCircleArrowRight}
            onClick={() => {
              navigate("/study");
            }}
          />
        </div>

        {studyInfo.length > 2 ? (
          <Slider {...twoSettings}>
            {studyInfo.map((study) => (
              <div key={study.studyId}>
                <MainStudy key={study.studyId} propData={study} />
              </div>
            ))}
          </Slider>
        ) : (
          <div>
            {studyInfo.map((study) => (
              <div key={study.studyId}>
                <MainStudy key={study.studyId} propData={study} />
              </div>
            ))}
          </div>
        )}
      </div>

    </>
  );
}

