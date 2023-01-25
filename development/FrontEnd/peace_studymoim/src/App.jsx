import "./App.css";
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
import Footer from "./components/overall/Footer";
import CommunityCreateForm from "./components/communitypages/CommunityCreateForm";
import CommunityDetail from "./components/communitypages/communitydetail/CommunityDetail";
import Navbar from "./components/overall/NavBar/NavBar";

export default function App() {
  return (
    <div id='root'>
      <BrowserRouter>
        {/* 로그인된 상태라면 LogIn네비바를 아니면 NotLogIn네브바를 보여준다. */}
        <Navbar/>
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
