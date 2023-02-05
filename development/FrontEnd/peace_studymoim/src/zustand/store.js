import { create } from "zustand";
import { persist } from "zustand/middleware";

const userInfo = create(
  persist(
    (set) => ({
      token: "",
      info: null,
      logIn: false,
      setToken: (data) => set((state) => ({ token: data })),
      setInfo: (data) => set((state) => ({ info: data })),
      setLogIn: (data) => set((state) => ({ logIn: data })),
      setLogOut: () =>
        set((state) => ({ info: null, token: undefined, logIn: false })),
  }),
  {
    name: 'userInfo', // unique name
    getInfoStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
  }
  )
);

export default userInfo