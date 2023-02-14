import MainCourse from "./MainCourse";
import useFetch from "../../hooks/useFetch";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import MainStudy from "./MainStudy";
import MainFreeArticle from "./MainFreeArticle";
import MainLectureQuestion from "./MainLectureQuestion";

export default function MainNotLogIn({ searchKey, searchData }) {
  const navigate = useNavigate();

  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const courseInfo = useFetch(`http://${API_SERVER}/api/v1/course/`);
  const studyInfo = useFetch(`http://${API_SERVER}/api/v1/study/`);
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

  // let filterInfo = courseInfo.filter((course) => {
  //   if (searchKey == "word") {
  //     return course.title
  //       .replace(" ", "")
  //       .toLocaleLowerCase()
  //       .includes(searchData.toLocaleLowerCase().replace(" ", ""));
  //   } else if (searchKey == "tag") {
  //     if (
  //       course.categoryList.length != 0 &&
  //       course.categoryList[0].courseCategoryId == searchData
  //     ) {
  //       return course;
  //     }
  //   } else {
  //     return courseInfo;
  //   }
  // });

  return (
    <>
      <div className="flex justify-start items-center">
        <p className="text-lg text-left font-bold my-5 mr-3"># 전체 강좌</p>
        <FontAwesomeIcon
          icon={faCircleArrowRight}
          onClick={() => {
            navigate("/Course");
          }}
        />
      </div>

      {/* <Slider {...settings}>
        {filterInfo.map((course) => (
          <div key={course.course_id}>
            <MainCourse key={course.course_id} propData={course} />
          </div>
        ))}
      </Slider> */}
      {courseInfo.length > 3 ? (
        <Slider {...settings}>
        {courseInfo.map((course) => (
          <div key={course.course_id}>
            <MainCourse key={course.course_id} propData={course} />
          </div>
        ))}
      </Slider>
      ): (
        <div>
           {courseInfo.map((course) => (
          <div key={course.course_id}>
            <MainCourse key={course.course_id} propData={course} />
          </div>
        ))}
        </div>
      ) }
      

      <div className="mb-5">
        <div className="flex justify-start items-center">
          <p className="text-lg text-left font-bold my-5 mr-3 mt-5">
            # 모집 중인 스터디
          </p>
          <FontAwesomeIcon
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

      <div className="flex justify-start items-center">
        <p className="text-lg text-left font-bold my-5 mr-3"># 자유 질문</p>
        <FontAwesomeIcon
          icon={faCircleArrowRight}
          onClick={() => {
            navigate("/community");
          }}
        />
      </div>

      {freeArticleInfo.length > 2 ? (
        <Slider {...twoSettings}>
          {freeArticleInfo.map((free) => (
            <div key={free.freeBoardId}>
              <MainFreeArticle key={free.freeBoardId} propData={free} />
            </div>
          ))}
        </Slider>
      ) : (
        <div>
          {freeArticleInfo.map((free) => (
            <div key={free.freeBoardId}>
              <MainFreeArticle key={free.freeBoardId} propData={free} />
            </div>
          ))}
        </div>
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

      {courseArticleInfo.length > 2 ? (
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
        <div>
          {courseArticleInfo.map((course) => (
            <div key={course.questionBoardId}>
              <MainLectureQuestion
                key={course.questionBoardId}
                propData={course}
              />
            </div>
          ))}
        </div>
      )}

      <div className="my-5"></div>
    </>
  );
}
