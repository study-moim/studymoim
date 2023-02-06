import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPageRoot";
import StudyRecruitMainPage from "./pages/StudyRecruitMainPage";
import CourseMainRoot from "./pages/CourseMainRoot";
import CommunityMainRoot from "./pages/CommunityMainRoot";
import LogInMainRoot from "./pages/LogInMainRoot";
import MyPageRoot from "./pages/MyPageRoot";
import MailMainRoot from "./pages/MailMainRoot";
import FieldPage from "./pages/FieldPage";
import Footer from "./components/overall/Footer";
import CommunityCreateForm from "./components/communitypages/CommunityCreateForm";
import CommunityDetailRoot from "./pages/CommunityDetailRoot";
import NavBarRoot from "./components/NavBar/NavBarRoot"
import StudyMakePage from "./pages/StudyMakePage";
import StudyPlayerMainRoot from "./pages/StudyPlayerMainRoot";
import StudyRecruitDetailPage from "./pages/StudyRecruitDetailPage";
import StudyDetailMainPage from './pages/StudyDetailMainPage'; 
import StudyUpdatePage from "./pages/StudyUpdatePage";
import CourseDetailRoot from "./pages/CourseDetailRoot";
import KakaoLoginRedirect from "./pages/KakaoLoginRedirect";
import ScrollToTop from "./components/overall/ScrollToTop";
import Search from "./pages/Search";
import TempPage from "./components/overall/TempPage";


export default function App() {
  return (
      <BrowserRouter>
        {/* 로그인된 상태라면 LogIn네비바를 아니면 NotLogIn네브바를 보여준다. */}
        <NavBarRoot/>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
          <Route path="/course" element={<CourseMainRoot />}></Route>
          <Route path="/course/:course_id" element={<CourseDetailRoot />}></Route>
          <Route path="/study" element={<StudyRecruitMainPage />}></Route>
          <Route path="/community" element={<CommunityMainRoot />}></Route>
          <Route path="/login" element={<LogInMainRoot />}></Route>
          {/* TODO: 동적라우터패쓰로 재설정 ex) /mypage/아이디 */}
          <Route path="/mypage/:user_id" element={<MyPageRoot />}></Route>
          <Route path="/mail" element={<MailMainRoot />}></Route>
          <Route path="/choice" element={<FieldPage />}></Route>
          <Route path="/community/create" element={<CommunityCreateForm />}></Route>
          <Route path="/community/free/:article_id" element={<CommunityDetailRoot />}></Route>
​          <Route path="/study/study_recruit_form" element={<StudyMakePage/>} ></Route>
          <Route path="/study/:study_recruit_id" element={<StudyRecruitDetailPage/>}></Route> 
          <Route path="/player/:lecture_id" element={<StudyPlayerMainRoot/>}></Route> 
          <Route path='/studyDetail/:study_id' element={<StudyDetailMainPage/>}></Route>
          <Route path='/study/:study_recruit_id/update' element={<StudyUpdatePage />}></Route>
          <Route path='/login/kakao' element={<KakaoLoginRedirect />}></Route>
          <Route path='/search/:word' element={<Search/>} />
          <Route path='/temp' element={<TempPage />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
  );
}
