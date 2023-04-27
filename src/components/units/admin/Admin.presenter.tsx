import { useState } from "react";
import * as S from "./Admin.styles";
import type { ColumnsType } from "antd/es/table";
import { Table } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  MenuOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import CustomModal from "../../commons/modals/CustomModal";
import { AllBoards, AllUsers, IAdminProps } from "./Admin.types";
import Search from "../../commons/search";

const TabsItems = ["유저관리", "게시글관리"];
const dummyName = "Admin123";

export default function AdminUI({
  pageTabs,
  setPageTabs,
  browserWidth,
  togleTabs,
  openTabs,
  openModal,
  setOpenModal,
  allUsers,
  setAllUsers,
  allBoards,
  setAllBoards,
  keyword,
  setKeyword,
  handleSearchInput,
  submitUserSearch,
  submitBoardSearch,
}: IAdminProps) {
  // modal id 값을 기준으로 on off
  const [getDeleteId, setGetDeleteId] = useState("");
  const [getBanId, setGetBanId] = useState("");
  const userColumns: ColumnsType<AllUsers> = [
    {
      title: "닉네임",
      dataIndex: "nickname",
      key: "nicknameU",
    },
    {
      title: "포인트",
      dataIndex: "point",
      key: "pointU",
    },
    {
      title: "이메일",
      dataIndex: "email",
      key: "emailU",
    },
    {
      title: "가입일",
      dataIndex: "createdAt",
      key: "createdAtU",
      render: (el) => <span>{el.split("T")[0]}</span>,
    },
    {
      title: "상태",
      dataIndex: "state",
      key: "stateU",
      render: (el) => (
        <>
          {el === true ? (
            <CheckCircleOutlined style={{ color: "green" }} />
          ) : (
            <CloseCircleOutlined style={{ color: "red" }} />
          )}
        </>
      ),
    },
    {
      title: "관리",
      dataIndex: "id",
      key: "idU",
      render: (el) => (
        <div
          id={el}
          onClick={(e) => {
            setGetBanId(e.currentTarget.id);
          }}
        >
          {el === getBanId && (
            <CustomModal
              type="userBan"
              setOpenModal={setOpenModal}
              openModal={openModal}
              handleTestFn={handleTestFn}
            />
          )}
          <SettingOutlined
            style={{ cursor: "pointer" }}
            onClick={() => setOpenModal(true)}
          />
        </div>
      ),
    },
  ];
  const boardColumns: ColumnsType<AllBoards> = [
    {
      title: "닉네임",
      dataIndex: "nickname",
      key: "nicknameB",
    },
    {
      title: "제목",
      dataIndex: "title",
      key: "titleB",
    },
    {
      title: "작성일",
      dataIndex: "createdAt",
      key: "createdAtB",
      render: (el) => <span>{el.split("T")[0]}</span>,
    },
    {
      title: "관리",
      dataIndex: "id",
      key: "idB",
      render: (el) => (
        <div
          id={el}
          onClick={(e) => {
            setGetDeleteId(e.currentTarget.id);
          }}
        >
          {el === Number(getDeleteId) && (
            <CustomModal
              type="deleteBoard"
              setOpenModal={setOpenModal}
              openModal={openModal}
              handleTestFn={handleTestFn}
            />
          )}
          <DeleteOutlined
            style={{ cursor: "pointer" }}
            onClick={() => setOpenModal(true)}
          />
        </div>
      ),
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
      <S.TabsWrapper openTabs={openTabs} onClick={() => togleTabs(openTabs)}>
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
              <div>{dummyName}님 안녕하세요!</div>
            </S.TableTitle>
            <S.SearchTitle>
              <div>회원관리</div>
              <div>검색을 통해 회원을 관리해주세요.</div>
            </S.SearchTitle>
            <S.TableSearchBox>
              <S.SearchFilterBox>
                {/* <input type="text" name="user" onChange={handleSearchInput} /> */}
                <Search
                  placeholder="검색기준: 닉네임, 이메일"
                  type="text"
                  name="user"
                  onChange={handleSearchInput}
                  onClick={submitUserSearch}
                />
              </S.SearchFilterBox>
            </S.TableSearchBox>
            {/* table */}
            <Table
              columns={userColumns}
              dataSource={allUsers}
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
                {/* <input type="text" name="board" onChange={handleSearchInput} /> */}
                <Search
                  type="text"
                  name="board"
                  onChange={handleSearchInput}
                  onClick={submitBoardSearch}
                  placeholder="검색기준: 닉네임, 제목"
                />
              </S.SearchFilterBox>
            </S.TableSearchBox>
            {/* table */}
            <Table
              columns={boardColumns}
              dataSource={allBoards}
              size="small"
              scroll={{ x: "max-content", y: "max-content" }}
            />
          </S.TableBoardWrapper>
        )}
      </S.TableWrapper>
    </S.Wrapper>
  );
}
