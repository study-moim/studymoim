import { useEffect } from "react";
import {getArticleList} from "../zustand/articles";

export default function getArticles() {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  // const newUrl = `http://${API_SERVER}/${url}`;

  const { articles, setArticles } = getArticleList();

  useEffect(() => {
    fetch(`http://${API_SERVER}/api/v1/articles/free/`)
      .then((res) => {
        return res.json();
      })
      .then((articles) => {
        setArticles(articles);
      });
  }, []);
  return articles;
}
