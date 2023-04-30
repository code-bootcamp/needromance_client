import { useRecoilState } from "recoil";
import { postUserQuestion } from "../../../commons/api/chatGPT";
import ChatGPTUI from "./ChatGPT.presenter";
import { accessTokenState } from "../../../commons/store/atoms";
import { ChangeEvent, useState } from "react";

export default function ChatGPT() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userText, setUserText] = useState("");
  const [messageList, setMessageList] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChangeUserText = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault;
    setUserText(e.currentTarget.value);
  };

  const submitUserText = async () => {
    setMessageList((prevText) => [...prevText, userText]);
    setUserText("");
    setLoading(true);

    try {
      const response = await postUserQuestion({ accessToken, text: userText });
      setMessageList((prevText) => [...prevText, response]);
    } catch (error) {
      setMessageList((prevText) => [
        ...prevText,
        "통신에 에러가 발생했습니다. 나중에 다시 시도해 주세요.",
      ]);
      throw new Error();
    } finally {
      setLoading(false);
    }
  };

  return (
    <ChatGPTUI
      userText={userText}
      setUserText={setUserText}
      handleChangeUserText={handleChangeUserText}
      submitUserText={submitUserText}
      messageList={messageList}
      loading={loading}
    />
  );
}
