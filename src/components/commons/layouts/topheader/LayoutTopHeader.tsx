import styled from "@emotion/styled";
import { googleLogout } from "@react-oauth/google";
import Link from "next/link";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getUserInfo, logout } from "../../../../commons/api/test";
import {
  accessTokenState,
  userProfileState,
} from "../../../../commons/store/atoms";

export default function LayoutTopHeader() {
  const [userProfile, setUserProfile] = useRecoilState(userProfileState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    getUserInformation();
  }, [accessToken]);

  const getUserInformation = async () => {
    const data = await getUserInfo(accessToken);
    console.log(data);
    setUserProfile(data);
  };

  const GoogleLogout = () => {
    googleLogout();
    setUserProfile([]);
  };

  const logOut = () => {
    logout(accessToken);
  };

  console.log("headerUser", userProfile);
  return (
    <TopHeader>
      {userProfile.length !== 0 && (
        <Profile>
          <ProfileImg
            src={userProfile?.picture || `/img/community/default_userImg.png`}
            alt="프로필 사진"
          />
          <span>{userProfile?.name || userProfile?.nickname}</span>
        </Profile>
      )}
      {userProfile.length === 0 ? (
        <Link href={"/signin"}>
          <Menu>로그인</Menu>
        </Link>
      ) : (
        <span onClick={logOut}>로그아웃</span>
      )}

      <Link href={"/signup"}>
        <Menu>회원가입</Menu>
      </Link>
    </TopHeader>
  );
}

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

const ProfileImg = styled.img`
  background-color: white;
  border-radius: 100%;
`;
