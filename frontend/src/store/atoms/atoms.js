import { atom } from "recoil";

export const userAtom = atom({
  key: "userAtom",
  default: {
    userId: null,
    initials: "",
    firstName: "",
    lastName: "",
    email: "",
  },
  persistent: true,
});

export const taskAtom = atom({
  key: "taskAtom",
  default: {},
  persistent: true,
});
