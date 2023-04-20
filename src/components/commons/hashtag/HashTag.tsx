import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const TagBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const HashTag = styled.div`
  width: max-content;
  height: 30px;
  padding: 10px;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  border-radius: 3px;
  background-color: #cfbbae;
  color: white;

  &:hover {
    background-color: #baa08f;
    cursor: pointer;
  }

  @media ${breakPoints.mobile} {
    height: 25px;
  }
`;
export default function Tag({ tags }: { tags: string[] }) {
  return (
    <TagBox>
      {tags?.map((tag: string) => (
        <HashTag key={tag}>#{tag}</HashTag>
      ))}
    </TagBox>
  );
}
