import { useEffect, useState } from "react";
import AdminUI from "./Admin.presenter";

export default function Admin() {
  const [pageTabs, setPageTabs] = useState(0);
  const [openTabs, setOpenTabs] = useState(false);
  const [browserWidth, setBrowserWidth] = useState<number | null>(768);
  const [searchUserFilter, setSearchUserFilter] = useState("nickname");
  const [searchBoardFilter, setSearchBoardFilter] = useState("nickname");

  useEffect(() => {
    function handleBrowserResize() {
      setBrowserWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleBrowserResize);

    return () => window.removeEventListener("resize", handleBrowserResize);
  }, []);

  const togleTabs = (prev: boolean) => {
    setOpenTabs(!prev);
  };

  return (
    <AdminUI
      pageTabs={pageTabs}
      setPageTabs={setPageTabs}
      openTabs={openTabs}
      setOpenTabs={setOpenTabs}
      browserWidth={browserWidth}
      togleTabs={togleTabs}
      searchUserFilter={searchUserFilter}
      setSearchUserFilter={setSearchUserFilter}
      searchBoardFilter={searchBoardFilter}
      setSearchBoardFilter={setSearchBoardFilter}
    />
  );
}
