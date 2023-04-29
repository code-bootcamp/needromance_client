import { useEffect, useState } from "react";
import * as S from "./CommunityList.styles";
import { v4 as uuidv4 } from "uuid";

// api
import { GetBoards, SearchBoard } from "../../../../commons/api/boards";
import { BestUsers } from "../../../../commons/api/user";
import { BestAnswer } from "../../../../commons/api/answers";

// components
import CustomBtn from "../../../commons/buttons/CustomBtn";
import Tag from "../../../commons/hashtag/HashTag";
import Medal from "../medal/medal";
import Answer from "../answer/answer";
import Writing from "../writing/Writing";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import CustomSearchInput from "../../../commons/search/CustomSearchInput";

export default function CommunityList() {
  const { onClickMoveToPage } = useMoveToPage();
  const [ranking, setRanking] = useState<Array>([]);
  const [answers, setAnswers] = useState<Array>([]);
  const [boards, setBoards] = useState<Array>([]);
  const [searchs, setSearchs] = useState<Array>([]);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");
  const [keywordStore, setKeywordStore] = useState<string>("");

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const ranking = await BestUsers();
    const answers = await BestAnswer();
    const boards = await GetBoards(1);
    const rankingUser = ranking?.map((user: any) => user.nickname);
    setRanking(rankingUser);
    setAnswers(answers);
    setBoards(boards);
  };

  const fetchSearch = async () => {
    if (keyword === "" || keyword === " ") return;
    const result = await SearchBoard(keyword);
    setSearchs(result);
    setKeywordStore(keyword);
    setIsSearch(true);
  };

  const enter = (event: any) => {
    if (keyword === "" || keyword === " ") return;
    if (event.charCode == 13) {
      fetchSearch();
    }
  };

  const onClickClear = () => {
    setKeyword("");
  };

  return (
    <S.Wrapper>
      <S.Ranking>
        <p>상담 랭킹</p>
        <S.MedalWrapper>
          <Medal label={ranking[0]} ranking="1st" />
          <Medal label={ranking[1]} ranking="2nd" />
          <Medal label={ranking[2]} ranking="3rd" />
          <Medal label={ranking[3]} ranking="4th" />
          <Medal label={ranking[4]} ranking="5th" />
        </S.MedalWrapper>
      </S.Ranking>
      <S.BestAnswerWrapper>
        {answers?.map((answer: any, index: number) => (
          <Answer
            key={uuidv4()}
            name={answer.nickname}
            content={answer.contents}
            userImg={answer.userImg}
            likes={answer.likes}
            index={index + 1}
          />
        ))}
      </S.BestAnswerWrapper>
      <S.SearchSection>
        <S.InfoText>
          해결하고 싶은 연애고민이 있나요?
          <br />
          다른 사람의 이야기를 들어보세요!
        </S.InfoText>
        <S.SearchWrapper>
          <S.SearchBox>
            <CustomSearchInput
              placeholder="제목, 작성자를 검색하세요."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onClick={() => fetchSearch()}
              onKeyPress={enter}
              onClickClear={onClickClear}
            />
          </S.SearchBox>
          <S.TagBox>
            <Tag tags={["장거리", "100일선물"]} />
          </S.TagBox>
        </S.SearchWrapper>
      </S.SearchSection>
      <section>
        <input />
      </section>

      {isSearch && (
        <S.CounselWrapper>
          <S.LatestCounsel>
            <p>
              {searchs.length === 0
                ? `"${keywordStore}"에 대한 검색 결과가 없습니다.`
                : "검색 결과 List"}
            </p>
          </S.LatestCounsel>
          {searchs.length == 0 && (
            <S.AskCounsel onClick={onClickMoveToPage("/boards/write")}>
              지금 바로 고민을 남기고 다른 사람의 도움을 받아보세요.
            </S.AskCounsel>
          )}
          <S.LatestCounselWriting>
            {searchs?.map((board: any) => (
              <Writing
                key={board.id}
                name={board.user.nickname}
                content={board.title}
                hashtags={board.hashtags}
                createdAt={board.createdAt}
                answers={board.answers.length}
                onClick={onClickMoveToPage(`/boards/${board.id}`)}
                keyword={keyword}
              />
            ))}
          </S.LatestCounselWriting>
        </S.CounselWrapper>
      )}

      <S.CounselWrapper>
        <S.LatestCounsel>
          <p>최신 상담 List</p>
          <CustomBtn
            fill={false}
            type="Md"
            text="글 작성하기"
            onClick={onClickMoveToPage("/boards/write")}
          />
        </S.LatestCounsel>

        <S.LatestCounselWriting>
          {boards?.map((board: any) => (
            <Writing
              key={board.id}
              name={board.user.nickname}
              content={board.contents}
              hashtags={board.hashtags}
              createdAt={board.createdAt}
              answers={board.answers.length}
              onClick={onClickMoveToPage(`/boards/${board.id}`)}
            />
          ))}
        </S.LatestCounselWriting>
      </S.CounselWrapper>
    </S.Wrapper>
  );
}
