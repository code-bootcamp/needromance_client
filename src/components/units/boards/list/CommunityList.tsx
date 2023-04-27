import { useEffect, useState } from "react";
import * as S from "./CommunityList.styles";
import { v4 as uuidv4 } from "uuid";

// api
import { GetBoards, getBoards } from "../../../../commons/api/boards";
import { BestUsers } from "../../../../commons/api/user";
import { BestAnswer } from "../../../../commons/api/answers";

// components
import CustomBtn from "../../../commons/buttons/CustomBtn";
import Tag from "../../../commons/hashtag/HashTag";
import Medal from "../medal/Medal";
import Answer from "../answer/Answer";
import Writing from "../writing/Writing";

export default function CommunityList() {
  const [ranking, setRanking] = useState<Array>([]);
  const [answers, setAnswers] = useState<Array>([]);
  const [boards, setBoards] = useState<Array>([]);

  const fetch = async () => {
    const ranking = await BestUsers();
    const answers = await BestAnswer();
    const boards = await GetBoards(1);
    const rankingUser = ranking?.map((user) => user.nickname);
    setRanking(rankingUser);
    setAnswers(answers);
    setBoards(boards);
  };

  useEffect(() => {
    fetch();
  }, []);

  // useEffect(() => {
  //   getBoardsList(1);
  // }, []);

  // const getBoardsList = async (page: number) => {
  //   const data = await getBoards(page);
  //   console.log(data);
  // };
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
        {answers.map((answer: any, index: number) => (
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
            <S.SearchInput placeholder="검색어를 입력하세요." />
            <S.SearchIcon />
          </S.SearchBox>
          <S.TagBox>
            <Tag tags={["장거리", "100일선물"]} />
          </S.TagBox>
        </S.SearchWrapper>
      </S.SearchSection>
      <section>
        <input />
      </section>
      <S.CounselWrapper>
        <S.LatestCounsel>
          <p>최신 상담 List</p>
          <CustomBtn fill={false} type="Md">
            <a style={{ color: "white" }} href="/boards/write">
              글 작성하기
            </a>
          </CustomBtn>
          {/* <button>글 작성하기</button> */}
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
            />
          ))}
        </S.LatestCounselWriting>
      </S.CounselWrapper>
    </S.Wrapper>
  );
}
