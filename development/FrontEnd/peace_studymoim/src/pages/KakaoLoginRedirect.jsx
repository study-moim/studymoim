import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userInfo } from "../zustand/store";
import useFetch from "../hooks/useFetch";
import useToken from "../hooks/useToken";

export default function KakaoLoginRedirect() {
  const { token, setToken, info, logIn, setLogIn, setInfo, setLogOut } = userInfo();

  const gotToken = new URL(window.location.href).searchParams.got("accessToken");
  const navigate = useNavigate();
  console.log(gotToken);
  

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("token", gotToken);
    setToken(gotToken);
    setLogIn(true);
    setInfo(useToken("http://localhost:8080/api/v1/oauth/info"))
    navigate("/choice");
  }, []);

  return <></>;
}
