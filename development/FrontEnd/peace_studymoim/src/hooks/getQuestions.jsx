import { useEffect } from "react";
import getQuestionList from "../zustand/questions";

export default function getQuestions() {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  // const newUrl = `http://${API_SERVER}/${url}`;

  const { questions, setQuestions } = getQuestionList();

  useEffect(() => {
    fetch(`http://${API_SERVER}/api/v1/articles/question/`)
      .then((res) => {
        return res.json();
      })
      .then((questions) => {
        setQuestions(questions);
      });
  }, []);
  return questions;
}
