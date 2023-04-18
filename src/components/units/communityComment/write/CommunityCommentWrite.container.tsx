import * as S from "./CommunityCommentWrite.style";

const CommunityCommentWriteContainer = () => {
  const isEdit = false;
  return (
    <S.Wrap>
      <h3>답변 작성하기</h3>
      <S.Line />
      <S.Textarea></S.Textarea>

      {isEdit ? (
        <S.BtnWrap>
          <S.Btn_line>수정</S.Btn_line>
          <S.Btn_full>취소</S.Btn_full>
        </S.BtnWrap>
      ) : (
        <S.BtnWrap>
          <S.Btn_full>작성</S.Btn_full>
        </S.BtnWrap>
      )}
    </S.Wrap>
  );
};

export default CommunityCommentWriteContainer;
