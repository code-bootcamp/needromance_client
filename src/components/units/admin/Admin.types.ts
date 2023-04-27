import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IAdminProps {
  pageTabs: number;
  browserWidth: number;
  openTabs: boolean;
  openModal: boolean;
  allUsers: AllUsers[];
  allBoards: AllBoards[];
  searchValue: { user: string; board: string };
  setSearchValue: Dispatch<SetStateAction<{ user: string; board: string }>>;
  setPageTabs: Dispatch<SetStateAction<number>>;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setOpenTabs: Dispatch<SetStateAction<boolean>>;
  setAllUsers: Dispatch<SetStateAction<AllUsers[]>>;
  setAllBoards: Dispatch<SetStateAction<AllBoards[]>>;
  togleTabs: (prev: boolean) => void;
  handleSearchInput: (e: ChangeEvent<HTMLInputElement>) => void;
  submitSearch: () => void;
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
