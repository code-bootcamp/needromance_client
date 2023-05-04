import * as S from "./MyPageNav.style";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { MenuOutlined } from "@ant-design/icons";
import { IMyPageProps } from "../MyPage.type";
// modal
import {
  InputModal,
  WidthdrawalModal,
} from "../body/withdrawal/MyPageWithdrawal.Modal";
import Popup from "../../../commons/modals/PopupModal";

const NAV_LISTS = [
  { id: "myProfile", name: "내 정보" },
  { id: "board", name: "내 게시글 조회" },
  { id: "comment", name: "내 답변 조회" },
];

const MyPageNav = ({ myData, IsActive, setIsActive }: IMyPageProps) => {
  const [openNav, setOpenNav] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [check, setCheck] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [warning, setWarning] = useState(false);
  const NavIcon = useMediaQuery({
    query: "(max-width:768px)",
  });

  return (
    <>
      <S.NavWrap openNav={openNav}>
        <S.MenuWrap openNav={openNav}>
          <S.ProfileWrap key={myData?.id}>
            {myData?.userImg ? (
              <S.ProfileImg src={myData?.userImg} />
            ) : (
              <S.ProfileImg src="/img/community/default_userImg.png" />
            )}
            <S.Nickname>{myData?.nickname}</S.Nickname>
          </S.ProfileWrap>
          <S.Line />
          <S.ListsWrap>
            {NAV_LISTS.map((li) => (
              <S.List
                key={li.id}
                onClick={() => {
                  setIsActive(li.id);
                  setOpenNav(false);
                }}
              >
                <S.Name active={IsActive === li.id ?? true}>{li.name}</S.Name>
              </S.List>
            ))}
            <S.List
              onClick={() => {
                setOpenModal(true);
                setOpenNav(false);
              }}
            >
              <S.Name active={IsActive === "withdrawal" ?? true}>
                회원탈퇴
              </S.Name>
            </S.List>
          </S.ListsWrap>
        </S.MenuWrap>
        {NavIcon && (
          <S.MenuBtn onClick={() => setOpenNav((prev) => !prev)}>
            <MenuOutlined />
          </S.MenuBtn>
        )}
      </S.NavWrap>

      <WidthdrawalModal
        open={openModal}
        setOpen={setOpenModal}
        setCheck={setCheck}
      />
      <InputModal
        check={check}
        setCheck={setCheck}
        setConfirm={setConfirm}
        setWarning={setWarning}
      />
      <Popup
        text="회원탈퇴가 완료되었습니다."
        confirm={confirm}
        setConfirm={setConfirm}
        warning={warning}
        setWarning={setWarning}
      />
    </>
  );
};

export default MyPageNav;
