import { Dispatch, SetStateAction, useState } from "react";
import * as S from "./Admin.styles";
import type { MenuProps, TableProps } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Button, Dropdown, Table } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import CustomModal from "../../commons/modals/CustomModal";

interface IAdminProps {
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
}

interface userDataType {
  id: string;
  nickname: string;
  level: string;
  email: string;
  date: string;
  status: string;
}
interface boardDataType {
  id: string;
  nickname: string;
  title: string;
  date: string;
}

const userColumns: ColumnsType<userDataType> = [
  {
    title: "닉네임",
    dataIndex: "nickname",
    key: "nickname",
  },
  {
    title: "레벨",
    dataIndex: "level",
    key: "level",
  },
  {
    title: "이메일",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "가입일",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "상태",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "관리",
    key: "manage",
    render: (_, record) => (
      <>
        <span>활성 / </span>
        <span>비활</span>
      </>
    ),
  },
];
const boardColumns: ColumnsType<boardDataType> = [
  {
    title: "닉네임",
    dataIndex: "nickname",
    key: "nickname",
  },
  {
    title: "제목",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "작성일",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "관리",
    key: "manage",
    render: (_, record) => (
      <>
        <span>삭제</span>
      </>
    ),
  },
];

const TabsItems = ["유저관리", "게시글관리"];
const dummyName = "Admin123";

export default function AdminUI({
  pageTabs,
  setPageTabs,
  browserWidth,
  searchUserFilter,
  setSearchUserFilter,
  searchBoardFilter,
  setSearchBoardFilter,
  togleTabs,
  openTabs,
  openModal,
  setOpenModal,
}: IAdminProps) {
  const userItems: MenuProps["items"] = [
    {
      key: "0",
      label: <span>nickname</span>,
      style: {
        backgroundColor:
          searchUserFilter === "nickname" ? "var(--point-color-beige)" : "",
      },
      onClick: () => {
        setSearchUserFilter("nickname");
      },
    },
    {
      key: "1",
      label: <span>email</span>,
      style: {
        backgroundColor:
          searchUserFilter === "email" ? "var(--point-color-beige)" : "",
      },
      onClick: () => {
        setSearchUserFilter("email");
      },
    },
  ];
  const boardItems: MenuProps["items"] = [
    {
      key: "0",
      label: <span>nickname</span>,
      style: {
        backgroundColor:
          searchBoardFilter === "nickname" ? "var(--point-color-beige)" : "",
      },
      onClick: () => {
        setSearchBoardFilter("nickname");
      },
    },
    {
      key: "1",
      label: <span>title</span>,
      style: {
        backgroundColor:
          searchBoardFilter === "title" ? "var(--point-color-beige)" : "",
      },
      onClick: () => {
        setSearchBoardFilter("title");
      },
    },
  ];
  // 백엔드 데이터 더미
  const userData: userDataType[] = [
    {
      id: "djqkdjlkqwnlf212e1",
      nickname: "오토봇",
      level: "골드",
      date: "2023.04.10",
      email: "example@gmail.com",
      status: "활성",
    },
  ];
  const boardData: boardDataType[] = [
    {
      id: "1dqjwhdldhqwjkdq",
      nickname: "오토봇",
      title: "제목입니다",
      date: "2023.03.09",
    },
  ];
  const handleTestFn = () => {
    console.log("testFn");
  };

  return (
    <S.Wrapper>
      <S.TabsMenu browserWidth={browserWidth}>
        <MenuOutlined onClick={() => togleTabs(openTabs)} />
      </S.TabsMenu>
      {/* tabs */}
      <S.TabsWrapper openTabs={openTabs}>
        {TabsItems.map((el, index) => (
          <S.TabsItem
            pageTabs={pageTabs}
            index={index}
            key={index}
            onClick={() => setPageTabs(index)}
          >
            {el}
          </S.TabsItem>
        ))}
      </S.TabsWrapper>
      {/* 유저, 게시글관리 */}
      <S.TableWrapper>
        {pageTabs === 0 && (
          <S.TableUserWrapper>
            <S.TableTitle>
              <div onClick={() => setOpenModal(true)}>
                {dummyName}님 안녕하세요!
              </div>
              <CustomModal
                type="userBan"
                setOpenModal={setOpenModal}
                openModal={openModal}
                handleTestFn={handleTestFn}
              />
            </S.TableTitle>
            <S.SearchTitle>
              <div>회원관리</div>
              <div>검색을 통해 회원을 관리해주세요.</div>
            </S.SearchTitle>
            <S.TableSearchBox>
              <S.SearchFilterBox>
                <Dropdown
                  className="DropdownBtn"
                  menu={{ items: userItems }}
                  placement="bottomLeft"
                  overlayStyle={{
                    border: "1px solid var(--point-color-beige)",
                  }}
                >
                  <Button
                    type="text"
                    style={{ border: "1px solid var(--point-color-beige)" }}
                  >
                    {searchUserFilter}
                  </Button>
                </Dropdown>
                <input type="text" placeholder="검색어를 입력해 주세요." />
              </S.SearchFilterBox>
            </S.TableSearchBox>
            {/* table */}
            <Table
              columns={userColumns}
              dataSource={userData}
              size="small"
              scroll={{ x: "max-content", y: "max-content" }}
            />
          </S.TableUserWrapper>
        )}
        {pageTabs === 1 && (
          <S.TableBoardWrapper>
            <S.TableTitle>
              <div>{dummyName}님 안녕하세요!</div>
            </S.TableTitle>
            <S.SearchTitle>
              <div>게시글관리</div>
              <div>검색을 통해 게시글을 관리해주세요.</div>
            </S.SearchTitle>
            <S.TableSearchBox>
              <S.SearchFilterBox>
                <Dropdown
                  className="DropdownBtn"
                  menu={{ items: boardItems }}
                  placement="bottomLeft"
                  overlayStyle={{
                    border: "1px solid var(--point-color-beige)",
                  }}
                >
                  <Button
                    type="text"
                    style={{ border: "1px solid var(--point-color-beige)" }}
                  >
                    {searchBoardFilter}
                  </Button>
                </Dropdown>
                <input type="text" placeholder="검색어를 입력해 주세요." />
              </S.SearchFilterBox>
            </S.TableSearchBox>
            {/* table */}
            <Table
              columns={boardColumns}
              dataSource={boardData}
              size="small"
              scroll={{ x: "max-content", y: "max-content" }}
            />
          </S.TableBoardWrapper>
        )}
      </S.TableWrapper>
    </S.Wrapper>
  );
}
