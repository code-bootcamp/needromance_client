import { ExclamationCircleFilled } from "@ant-design/icons";
import * as S from "./ChatGPT.styles";
import ScrollToBottom from "react-scroll-to-bottom";

export default function ChatGPTUI() {
  const messageList = [
    {
      author: "user",
      message:
        "안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요",
    },
    {
      author: "gpt",
      message:
        "무엇을 도와드릴까요?무엇을 도와드릴까요?무엇을 도와드릴까요?무엇을 도와드릴까요?무엇을 도와드릴까요?무엇을 도와드릴까요?무엇을 도와드릴까요?",
    },
    { author: "user", message: "안녕하세요" },
    { author: "gpt", message: "무엇을 도와드릴까요?" },
    { author: "user", message: "안녕하세요" },
    { author: "gpt", message: "무엇을 도와드릴까요?" },
    { author: "user", message: "안녕하세요" },
    { author: "gpt", message: "무엇을 도와드릴까요?" },
    { author: "user", message: "안녕하세요" },
    { author: "gpt", message: "무엇을 도와드릴까요?" },
    { author: "user", message: "안녕하세요" },
    { author: "gpt", message: "무엇을 도와드릴까요?" },
  ];
  return (
    <>
      <S.Position>
        <S.Wrapper>
          <S.TitleWrapper>
            <S.Title>당신의 고민을 들려주세요</S.Title>
            <S.Notice>
              <ExclamationCircleFilled
                style={{ color: "#fff", fontSize: "1.5rem" }}
              />
              <div>
                개인정보 보호를 위해 채팅 내용은 저장되지 않습니다. 채팅 창을
                나가면 대화 내용이 사라집니다.
              </div>
            </S.Notice>
          </S.TitleWrapper>
          <S.ChatBody>
            <ScrollToBottom>
              <S.ChatWrapper>
                {messageList.map((data: any, index) => {
                  return (
                    <>
                      {data.author === "user" ? (
                        <S.WrapperMessageUser key={index}>
                          <S.MessageUser>{data.message}</S.MessageUser>
                        </S.WrapperMessageUser>
                      ) : (
                        <S.WrapperMessageGPT key={index}>
                          <S.MessageGPT>{data.message}</S.MessageGPT>
                        </S.WrapperMessageGPT>
                      )}
                    </>
                  );
                })}
              </S.ChatWrapper>
            </ScrollToBottom>
          </S.ChatBody>
          <S.WrapperInput>
            <S.TextInput
              type="text"
              placeholder="고민을 말해주세요!"
              onChange={(e) => {
                e.currentTarget.value;
              }}
              onKeyPress={(e) => {
                // e.key === "Enter"
              }}
            />
            <S.SendBtn>보내기</S.SendBtn>
          </S.WrapperInput>
        </S.Wrapper>
      </S.Position>
    </>
  );
}
