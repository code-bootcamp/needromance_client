import * as S from "./MyPageNav.style";
import { IMyPageProps } from "../MyPage.type";
import {
  ConfirmModal,
  WidthdrawalModal,
} from "../body/withdrawal/MyPageWithdrawal.Modal";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

///// 나중에 지울부분
const USER_INFO = [
  {
    id: "sad12345",
    nickname: "닉네임입니당",
    profileImg: "./img/imgThumb.png",
  },
];
/////////////////

const NAV_LISTS = [
  { id: "notification", name: "알람" },
  { id: "board", name: "내 게시글 조회" },
  { id: "comment", name: "내 답변 조회" },
  { id: "myProfile", name: "내 정보" },
  // { id: "withdrawal", name: "회원탈퇴" },
];

const MyPageNav = ({ IsActive, setIsActive }: IMyPageProps) => {
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });

  return (
    <>
      {isMobile && (
        <S.MenuBtn
          onClick={() => setOpenNav((prev) => !prev)}
          src="./img/menu.png"
        />
      )}
      <S.NavWrap openNav={openNav}>
        {USER_INFO.map((user) => (
          <S.ProfileWrap key={user.id}>
            <S.ProfileImg src={user.profileImg} />
            <S.Nickname>{user.nickname}</S.Nickname>
          </S.ProfileWrap>
        ))}
        <S.Line />
        <S.ListsWrap>
          {NAV_LISTS.map((li) => (
            <S.List key={li.id} onClick={() => setIsActive(li.id)}>
              <S.Name active={IsActive === li.id ?? true}>{li.name}</S.Name>
            </S.List>
          ))}
          <S.List onClick={() => setOpen(true)}>
            <S.Name active={IsActive === "withdrawal" ?? true}>회원탈퇴</S.Name>
          </S.List>
        </S.ListsWrap>
      </S.NavWrap>
      <WidthdrawalModal open={open} setOpen={setOpen} setConfirm={setConfirm} />
      <ConfirmModal confirm={confirm} setConfirm={setConfirm} />
    </>
  );
};

export default MyPageNav;
