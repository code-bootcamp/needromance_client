import { atom } from "recoil";
import { boolean, string } from "yup";
import { IModalProps } from "../../components/commons/modals/CustomModal";

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

export const authModalState = atom({
  key: "authModalState",
  default: false,
});

export const globalModalState = atom<IModalProps>({
  key: "globalModalState",
  default: {
    text: "",
    openModal: false,
    icontype: "",
    ok: "",
    cancel: "",
    confirm: "",
    onClickOk: undefined,
    onClickCancel: undefined,
    onClickConfirm: undefined,
  },
});

// export const restoreAccessTokenLoadable = selector({
//   key: "restoreAccessTokenLoadable",
//   get: async () => {
//     const newAccessToken = await getAccessToken();
//     return newAccessToken;
//   },
// });
