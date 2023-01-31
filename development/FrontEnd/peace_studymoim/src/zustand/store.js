import create from "zustand";

export const userInfo = create(
    (set) => ({
      info: '',
      logIn: false,
      setInfo: (data) => set((state) => ({ info: data })),
      setLogIn: (data) => set((state) => ({ logIn: data })), 
      setLogOut: () => set((state) => ({ info: undefined, logIn: false }))
    })
);


export const logoImage = create((set) => ({
  logos: [
    { id: 1, name: "reactjs", url: "/reactjs.png" },
    { id: 2, name: "django", url: "/django.png" },
    { id: 3, name: "figma", url: "/figma.png" },
    { id: 4, name: "java", url: "/java.png" },
    { id: 5, name: "javascript", url: "/javascript.png" },
    { id: 6, name: "python", url: "/python.png" },
    { id: 7, name: "spring", url: "/spring.png" },
    { id: 8, name: "springboot", url: "/springboot.png" },
    { id: 9, name: "tailwind", url: "/tailwind.png" },
    { id: 10, name: "Vue", url: "/Vue.png" },
  ],
}));
