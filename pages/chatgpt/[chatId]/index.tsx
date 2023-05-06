import ChatGPT from "../../../src/components/units/chatGPT/ChatGPT.container";

export default function ChatGPTPage() {
  return <ChatGPT />;
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { chatId: "test" } }],
    fallback: false,
  };
}
