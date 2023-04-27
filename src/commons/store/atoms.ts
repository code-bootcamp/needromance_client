import { atom } from "recoil";

export const userProfileState = atom({
  key: "userProfileState",
  default: [],
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "",
});

// export const restoreAccessTokenLoadable = selector({
//   key: "restoreAccessTokenLoadable",
//   get: async () => {
//     const newAccessToken = await getAccessToken();
//     return newAccessToken;
//   },
// });
