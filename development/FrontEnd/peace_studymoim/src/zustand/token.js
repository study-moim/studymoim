import { create } from "zustand";

const tokenInformation = create((set) => ({
  token: "",
  setToken: (data) => set((state) => ({ token: data })),
  setLogOut: () => set((state) => ({ token: null })),
}));

export default tokenInformation;
