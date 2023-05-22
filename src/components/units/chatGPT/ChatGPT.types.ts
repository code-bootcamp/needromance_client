import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction } from "react";

export interface IChatGPTProps {
  userText: string;
  handleChangeUserText: (e: ChangeEvent<HTMLInputElement>) => void;
  submitUserText: () => void;
  messageList: string[];
  loading: boolean;
  submitKeyPressUserText: (e: KeyboardEvent<HTMLInputElement>) => void;
}
