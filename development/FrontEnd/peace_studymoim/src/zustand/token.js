import { create } from "zustand";
import { persist } from "zustand/middleware";

const tokenInformation = create(
  persist(
    (set) => ({
      token: "",
      setToken: (data) => set((state) => ({ token: data })),
      setLogOut: () => set((state) => ({ token: null })),
    }),
    { name: "tokenStoreName" }
  )
);

export default tokenInformation;
