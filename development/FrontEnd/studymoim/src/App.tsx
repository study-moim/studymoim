import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBarNotLogIn from './components/overall/NavBar/NavBarNotLogIn';
import NavBarLogIn from './components/overall/NavBar/NavBarLogIn';
import MainPage from './components/mainpages/MainPage';


export default function App() {

  return (
    <BrowserRouter>
      {/* <NavBarNotLogIn /> */}
      <NavBarLogIn />
      <MainPage />
    </BrowserRouter>
  );
}