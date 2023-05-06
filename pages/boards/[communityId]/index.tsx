import CommunityDetailContainer from "../../../src/components/units/boards/detail/CommunityDetail.container";

const CommunityDetailPage = () => {
  return <CommunityDetailContainer />;
};

export default CommunityDetailPage;

export async function getStaticPaths() {
  return {
    paths: [{ params: { chatId: "test" } }],
    fallback: false,
  };
}
