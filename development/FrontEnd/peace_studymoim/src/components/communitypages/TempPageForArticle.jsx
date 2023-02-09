import { useNavigate } from "react-router-dom";
import getArticles from "../../hooks/getArticles";
export default function TempPageForArticle() {
  const navigate = useNavigate();
  getArticles();
  setTimeout(function () {
    navigate("/community");
  }, 300);
  return <></>;
}
