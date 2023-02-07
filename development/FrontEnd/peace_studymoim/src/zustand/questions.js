import { create } from 'zustand';
import { persist } from "zustand/middleware";

const getQuestionList = create(
  persist(
    (set) => ({
      questions: [],
      setQuestions: (data) => set((state) => ({ questions: data })),
  }),
  {
    name: 'questions', // unique name
    getQuestionStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
  }
  )
);

export default getQuestionList