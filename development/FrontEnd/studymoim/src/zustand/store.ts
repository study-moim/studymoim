import create from "zustand";

interface UserInfo {
  ID: string
  logIn: boolean
}

export const userInfo = create<UserInfo>((set) => ({
  ID: 'dongjun',
  logIn: false
}))

