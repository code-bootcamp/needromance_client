import { atom } from "recoil";

export const userProfileState = atom({
  key: "userProfileState",
  default:
    typeof window !== "undefined"
      ? localStorage.getItem("userProfile") || ""
      : "",
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default:
    typeof window !== "undefined"
      ? localStorage.getItem("accessToken") || ""
      : "",
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
