import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarNotLogIn from "./components/overall/NavBar/NavBarNotLogIn";
import NavBarLogIn from "./components/overall/NavBar/NavBarLogIn";
import MainPage from "./components/mainpages/MainPage";
import StudyRecruitMainAll from "./components/studypages/StudyRecruitMainAll";
import CourseMain from "./components/coursepages/CourseMain";
import CommunityMain from "./components/communitypages/CommunityMain";
import LogInMain from "./components/loginpages/LogInMain";

export default function App() {
  /** 간이 로그인 변수*/
  const logOn: boolean = true;
  return (
    <BrowserRouter>
      <>
        {/* 로그인된 상태라면 LogIn네비바를 아니면 NotLogIn네브바를 보여준다. */}
        {!logOn ? <NavBarLogIn /> : <NavBarNotLogIn />}
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/lecture_main" element={<CourseMain />}></Route>
          <Route path="/study_main" element={<StudyRecruitMainAll />}></Route>
          <Route path="/community_main" element={<CommunityMain />}></Route>
          <Route path="/login" element={<LogInMain />}></Route>

        </Routes>
      </>
    </BrowserRouter>
  );
}
