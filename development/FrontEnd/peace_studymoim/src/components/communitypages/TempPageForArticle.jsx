import { useLocation, useNavigate } from "react-router-dom";
import getArticles from "../../hooks/getArticles";
export default function TempPageForArticle() {
  const navigate = useNavigate();
  const states = useLocation()
  getArticles();
  setTimeout(function () {
    if (states.wlh) {
      navigate(`/community/${wlh}`);
    } else {
      navigate("/community");
    }
  }, 300);
  return <></>;
}
