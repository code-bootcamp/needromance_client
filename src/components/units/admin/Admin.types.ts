import { Dispatch, SetStateAction } from "react";

export interface IAdminProps {
  pageTabs: number;
  setPageTabs: Dispatch<SetStateAction<number>>;
  browserWidth: number | null;
  openTabs: boolean;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setOpenTabs: Dispatch<SetStateAction<boolean>>;
  searchUserFilter: string;
  togleTabs: (prev: boolean) => void;
  setSearchUserFilter: Dispatch<SetStateAction<string>>;
  searchBoardFilter: string;
  setSearchBoardFilter: Dispatch<SetStateAction<string>>;
  setAllUsers: Dispatch<SetStateAction<AllUsers[]>>;
  allUsers: AllUsers[];
  setAllBoards: Dispatch<SetStateAction<AllBoards[]>>;
  allBoards: AllBoards[];
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
  id: number;
  title: string;
  createdAt: string;
}
