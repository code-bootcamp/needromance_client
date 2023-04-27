import { ChangeEvent, useEffect, useState } from "react";
import AdminUI from "./Admin.presenter";
import {
  getAllBoards,
  getAllUsers,
  getSearchUser,
} from "../../../commons/api/admin";
import { AllBoards, AllUsers } from "./Admin.types";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store/atoms";

export default function Admin() {
  // accessToken
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [pageTabs, setPageTabs] = useState(0);
  const [openTabs, setOpenTabs] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [browserWidth, setBrowserWidth] = useState(0);
  // 유저목록
  const [allUsers, setAllUsers] = useState<AllUsers[]>([]);
  // 게시글목록
  const [allBoards, setAllBoards] = useState<AllBoards[]>([]);
  // 검색 value
  const [keyword, setKeyword] = useState({ user: "", board: "" });

  // 유저목록 검색어 초기화시 리스트 리렌더링
  useEffect(() => {
    if (keyword.user === "") {
      getAllUsersData();
    }
  }, [setAllUsers, keyword.user]);

  const getAllUsersData = async () => {
    await getAllUsers(accessToken)
      .then((res) => {
        setAllUsers((prev) => [...prev, ...res]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 게시글 검색어 초기화시 리스트 리렌더링
  useEffect(() => {
    if (keyword.board === "") {
      getAllBoardsData();
    }
    // getAllBoardsData();
  }, [setAllBoards, keyword.board]);

  const getAllBoardsData = async () => {
    await getAllBoards(accessToken)
      .then((res) => {
        setAllBoards((prev) => [...prev, ...res]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 검색어 input 관리
  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword({
      ...keyword,
      [e.currentTarget.name]: e.currentTarget.value,
    });
    console.log(keyword);
  };
  // 유저 검색 요청
  const submitUserSearch = () => {
    getSearchUser({ keyword, accessToken }).then((res) => {
      if (res.status === 422) {
        // 모달 개선후에 적용예정
        alert("검색결과가 없습니다.");
        return;
      }
      setAllUsers(() => [...res]);
    });
  };
  // 게시글 검색 요청
  const submitBoardSearch = () => {
    console.log("aa");
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
      keyword={keyword}
      setKeyword={setKeyword}
      handleSearchInput={handleSearchInput}
      submitUserSearch={submitUserSearch}
      submitBoardSearch={submitBoardSearch}
    />
  );
}
