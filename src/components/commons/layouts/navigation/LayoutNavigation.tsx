import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, MouseEventHandler, useEffect, useState } from "react";
import { UrlObject } from "url";

interface IIsActiveProps {
  isActive: boolean;
}

const Wrapper = styled.nav`
  width: 100vw;
  height: 40px;
  // 양쪽에 꽉차게 하기 위한 옵션
  position: relative;
  left: calc(-50vw + 50%);

  border: solid var(--sub-bg-color);
  border-width: 1px 0px;
`;

const Navigation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  position: relative;
`;

const NavigationMenu = styled.a`
  height: 50%;
  color: ${(props: IIsActiveProps) =>
    props.isActive ? "var(--point-color-green)" : "var(--point-color-brown)"};
  border-left: ${(props: IIsActiveProps) =>
    props.isActive ? "1px solid var(--point-color-light-green)" : "none"};
  border-right: ${(props: IIsActiveProps) =>
    props.isActive ? "1px solid var(--point-color-light-green)" : "none"};
  padding: 7px;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    color: var(--point-color-green);
  }

  transition: background 0.5s;
`;

const NAVIGATION = [
  { name: "너의 마음을 말해줘", page: "/chatgpt" },
  { name: "대화공간", page: "/community" },
];

export default function LayoutNavigation() {
  const router = useRouter();

  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    NAVIGATION.map((menu) => {
      if (router.pathname.includes(menu.page)) {
        setActiveMenu(menu.page);
      } else {
        setActiveMenu("");
      }
    });
  }, [router.pathname]);

  const handleActiveMenu = (event: any) => {
    if (event.target instanceof Element) {
      const activeMenu = event.target.id;

      setActiveMenu(activeMenu);
    }
  };

  return (
    <Wrapper>
      <Navigation>
        {NAVIGATION?.map((menu) => (
          <Fragment key={menu.page}>
            <Link href={menu.page}>
              <NavigationMenu
                id={menu.page}
                onClick={(event) => handleActiveMenu(event)}
                isActive={activeMenu.includes(menu.page)}
              >
                {menu.name}
              </NavigationMenu>
            </Link>
          </Fragment>
        ))}
      </Navigation>
    </Wrapper>
  );
}
