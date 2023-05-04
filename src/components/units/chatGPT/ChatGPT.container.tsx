import { useRecoilState } from "recoil";
import { postUserQuestion } from "../../../commons/api/chatGPT";
import ChatGPTUI from "./ChatGPT.presenter";
import { accessTokenState } from "../../../commons/store/atoms";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import useAuth from "../../commons/hooks/customs/useAuth";

export default function ChatGPT() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userText, setUserText] = useState("");
  const [messageList, setMessageList] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChangeUserText = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault;
    setUserText(e.currentTarget.value);
  };

  // 유저 채팅 요청 엔터로 할때
  const submitKeyPressUserText = (e: KeyboardEvent<HTMLInputElement>) => {
    if (userText === "") {
      return;
    }
    if (e.charCode == 13) {
      submitUserText();
    }
  };

  // 유저 채팅 요청
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

  useAuth();

  return (
    <ChatGPTUI
      userText={userText}
      setUserText={setUserText}
      handleChangeUserText={handleChangeUserText}
      submitUserText={submitUserText}
      messageList={messageList}
      loading={loading}
      submitKeyPressUserText={submitKeyPressUserText}
    />
  );
}
