import { create } from 'zustand';
import { persist } from "zustand/middleware";

const getArticleList = create(
  persist(
    (set) => ({
      articles: [],
      setArticles: (data) => set((state) => ({ articles: data })),
  }),
  {
    name: 'articles', // unique name
    getArticleStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
  }
  )
);

export default getArticleList