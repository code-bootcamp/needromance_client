import { Dispatch, SetStateAction } from "react";

export interface IMyPageProps {
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  setIsActive?: Dispatch<SetStateAction<string>>;
  IsActive?: string;
}
