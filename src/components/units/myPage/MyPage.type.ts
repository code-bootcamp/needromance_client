import { Dispatch, SetStateAction } from "react";

export interface IMyPageProps {
  myData?: any;
  setMyData?: Dispatch<SetStateAction<object>>;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  setIsActive?: Dispatch<SetStateAction<string>>;
  IsActive?: string;
}
