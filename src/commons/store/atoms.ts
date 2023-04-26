import { atom } from "recoil";

export const userProfileState = atom({
  key: "userProfileState",
  default: [],
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
