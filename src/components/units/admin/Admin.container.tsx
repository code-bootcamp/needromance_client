import { useEffect, useState } from "react";
import AdminUI from "./Admin.presenter";
import { getAllBoards, getAllUsers } from "../../../commons/api/admin";
import { AllBoards, AllUsers } from "./Admin.types";

export default function Admin() {
  const [pageTabs, setPageTabs] = useState(0);
  const [openTabs, setOpenTabs] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [browserWidth, setBrowserWidth] = useState(0);
  // 유저목록
  const [allUsers, setAllUsers] = useState<AllUsers[]>([]);
  // 게시글목록
  const [allBoards, setAllBoards] = useState<AllBoards[]>([]);
  // 검색 value
  const [searchValue, setSearchValue] = useState({ user: "", board: "" });

  // 유저목록 상태변경시 최신화
  useEffect(() => {
    getAllUsersData();
  }, [setAllUsers]);

  const getAllUsersData = async () => {
    await getAllUsers()
      .then((res) => {
        setAllUsers((prev) => [...prev, ...res]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 게시글목록 상태변경시 최신화
  useEffect(() => {
    getAllBoardsData();
  }, [setAllBoards]);

  const getAllBoardsData = async () => {
    await getAllBoards()
      .then((res) => {
        setAllBoards((prev) => [...prev, ...res]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 반응형 햄버거 view ture, false
  useEffect(() => {
    function handleBrowserResize() {
      setBrowserWidth(document.documentElement.clientWidth);
    }
    window.addEventListener("resize", handleBrowserResize);

    return () => window.removeEventListener("resize", handleBrowserResize);
  }, []);

  const togleTabs = (prev: boolean) => {
    setOpenTabs(!prev);
  };

  return (
    <AdminUI
      pageTabs={pageTabs}
      setPageTabs={setPageTabs}
      openTabs={openTabs}
      openModal={openModal}
      setOpenModal={setOpenModal}
      setOpenTabs={setOpenTabs}
      browserWidth={browserWidth}
      togleTabs={togleTabs}
      setAllUsers={setAllUsers}
      allUsers={allUsers}
      setAllBoards={setAllBoards}
      allBoards={allBoards}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
  );
}
