import { useRouter } from "next/router";
import { ReactElement } from "react";

interface ILayoutProps {
  children: ReactElement;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const HIDDEN_SIDEBAR = ["/", "/boards"];
  const isHiddenSidebar = HIDDEN_SIDEBAR.includes(router.asPath);

  return (
    <>
      <div>{props.children}</div>
    </>
  );
}
