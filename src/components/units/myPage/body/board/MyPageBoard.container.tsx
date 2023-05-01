import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, useEffect, useState } from "react";
import * as S from "./MyPageBoard.style";
import { Icon_Delete, Icon_Edit } from "../../../../../commons/styles/icons";
import { MyPageTitle } from "../MyPage.body.style";
import { getDate } from "../../../../../commons/libraries/getDate";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
import { GetUserBoard, SearchUserBoard } from "../../../../../commons/api/user";
import { DeleteBoard } from "../../../../../commons/api/boards";
import Popup from "../../../../commons/modals/PopupModal";
import CustomSearchInput from "../../../../commons/search/CustomSearchInput";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../../../../commons/store/atoms";

const MyPageBoard = ({ myData }: any) => {
  const { onClickMoveToPage } = useMoveToPage();
  // data 저장
  const [boards, setBoards] = useState([]);
  const [searchs, setSearchs] = useState([]);
  // Popup 모달
  const [confirm, setConfirm] = useState(false);
  const [warning, setWarning] = useState(false);
  // search
  const [keyword, setKeyword] = useState("");
  // 토큰
  const accessToken = useRecoilValue(accessTokenState);
  console.log(accessToken, "-------");

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const result = await GetUserBoard(accessToken);
    if (result !== undefined) {
      setBoards(result[0]?.boards);
    }
  };

  const handleDeleteBoard = async (boardId: number) => {
    try {
      await DeleteBoard(accessToken, Number(boardId));
      await fetch();
      setConfirm(true);
      setTimeout(() => {
        setConfirm(false);
      }, 1200);
    } catch (error) {
      setWarning(true);
    }
  };

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.currentTarget.value);

    setTimeout(() => {
      fetchSearch();
    }, 1500);
  };

  const fetchSearch = async () => {
    if (keyword === "" || keyword === " ") {
      return;
    }
    const result = await SearchUserBoard(accessToken, keyword);
    console.log(result);
    if (result !== undefined) {
      setSearchs(result[0]?.boards);
      // setBoards(result[0]?.boards);
    }
  };

  const enter = (event: KeyboardEvent) => {
    if (keyword === "" || keyword === " ") {
      return;
    }
    if (event.charCode == 13) {
      fetchSearch();
    }
  };

  const onClickClear = () => {
    setKeyword("");
  };

  const mySecretCode = uuidv4();
  console.log(searchs);

  return (
    <>
      <MyPageTitle>"{myData.nickname}"님의 이야기들</MyPageTitle>

      <CustomSearchInput
        placeholder="제목 / 내용을 검색하세요."
        value={keyword}
        onChange={(e) => onChangeSearch(e)}
        onClick={() => fetchSearch()}
        onKeyPress={enter}
        onClickClear={onClickClear}
      />

      <S.Table>
        <S.Thead>
          <tr>
            <S.TH>No</S.TH>
            <S.TH>제목 & 내용</S.TH>
            <S.TH>댓글</S.TH>
            <S.TH>관리</S.TH>
          </tr>
        </S.Thead>
        <S.Tbody>
          {/* {searchs?.map((data: any, idx: string) => (
            <S.TR key={data.id}>
              <S.TD>{String(boards?.length - idx).padStart(2, "0")}</S.TD>
              <S.TD
                style={{ cursor: "pointer" }}
                onClick={onClickMoveToPage(`/boards/${data.id}`)}
              >
                <p>
                  제목 :
                  {(data?.title)
                    .replaceAll(
                      keyword,
                      `${mySecretCode}${keyword}${mySecretCode}`
                    )
                    .split(mySecretCode)
                    .map((el: any) => (
                      <S.Keyword key={uuidv4()} isKeyword={el === keyword}>
                        {el}
                      </S.Keyword>
                    ))}
                </p>
                <br />
                <p>
                  {(data?.contents)
                    .replaceAll(
                      keyword,
                      `${mySecretCode}${keyword}${mySecretCode}`
                    )
                    .split(mySecretCode)
                    .map((el: any) => (
                      <S.Keyword key={uuidv4()} isKeyword={el === keyword}>
                        {el}
                      </S.Keyword>
                    ))}
                </p>
                <br />
                <p>{getDate(data?.createdAt)}</p>
              </S.TD>
              <S.TD>{data?.answers?.length}</S.TD>
              <S.TD>
                <S.ControlsWrap>
                  <S.IconBox onClick={onClickMoveToPage(`/boards/${data.id}`)}>
                    <Icon_Edit />
                  </S.IconBox>
                  <S.IconBox>
                    <Icon_Delete onClick={() => handleDeleteBoard(data.id)} />
                  </S.IconBox>
                </S.ControlsWrap>
              </S.TD>
            </S.TR>
          ))} */}
          {boards.map((data: any, idx: string) => (
            <S.TR key={data.id}>
              <S.TD>{String(boards?.length - idx).padStart(2, "0")}</S.TD>
              <S.TD
                style={{ cursor: "pointer" }}
                onClick={onClickMoveToPage(`/boards/${data.id}`)}
              >
                <p>
                  제목 :
                  {(data?.title)
                    .replaceAll(
                      keyword,
                      `${mySecretCode}${keyword}${mySecretCode}`
                    )
                    .split(mySecretCode)
                    .map((el: any) => (
                      <S.Keyword key={uuidv4()} isKeyword={el === keyword}>
                        {el}
                      </S.Keyword>
                    ))}
                </p>
                <br />
                <p>
                  {(data?.contents)
                    .replaceAll(
                      keyword,
                      `${mySecretCode}${keyword}${mySecretCode}`
                    )
                    .split(mySecretCode)
                    .map((el: any) => (
                      <S.Keyword key={uuidv4()} isKeyword={el === keyword}>
                        {el}
                      </S.Keyword>
                    ))}
                </p>
                <br />
                <p>{getDate(data?.createdAt)}</p>
              </S.TD>
              <S.TD>{data?.answers?.length}</S.TD>
              <S.TD>
                <S.ControlsWrap>
                  <S.IconBox onClick={onClickMoveToPage(`/boards/${data.id}`)}>
                    <Icon_Edit />
                  </S.IconBox>
                  <S.IconBox>
                    <Icon_Delete onClick={() => handleDeleteBoard(data.id)} />
                  </S.IconBox>
                </S.ControlsWrap>
              </S.TD>
            </S.TR>
          ))}
        </S.Tbody>
      </S.Table>

      <Popup
        text="게시물이 삭제되었습니다."
        confirm={confirm}
        setConfirm={setConfirm}
        warning={warning}
        setWarning={setWarning}
      />
    </>
  );
};

export default MyPageBoard;
