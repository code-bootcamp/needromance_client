import * as S from "./CommunityCommentWrite.style";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IPropstype {
  isEdit?: string;
  setIsEdit?: Dispatch<SetStateAction<string>>;
  handleEditComment?: (contents: string) => Promise<void>;
  handlePostComment?: (contents: string) => Promise<void>;
  defaultContents?: string;
}

const CommunityCommentWriteContainer = ({
  isEdit,
  setIsEdit,
  handleEditComment,
  handlePostComment,
  defaultContents,
}: IPropstype) => {
  const [contents, setContent] = useState<string>("");
  console.log(defaultContents, "ddd");

  useEffect(() => {
    setContent(defaultContents ?? "");
  }, [handlePostComment, defaultContents]);

  const handleCancle = () => {
    setIsEdit("");
    setContent("");
  };
  return (
    <S.Wrap>
      <h3>{isEdit ? "답변 수정하기" : "답변 작성하기"}</h3>
      <S.Line />

      <S.Textarea
        placeholder="여기에 입력하세요"
        onChange={(e) => setContent(e.target.value)}
        value={contents}
      />

      {isEdit ? (
        <S.BtnWrap>
          <S.Btn_line onClick={() => handleEditComment(contents)}>
            수정
          </S.Btn_line>
          <S.Btn_full onClick={() => handleCancle()}>취소</S.Btn_full>
        </S.BtnWrap>
      ) : (
        <S.BtnWrap>
          <S.Btn_full onClick={() => handlePostComment(contents)}>
            작성
          </S.Btn_full>
        </S.BtnWrap>
      )}
    </S.Wrap>
  );
};

export default CommunityCommentWriteContainer;
