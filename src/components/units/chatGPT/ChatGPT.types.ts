import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IChatGPTProps {
  userText: string;
  setUserText: Dispatch<SetStateAction<string>>;
  handleChangeUserText: (e: ChangeEvent<HTMLInputElement>) => void;
  submitUserText: () => void;
  messageList: string[];
  loading: boolean;
}
