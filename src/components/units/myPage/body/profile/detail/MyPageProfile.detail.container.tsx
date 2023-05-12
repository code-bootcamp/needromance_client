import * as S from "./../MyPageProfile.style";
import { IMyPageProps } from "../../../MyPage.type";
import CustomBtn from "../../../../../commons/buttons/CustomBtn";

const MyPageProfileDetail = ({ myData, setIsEdit }: IMyPageProps) => {
  return (
    <S.ProfileWrap>
      <S.Row>
        <S.ListWrap>
          <S.List>닉네임</S.List>
          <S.List>프로필사진</S.List>
          <S.List>이메일</S.List>
          <S.List>상담점수</S.List>
        </S.ListWrap>
        <S.ListWrap>
          <S.List>{myData?.nickname}</S.List>
          <S.ProfileImg
            src={myData?.userImg || "/img/community/default_userImg.png"}
            alt="프로필 사진"
          />
          <S.List_EN>{myData?.email}</S.List_EN>
          <S.List>{myData?.point}</S.List>
        </S.ListWrap>
      </S.Row>
      <S.BtnWrap>
        <CustomBtn
          type="button"
          text="프로필 수정"
          onClick={() => setIsEdit(true)}
          style={{
            width: "var(--btn-width-md)",
            backgroundColor: "var(--point-color-green)",
            color: "#fff",
          }}
        />
      </S.BtnWrap>
    </S.ProfileWrap>
  );
};

export default MyPageProfileDetail;
