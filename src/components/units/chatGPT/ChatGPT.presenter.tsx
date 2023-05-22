import { ExclamationCircleFilled, SendOutlined } from "@ant-design/icons";
import * as S from "./ChatGPT.styles";
import ScrollToBottom from "react-scroll-to-bottom";
import { IChatGPTProps } from "./ChatGPT.types";

export default function ChatGPTUI({
  userText,
  handleChangeUserText,
  submitUserText,
  messageList,
  loading,
  submitKeyPressUserText,
}: IChatGPTProps) {
  return (
    <>
      <S.Position>
        <S.Wrapper>
          {loading && (
            <S.LodingWrapper>
              <S.LoadingNotice></S.LoadingNotice>
            </S.LodingWrapper>
          )}
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
            <ScrollToBottom mode="bottom">
              <S.ChatWrapper>
                {messageList?.map((text: string, index: number) => {
                  return (
                    <>
                      {index % 2 === 0 ? (
                        <S.WrapperMessageUser key={index}>
                          <S.MessageUser>{text}</S.MessageUser>
                        </S.WrapperMessageUser>
                      ) : (
                        <S.WrapperMessageGPT key={index}>
                          <S.MessageGPT>{text}</S.MessageGPT>
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
              value={userText}
              type="text"
              placeholder="고민을 말해주세요!"
              onChange={handleChangeUserText}
              onKeyPress={submitKeyPressUserText}
            />
            <S.SendBtn
              onClick={submitUserText}
              disabled={loading ? true : false}
            >
              <SendOutlined />
            </S.SendBtn>
          </S.WrapperInput>
        </S.Wrapper>
      </S.Position>
    </>
  );
}
