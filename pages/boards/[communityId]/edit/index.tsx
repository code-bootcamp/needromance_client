import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GetBoard } from "../../../../src/commons/api/boards";
import CommunityWrite from "../../../../src/components/units/boards/write/CommunityWrite";

export default function CommunityWritePage() {
  const router = useRouter();
  const [data, setData] = useState();

  useEffect(() => {
    fetchBoardData();
  }, [router.query.communityId]);
  const fetchBoardData = async () => {
    const response = await GetBoard(Number(router.query.communityId));
    setData(response);
  };

  return (
    <div>
      <CommunityWrite isEdit={true} editData={data} />
    </div>
  );
}
