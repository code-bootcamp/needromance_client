import styled from "@emotion/styled";
import { googleLogout } from "@react-oauth/google";
import Link from "next/link";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getUserInfo } from "../../../../commons/api/test";
import {
  accessTokenState,
  userProfileState,
} from "../../../../commons/store/atoms";

const TopHeader = styled.header`
  width: 100vw;
  height: 30px;
  // 양쪽에 꽉차게 하기 위한 옵션
  position: relative;
  left: calc(-50vw + 50%);
  background-color: var(--point-color-brown);
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: 30px;
  padding: 3px;

  span {
    color: #d2d2d2;
    cursor: pointer;

    &:hover {
      color: white;
    }
  }
`;

const Menu = styled.a`
  color: #d2d2d2;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

const Profile = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
    border-radius: 100%;
  }
`;
export default function LayoutTopHeader() {
  const [userProfile, setUserProfile] = useRecoilState(userProfileState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // useEffect(() => {
  //   getUserInformation();
  // }, [accessToken]);

  // const getUserInformation = async () => {
  //   const data = await getUserInfo(accessToken);
  //   // console.log(data);
  // };
  const GoogleLogout = () => {
    googleLogout();
    setUserProfile([]);
  };

  console.log("headerUser", userProfile);
  return (
    <TopHeader>
      {userProfile.length !== 0 && (
        <Profile>
          <img src={userProfile?.picture} alt="프로필 사진" />
          <span>{userProfile?.name}</span>
        </Profile>
      )}
      {userProfile.length === 0 ? (
        <Link href={"/signin"}>
          <Menu>로그인</Menu>
        </Link>
      ) : (
        <span onClick={GoogleLogout}>로그아웃</span>
      )}

      <Link href={"/signup"}>
        <Menu>회원가입</Menu>
      </Link>
    </TopHeader>
  );
}
