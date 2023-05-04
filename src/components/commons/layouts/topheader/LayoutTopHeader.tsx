import styled from "@emotion/styled";
import { googleLogout } from "@react-oauth/google";
import Link from "next/link";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getUserInfo, logout } from "../../../../commons/api/signup";
import {
  accessTokenState,
  userProfileState,
} from "../../../../commons/store/atoms";
import { useRouter } from "next/router";

export default function LayoutTopHeader() {
  const router = useRouter();
  const [userProfile, setUserProfile] = useRecoilState(userProfileState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    if (accessToken) {
      getUserInformation();
    }
  }, [accessToken]);

  const getUserInformation = async () => {
    const data = await getUserInfo(accessToken);

    // 페이지 새로고침시 state가 초기화되는 현상을 막기위헤,  로컬 스토리지에 담아준다!
    if (typeof window !== "undefined") {
      localStorage.setItem("userProfile", data);
    }
    setUserProfile(data);

    // 어드민 계정일 경우 어드민 페이지로 라우팅
    if (data?.email === "admin@romance.com" && data?.nickname === "admin") {
      router.push("/admin");
    }
  };

  const GoogleLogout = () => {
    googleLogout();
    setUserProfile([]);
  };

  // 로그아웃 api, localstorage, 전역 변수 지우기
  const logOut = async () => {
    await logout(accessToken);
    localStorage.clear();
    setUserProfile("");
    setAccessToken("");
    router.push("/");
  };

  const handleLoginButton = () => {
    localStorage.setItem("prevPage", router.asPath);
    router.push("/signin");
  };

  return (
    <TopHeader>
      {userProfile?.length !== 0 && userProfile && (
        <Profile>
          <ProfileImg
            src={userProfile?.userImg || "/img/community/default_userImg.png"}
            alt="프로필 사진"
          />
          <Link href={"/mypage"}>
            <a>{userProfile?.name || userProfile?.nickname}</a>
          </Link>
        </Profile>
      )}
      {userProfile?.length === 0 ? (
        <div onClick={handleLoginButton}>
          <Menu>로그인</Menu>
        </div>
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

  a {
    color: #d2d2d2;
    cursor: pointer;

    &:hover {
      color: white;
    }
  }
`;

const ProfileImg = styled.img`
  background-color: white;
  border-radius: 100%;
  width: 20px;
  height: 20px;
`;
