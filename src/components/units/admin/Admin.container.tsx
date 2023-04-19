import { useState } from "react";
import AdminUI from "./Admin.presenter";

export default function Admin() {
  const [pageTabs, setPageTabs] = useState(0);
  const [searchUserFilter, setSearchUserFilter] = useState("nickname");
  const [searchBoardFilter, setSearchBoardFilter] = useState("nickname");

  return (
    <AdminUI
      pageTabs={pageTabs}
      setPageTabs={setPageTabs}
      searchUserFilter={searchUserFilter}
      setSearchUserFilter={setSearchUserFilter}
      searchBoardFilter={searchBoardFilter}
      setSearchBoardFilter={setSearchBoardFilter}
    />
  );
}
