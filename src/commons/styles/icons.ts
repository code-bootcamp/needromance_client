import {
  BellOutlined,
  CloseOutlined,
  HeartOutlined,
  HeartFilled,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  PlusOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";

export const Icon_Bell = styled(BellOutlined)`
  color: inherit;
  font-size: inherit;
`;

export const Icon_Close = styled(CloseOutlined)<{ fontSize: string }>`
  color: inherit;
  font-size: ${(props) => props.fontSize};
`;

export const Icon_Heart = styled(HeartOutlined)`
  color: var(--point-color-light-green);
  font-size: inherit;
`;

export const Icon_HeartFilled = styled(HeartFilled)`
  color: var(--point-color-light-green);
  font-size: inherit;
`;

export const Icon_Edit = styled(EditOutlined)`
  color: inherit;
  font-size: inherit;
`;

export const Icon_Delete = styled(DeleteOutlined)`
  color: inherit;
  font-size: inherit;
`;

export const Icon_Search = styled(SearchOutlined)`
  color: var(--point-color-light-green);
  font-size: inherit;
`;

export const Icon_Plus = styled(PlusOutlined)`
  color: inherit;
  font-size: inherit;
`;

export const Icon_Exclamation = styled(ExclamationCircleOutlined)`
  color: var(--point-color-light-green);
  font-size: inherit;
`;
