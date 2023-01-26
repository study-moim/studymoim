import { useState, useEffect } from "react";
import StudyRecruitList from "../components/studypages/StudyRecruitList";
import { Link } from "react-router-dom";

// TODO: 취소 버튼 구현 안함, 강좌 선택도 넣지 않았음
export default function StudyRecruitMainAll() {
  const [isLoading, setIsLoading] = useState(true);
  const [LoadedStudyRecruits, SetLoadedStudyRecruits] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-a-3b3d0-default-rtdb.firebaseio.com/react.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const recruits = [];

        for (const key in data) {
          const recruit = {
            id: key,
            ...data[key],
          };
          recruits.push(recruit);
        }
        setIsLoading(false);
        SetLoadedStudyRecruits(recruits);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>로딩중</p>
      </section>
    );
  }

  return (
    <>
      <h1>스터디 모집 메인 페이지</h1>
      <StudyRecruitList recruits={LoadedStudyRecruits} />
      <Link to="/study/study_recruit_form" className="btn">
        스터디 만들기
      </Link>
    </>
  );
}
