import { create } from "zustand";
import { persist } from "zustand/middleware";

const userInfo = create(
  persist(
    (set) => ({
      info: null,
      logIn: false,
      setInfo: (data) => set((state) => ({ info: data })),
      setLogIn: (data) => set((state) => ({ logIn: data })),
      setLogOut: () =>
        set((state) => ({ info: null, logIn: false })),
  }),
  {
    name: 'userInfo', // unique name
    getInfoStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
  }
  )
);

export default userInfo