import { ChangeEvent, useEffect, useState } from "react";
import AdminUI from "./Admin.presenter";
import {
  deleteUserBoard,
  fetchUserState,
  getAllBoards,
  getAllUsers,
  getSearchBoard,
  getSearchUser,
} from "../../../commons/api/admin";
import { AllBoards, AllUsers } from "./Admin.types";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  userProfileState,
} from "../../../commons/store/atoms";

export default function Admin() {
  // accessToken
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userProfile, setUserProfile] = useRecoilState(userProfileState);

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
  // modal id 값을 기준으로 on off
  const [getDeleteId, setGetDeleteId] = useState("");
  const [getBanId, setGetBanId] = useState("");

  // 유저목록 검색어 초기화시 리스트 리렌더링
  useEffect(() => {
    if (keyword.user === "") {
      getAllUsersData();
    }
  }, [setAllUsers, keyword.user]);

  const getAllUsersData = async () => {
    await getAllUsers(accessToken)
      .then((res) => {
        setAllUsers(() => [...res]);
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
  }, [setAllBoards, keyword.board]);

  const getAllBoardsData = async () => {
    await getAllBoards(accessToken)
      .then((res) => {
        setAllBoards([...res]);
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
  // 검색어 초기화 함수
  const handleClearInput = () => {
    setKeyword({
      ...keyword,
      user: "",
      board: "",
    });
  };
  // 유저 검색 요청
  const submitUserSearch = () => {
    getSearchUser({ keyword, accessToken }).then((res) => {
      if (res.status === 422) {
        setAllUsers([]);
        return;
      }
      setAllUsers([...res]);
    });
  };
  // 유저 검색 엔터로 요청할 때
  const submitKeyPressUserSearch = (e: KeyboardEvent) => {
    if (keyword.board === "") {
      return;
    }
    if (e.charCode == 13) {
      submitUserSearch();
    }
  };

  // 게시글 검색 요청
  const submitBoardSearch = async () => {
    try {
      const response = await getSearchBoard({ keyword, accessToken });
      setAllBoards([...response]);
    } catch (error) {
      console.log(error);
      setAllBoards([]);
    }
    // getSearchBoard({ keyword, accessToken }).then((res) => {
    //   // 일치하는 검색값이 없는 경우
    //   if (res.status === 422) {
    //     setAllBoards([]);
    //     return;
    //   }
    //   setAllBoards([...res]);
    // });
  };
  // 게시글 검색 엔터로 요청할 때
  const submitKeyPressBoardSearch = (e: KeyboardEvent) => {
    if (keyword.board === "") {
      return;
    }
    if (e.charCode == 13) {
      submitBoardSearch();
    }
  };

  // 유저 활성화 비활성화
  const handleUserState = async () => {
    console.log(getBanId);

    await fetchUserState({ accessToken, id: getBanId }).then(() => {
      getAllUsers(accessToken)
        .then((res) => {
          setAllUsers([...res]);
        })
        .catch((error) => {
          console.log(error);
        });
      setOpenModal(false);
    });
  };
  // 유저 게시글 삭제하기
  const handleBoardDelete = async () => {
    console.log(getDeleteId);
    await deleteUserBoard({ accessToken, id: Number(getDeleteId) }).then(() => {
      getAllBoards(accessToken)
        .then((res) => {
          setAllBoards([...res]);
        })
        .catch((error) => {
          console.log(error);
        });
      setOpenModal(false);
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
      keyword={keyword}
      setKeyword={setKeyword}
      handleSearchInput={handleSearchInput}
      submitUserSearch={submitUserSearch}
      submitBoardSearch={submitBoardSearch}
      handleUserState={handleUserState}
      handleBoardDelete={handleBoardDelete}
      setGetDeleteId={setGetDeleteId}
      getDeleteId={getDeleteId}
      setGetBanId={setGetBanId}
      getBanId={getBanId}
      userProfile={userProfile}
      handleClearInput={handleClearInput}
      submitKeyPressBoardSearch={submitKeyPressBoardSearch}
      submitKeyPressUserSearch={submitKeyPressUserSearch}
    />
  );
}
