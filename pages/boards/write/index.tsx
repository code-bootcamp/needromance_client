import useAuth from "../../../src/components/commons/hooks/customs/useAuth";
import CommunityWrite from "../../../src/components/units/boards/write/CommunityWrite";

export default function CommunityWritePage() {
  // 권한분기
  useAuth();

  return (
    <div>
      <CommunityWrite isEdit={false} />
    </div>
  );
}
