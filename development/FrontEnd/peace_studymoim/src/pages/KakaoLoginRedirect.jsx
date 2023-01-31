import { useEffect } from "react";
import { useParams } from "react-router";

export default function KakaoLoginRedirect() {
  const params = useParams();

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("token", params.token);
    window.location.replace("/");
  }, []);

  return <></>;
}
