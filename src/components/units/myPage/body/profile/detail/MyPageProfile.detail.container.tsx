import * as S from "./../MyPageProfile.style";
import { IMyPageProps } from "../../../MyPage.type";
import CustomBtn from "../../../../../commons/buttons/CustomBtn";

const MyPageProfileDetail = ({ myData, setIsEdit }: IMyPageProps) => {
  console.log(myData);

  return (
    <S.ProfileWrap>
      <S.Row>
        <S.ListWrap>
          <S.List>닉네임</S.List>
          <S.List>프로필사진</S.List>
          <S.List>이메일</S.List>
          <S.List>회원등급</S.List>
        </S.ListWrap>
        <S.ListWrap>
          <S.List>{myData?.nickname}</S.List>
          {myData?.userImg ? (
            <S.ProfileImg src={myData?.userImg} />
          ) : (
            <S.ProfileImg src="/img/community/default_userImg.png" />
          )}

          <S.List_EN>{myData?.email}</S.List_EN>
          <S.List>{myData?.point}</S.List>
        </S.ListWrap>
      </S.Row>
      <S.BtnWrap>
        <CustomBtn
          type="Md"
          fill={true}
          text="프로필 수정"
          onClick={() => setIsEdit(true)}
        />
      </S.BtnWrap>
    </S.ProfileWrap>
  );
};

export default MyPageProfileDetail;
