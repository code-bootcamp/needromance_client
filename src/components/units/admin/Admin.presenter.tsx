import * as S from "./Admin.styles";
import type { ColumnsType } from "antd/es/table";
import { Table } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  MenuOutlined,
  ProfileOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import CustomModal from "../../commons/modals/CustomModal";
import { AllBoards, AllUsers, IAdminProps } from "./Admin.types";
import CustomSearchInput from "../../commons/search/CustomSearchInput";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

const TabsItems = ["유저관리", "게시글관리"];

export default function AdminUI({
  pageTabs,
  setPageTabs,
  browserWidth,
  togleTabs,
  openTabs,
  openModal,
  setOpenModal,
  allUsers,
  allBoards,
  keyword,
  handleSearchInput,
  submitUserSearch,
  submitBoardSearch,
  handleUserState,
  handleBoardDelete,
  getBanId,
  setGetBanId,
  getDeleteId,
  setGetDeleteId,
  userProfile,
  handleClearInput,
  submitKeyPressBoardSearch,
  submitKeyPressUserSearch,
}: IAdminProps) {
  const router = useRouter();

  const userColumns: ColumnsType<AllUsers> = [
    {
      title: "닉네임",
      dataIndex: "nickname",
      key: uuidv4(),
    },
    {
      title: "포인트",
      dataIndex: "point",
      key: uuidv4(),
    },
    {
      title: "이메일",
      dataIndex: "email",
      key: uuidv4(),
    },
    {
      title: "가입일",
      dataIndex: "createdAt",
      key: uuidv4(),
      render: (el) => <span>{el.split("T")[0]}</span>,
    },
    {
      title: "상태",
      dataIndex: "state",
      key: uuidv4(),
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
      key: uuidv4(),
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
      dataIndex: "user_nickname",
      key: uuidv4(),
    },
    {
      title: "제목",
      dataIndex: "board_title",
      key: uuidv4(),
    },
    {
      title: "작성일",
      dataIndex: "board_createdAt",
      key: uuidv4(),
      render: (el) => <span>{el.split("T")[0]}</span>,
    },
    {
      title: "이동",
      dataIndex: "board_id",
      key: uuidv4(),
      render: (el) => (
        <ProfileOutlined
          id={el}
          onClick={() => {
            router.push(`/boards/${el}`);
          }}
        />
      ),
    },
    {
      title: "관리",
      dataIndex: "board_id",
      key: uuidv4(),
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
            key={uuidv4()}
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
              <div>{userProfile.nickname}님 안녕하세요!</div>
            </S.TableTitle>
            <S.SearchTitle>
              <div>회원관리</div>
              <div>검색을 통해 회원을 관리해주세요.</div>
            </S.SearchTitle>
            <S.TableSearchBox>
              <S.SearchFilterBox>
                <CustomSearchInput
                  value={keyword.user}
                  placeholder="검색기준: 닉네임, 이메일"
                  type="text"
                  name="user"
                  onChange={handleSearchInput}
                  onClick={submitUserSearch}
                  onClickClear={handleClearInput}
                  onKeyPress={submitKeyPressUserSearch}
                />
              </S.SearchFilterBox>
            </S.TableSearchBox>
            {/* table */}
            <Table
              columns={userColumns}
              dataSource={allUsers}
              size="small"
              scroll={{ x: "max-content", y: "max-content" }}
              key={uuidv4()}
              rowKey={uuidv4()}
            />
          </S.TableUserWrapper>
        )}
        {pageTabs === 1 && (
          <S.TableBoardWrapper>
            <S.TableTitle>
              <div>{userProfile.nickname}님 안녕하세요!</div>
            </S.TableTitle>
            <S.SearchTitle>
              <div>게시글관리</div>
              <div>검색을 통해 게시글을 관리해주세요.</div>
            </S.SearchTitle>
            <S.TableSearchBox>
              <S.SearchFilterBox>
                <CustomSearchInput
                  value={keyword.board}
                  placeholder="검색기준: 닉네임, 제목"
                  type="text"
                  name="board"
                  onChange={handleSearchInput}
                  onClick={submitBoardSearch}
                  onClickClear={handleClearInput}
                  onKeyPress={submitKeyPressBoardSearch}
                />
              </S.SearchFilterBox>
            </S.TableSearchBox>
            {/* table */}
            <Table
              columns={boardColumns}
              dataSource={allBoards}
              size="small"
              scroll={{ x: "max-content", y: "max-content" }}
              key={uuidv4()}
              rowKey={uuidv4()}
            />
          </S.TableBoardWrapper>
        )}
      </S.TableWrapper>
    </S.Wrapper>
  );
}
