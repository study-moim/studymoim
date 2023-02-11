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
import StudyRecruitItem from "../studypages/StudyRecruitItem";

export default function MainLogIn({ searchKey, searchData }) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const { info } = userInfo();
  const userId = info.userId;
  const userNickname = info.nickname;
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const recommendCourses = useFetch(
    `http://${API_SERVER}/api/v1/user/${userId}/recommend/courses`
  );
  const myCourses = useFetch(
    `http://${API_SERVER}/api/v1/user/${userId}/courses`
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
      <div className="flex flex-row justify-evenly items-start">
        <div className="flex flex-col justify-start w-5/12 mb-10">
          {myCourses.length ? 
            <div> 
              {/* 듣던 강좌 있으면 내 강좌 띄워주고 없으면 추천 강좌 띄워줌  */}
              <div className="flex justify-start items-center">
                <p className="text-lg text-left font-bold my-5 mr-3">
                  #내 강좌 바로가기
                </p>
              </div>
              <Slider {...settings}>
                {myCourses.map((course) => (
                  <MainCourse key={course.course_id} propData={course} />
                ))}
              </Slider>
            </div>
          : 
            <div>
              <div className="flex justify-start items-center">
                <p className="text-lg text-left font-bold my-5 mr-3">
                  #이런 강좌는 어떨까요?
                </p>
              </div>

                  <Slider {...settings}>
                {recommendCourses.map((course) => (
                  <MainCourse key={course.course_id} propData={course} />
                ))}
              </Slider>
              
            </div>
          }
        </div>
        <div className="flex flex-col justify-start w-5/12 mb-10">
          {myStudies.length ? 
            <div>
              <div className="flex justify-start items-center"> 
            <p className="text-lg text-left font-bold my-5 mr-3">
              #내 스터디 바로가기
            </p>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              onClick={() => {
                navigate(`/mypage/${userId}`);
              }}
            />
          </div>
          <Slider {...settings}>
            {myStudies.map((study) => (
              <MainStudy key={study.studyId} propData={study} />
            ))}
          </Slider>
            </div>
          : 
          <div>
              <div className="flex justify-start items-center"> 
            <p className="text-lg text-left font-bold my-5 mr-3">
              #이런 스터디는 어떨까요? 
            </p>
          </div>
          <Slider {...settings}>
            {studyInfo.map((study) => (
              <MainStudy key={study.studyId} propData={study} />
            ))}
          </Slider>
            </div>
          }
          
        </div>
      </div>

      <p className="text-lg text-left font-bold my-5">
        #{userNickname}님 추천강좌
      </p>
      <div className="gap-5 mb-8 flex flex-row flex-wrap">
        {filterInfo.map((course) => (
          <MainCourse key={course.course_id} propData={course} />
        ))}
      </div>
    </>
  );
}
