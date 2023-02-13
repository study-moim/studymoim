import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import userInfo from "../../zustand/store";
import useToken from "../../hooks/useToken";

export default function TempPage() {
  const where = useLocation().state.fromWhere
  const navigate = useNavigate();
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const { setInfo } = userInfo();
  const userInformation = useToken(`http://${API_SERVER}/api/v1/oauth/info`);
  useEffect(() => {
    setInfo(userInformation);
  }, [userInformation]);
  setTimeout(function() {
    navigate(`/mypage/${where}`);
  }, 300);
  return <></>
}
