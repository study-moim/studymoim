import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarNotLogIn from "./components/overall/navbar/NavBarNotLogIn";
import NavBarLogIn from "./components/overall/navbar/NavBarLogIn";
import MainPage from "./components/mainpages/MainPage";

export default function App() {
  return(
    <BrowserRouter>
      {/* <NavBarNotLogIn /> */}
      <NavBarLogIn />
      <MainPage />
    </BrowserRouter>
  );
}
