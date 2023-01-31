// import { useEffect } from "react";
import { useParams } from "react-router";

export default function KakaoLoginRedirect() {
  const params = useParams(); 
  console.log(params.token_params)
  // useEffect(() => {
  //   localStorage.clear();
  //   localStorage.setItem("token", params.token_params);
  //   window.location.replace("/");
  // }, []);

  return <>
  <div>ppppp</div>
  </>;
}
