import { Icon_Plus } from "../../../../../../commons/styles/icons";
import CustomBtn from "../../../../../commons/buttons/CustomBtn";
import { IMyPageProps } from "../../../MyPage.type";
import * as S from "./../MyPageProfile.style";

const MyPageProfileEdit = ({ setIsEdit }: IMyPageProps) => {
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
          <S.List>
            <S.Input defaultValue="닉네임 입니다" />
          </S.List>
          <S.List>
            <S.ProfileImg src="./img/imgThumb.png" />
            <S.IconWrap>
              <Icon_Plus />
            </S.IconWrap>
          </S.List>
          <S.List>example.gmail.com</S.List>
          <S.List>골드</S.List>
        </S.ListWrap>
      </S.Row>
      <S.BtnWrap>
        <CustomBtn
          type="Md"
          fill={false}
          text="취소"
          onClick={() => setIsEdit(false)}
        />
        <CustomBtn
          type="Md"
          fill={true}
          text="수정"
          onClick={() => console.log("수정")}
        />
      </S.BtnWrap>
    </S.ProfileWrap>
  );
};

export default MyPageProfileEdit;
