import {
  Icon_Delete,
  Icon_Edit,
  Icon_Heart,
  Icon_HeartFilled,
} from "../../../../../commons/styles/icons";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
import { MyPageTitle } from "../MyPage.body.style";
import * as S from "./MyPageComment.style";

// 나중에 지울부분...
const UserNickName = "연애빼고다잘해";
const DATA_Example = [
  {
    id: "게시물 고유ID",
    title: "고민상담 제목입니다....abcdefg",
    created: "2023.04.16",
    pick: true,
    likeCount: 100,
  },
  {
    id: "게시물 고유ID",
    title: "고민상담 제목입니다....abcdefg",
    created: "2023.04.16",
    pick: true,
    likeCount: 100,
  },
  {
    id: "게시물 고유ID",
    title: "고민상담 제목입니다....abcdefg",
    created: "2023.04.16",
    pick: false,
    likeCount: 100,
  },
];

const MyPageComment = () => {
  const { onClickMoveToPage } = useMoveToPage();
  const handleDeleteBoard = (boardId: string) => () => {
    console.log(boardId);
  };

  return (
    <>
      <MyPageTitle>"{UserNickName}"님의 답변들</MyPageTitle>
      <S.Table>
        <S.Thead>
          <tr>
            <S.TH>No</S.TH>
            <S.TH>제목</S.TH>
            <S.TH>작성일</S.TH>
            <S.TH>작성자 Pick</S.TH>
            <S.TH>좋아요</S.TH>
            <S.TH>관리</S.TH>
          </tr>
        </S.Thead>
        <S.Tbody>
          {DATA_Example.map((data, idx) => (
            <S.TR key={data.id}>
              <S.TD>{String(DATA_Example.length - idx).padStart(2, "0")}</S.TD>
              <S.TD>{data.title}</S.TD>
              <S.TD>{data.created}</S.TD>
              <S.TD>{data.pick ? <Icon_HeartFilled /> : <Icon_Heart />}</S.TD>
              <S.TD>{data.likeCount}</S.TD>
              <S.TD>
                <S.ControlsWrap>
                  <S.IconBox onClick={onClickMoveToPage(data.id)}>
                    <Icon_Edit />
                  </S.IconBox>
                  <S.IconBox>
                    <Icon_Delete onClick={handleDeleteBoard(data.id)} />
                  </S.IconBox>
                </S.ControlsWrap>
              </S.TD>
            </S.TR>
          ))}
        </S.Tbody>
      </S.Table>
    </>
  );
};

export default MyPageComment;
