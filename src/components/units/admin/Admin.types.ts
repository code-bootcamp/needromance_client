import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction } from "react";

export interface IAdminProps {
  pageTabs: number;
  browserWidth: number;
  openTabs: boolean;
  openModal: boolean;
  allUsers: AllUsers[];
  allBoards: AllBoards[];
  keyword: { user: string; board: string };
  setKeyword: Dispatch<SetStateAction<{ user: string; board: string }>>;
  setPageTabs: Dispatch<SetStateAction<number>>;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setOpenTabs: Dispatch<SetStateAction<boolean>>;
  setAllUsers: Dispatch<SetStateAction<AllUsers[]>>;
  setAllBoards: Dispatch<SetStateAction<AllBoards[]>>;
  togleTabs: (prev: boolean) => void;
  handleSearchInput: (e: ChangeEvent<HTMLInputElement>) => void;
  submitUserSearch: () => void;
  submitBoardSearch: () => void;
  handleUserState: () => void;
  handleBoardDelete: () => void;
  setGetDeleteId: Dispatch<SetStateAction<string>>;
  setGetBanId: Dispatch<SetStateAction<string>>;
  getDeleteId: string;
  getBanId: string;
  userProfile: any;
  handleClearInput: () => void;
  submitKeyPressBoardSearch: (e: KeyboardEvent<HTMLInputElement>) => void;
  submitKeyPressUserSearch: (e: KeyboardEvent<HTMLInputElement>) => void;
}
export interface AllUsers {
  createdAt: string;
  email: string;
  id: string;
  nickname: string;
  point: number;
  state: boolean;
  userImg: string | null;
}
export interface AllBoards {
  board_id: number;
  board_title: string;
  board_createdAt: string;
  user_id: string;
  user_nickname: string;
}
export interface userProfile {
  id: string;
  email: string;
  nickname: string;
}
