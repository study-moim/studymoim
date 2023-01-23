import "./App.css";
import { userInfo } from "./zustand/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarNotLogIn from "./components/overall/NavBar/NavBarNotLogIn";
import NavBarLogIn from "./components/overall/NavBar/NavBarLogIn";
import MainPage from "./components/mainpages/MainPageRoot";
import StudyRecruitMainAll from "./components/studypages/StudyRecruitMainAll";
import CourseMain from "./components/coursepages/CourseMain";
import CommunityMain from "./components/communitypages/CommunityMain";
import LogInMain from "./components/loginpages/LogInMain";
import MyPage from "./components/mypages/MyPage";
import MailMain from "./components/overall/mailbox/MailMain";
import FieldPage from "./components/overall/field/FieldPage";
import Footer from "./components/overall/footer";

export default function App() {
  // /** 간이 로그인 변수 01/23자 삭제*/
  // const logOn: boolean = true;
  const { ID, logIn } = userInfo();
  return (
    <BrowserRouter>
      {/* 로그인된 상태라면 LogIn네비바를 아니면 NotLogIn네브바를 보여준다. */}
      {logIn ? <NavBarLogIn /> : <NavBarNotLogIn />}
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/lecture_main" element={<CourseMain />}></Route>
        <Route path="/study_main" element={<StudyRecruitMainAll />}></Route>
        <Route path="/community_main" element={<CommunityMain />}></Route>
        <Route path="/login" element={<LogInMain />}></Route>
        {/* TODO: 동적라우터패쓰로 재설정 ex) /mypage/아이디 */}
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/mail" element={<MailMain />}></Route>
        {/* TODO: 관심사 선택페이지 이동용 라우트라서 나중에 지워야함 */}
        <Route path="/choice" element={<FieldPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
