import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPageRoot";
import StudyRecruitMainAll from "./components/studypages/StudyRecruitMainAll";
import CourseMain from "./pages/CourseMainRoot";
import CommunityMain from "./pages/CommunityMainRoot";
import LogInMain from "./pages/LogInMainRoot";
import MyPage from "./pages/MyPageRoot";
import MailMain from "./pages/MailMainRoot";
import FieldPage from "./components/field/FieldPage";
import Footer from "./components/overall/Footer";
import CommunityCreateForm from "./components/communitypages/CommunityCreateForm";
import CommunityDetail from "./pages/CommunityDetailRoot";
import NavBarRoot from "./components/NavBar/NavBarRoot"
import StudyMakePage from "./components/studypages/StudyMakePage";
import StudyPlayerMainRoot from "./pages/StudyPlayerMainRoot";

export default function App() {
  return (
      <BrowserRouter>
        {/* 로그인된 상태라면 LogIn네비바를 아니면 NotLogIn네브바를 보여준다. */}
        <NavBarRoot/>
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
          <Route path="/lecture" element={<CourseMain />}></Route>
          <Route path="/study" element={<StudyRecruitMainAll />}></Route>
          <Route path="/community" element={<CommunityMain />}></Route>
          <Route path="/login" element={<LogInMain />}></Route>
          {/* TODO: 동적라우터패쓰로 재설정 ex) /mypage/아이디 */}
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/mail" element={<MailMain />}></Route>
          {/* TODO: 관심사 선택페이지 이동용 라우트라서 나중에 지워야함 */}
          <Route path="/choice" element={<FieldPage />}></Route>
          <Route path="/community/create" element={<CommunityCreateForm />}></Route>
          <Route path="/community/:article_id" element={<CommunityDetail />}></Route>
          ​{/* TODO:  스터디 구인 폼 이동용 라우트라서 나중에 지우자 */}
​          <Route path="/study_recruit_form" element={<StudyMakePage/>} ></Route>
          ​{/* TODO:  스터디 플레이어 이동용 라우트라서 나중에 지우자 */}
​          <Route path="/study/player" element={<StudyPlayerMainRoot/>} ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}
