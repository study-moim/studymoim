import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userInfo from "../zustand/store";
import tokenInformation from "../zustand/token";

export default function KakaoLoginRedirect() {
  const { setLogIn } = userInfo();
  const { setToken } = tokenInformation();
  const gotToken = new URL(window.location.href).searchParams.get(
    "access-token"
  );
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
    setToken(gotToken);
    setLogIn(true);

    navigate("/choice");
  }, []);

  return <></>;
}
