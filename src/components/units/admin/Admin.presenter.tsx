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
import CustomSearchInput from "../../commons/search/CustomSearchInput";
import TestModal from "../../commons/modals/CustomModal";

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
  handleUserState,
  handleBoardDelete,
  getBanId,
  setGetBanId,
  getDeleteId,
  setGetDeleteId,
}: IAdminProps) {
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
              openModal={openModal}
              text="유저의 계정상태를 관리할 수 있습니다."
              ok="변경하기"
              cancel="취소"
              onClickOk={handleUserState}
              onClickCancel={() => setOpenModal(false)}
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
      render: (el) => <span>{el?.nickname}</span>,
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
              openModal={openModal}
              text="게시글을 삭제하시겠습니까?"
              ok="삭제하기"
              cancel="취소"
              onClickOk={handleBoardDelete}
              onClickCancel={() => setOpenModal(false)}
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
                <CustomSearchInput
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
                <CustomSearchInput
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
