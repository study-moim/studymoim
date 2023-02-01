import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userInfo } from "../zustand/store";

export default function KakaoLoginRedirect() {
  const { info, logIn, setLogIn, setInfo, setLogOut } = userInfo();

  const code = new URL(window.location.href).searchParams.get("accessToken");
  const navigate = useNavigate();
  console.log(code);
  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("token", code);
    setInfo(code);
    setLogIn(true);
    navigate("/choice");
  }, []);

  return (
    <>
    </>
  );
}
