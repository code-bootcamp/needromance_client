import * as S from "./MyPageComment.style";
import { useEffect, useState } from "react";
import {
  Icon_Delete,
  Icon_Heart,
  Icon_HeartFilled,
} from "../../../../../commons/styles/icons";
import { MyPageTitle } from "../MyPage.body.style";
import { getDate } from "../../../../../commons/libraries/getDate";
// api
import { GetUserAnswer } from "../../../../../commons/api/user";
import { DeleteAnswer } from "../../../../../commons/api/answers";
// modal
import Popup from "../../../../commons/modals/PopupModal";
// G-state
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../../../../commons/store/atoms";

const MyPageComment = ({ myData }: any) => {
  const [comments, setComments] = useState<Array>([]);
  const [confirm, setConfirm] = useState(false);
  const [warning, setWarning] = useState(false);
  // token
  const accessToken = useRecoilValue(accessTokenState);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const result = await GetUserAnswer(accessToken);
    if (result !== undefined) {
      setComments(result[0]?.answers);
    }
  };

  const handleDeleteAnswer = async (id: number) => {
    try {
      await DeleteAnswer(accessToken, Number(id));
      await fetch();
      setConfirm(true);
      setTimeout(() => {
        setConfirm(false);
      }, 1200);
    } catch (error) {
      setWarning(true);
    }
  };

  console.log(comments);
  return (
    <>
      <MyPageTitle>"{myData.nickname}"님의 답변들</MyPageTitle>
      <S.Table>
        <S.Thead>
          <tr>
            <S.TH>No</S.TH>
            <S.TH>내용</S.TH>
            <S.TH>채택</S.TH>
            <S.TH>관리</S.TH>
          </tr>
        </S.Thead>
        <S.Tbody>
          {comments.map((data, idx) => (
            <S.TR key={data.id}>
              <S.TD>{String(comments.length - idx).padStart(2, "0")}</S.TD>
              <S.TD>
                <p>{data.contents}</p>
                <br />
                {getDate(data.createdAt)}
              </S.TD>
              <S.TD>{data.status ? <Icon_HeartFilled /> : <Icon_Heart />}</S.TD>
              <S.TD>
                <S.ControlsWrap>
                  <S.IconBox>
                    <Icon_Delete onClick={() => handleDeleteAnswer(data.id)} />
                  </S.IconBox>
                </S.ControlsWrap>
              </S.TD>
            </S.TR>
          ))}
        </S.Tbody>
      </S.Table>

      <Popup
        text="답변이 삭제되었습니다."
        confirm={confirm}
        setConfirm={setConfirm}
        warning={warning}
        setWarning={setWarning}
      />
    </>
  );
};

export default MyPageComment;
