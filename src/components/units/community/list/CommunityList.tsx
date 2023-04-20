import Answer from "../answer/answer";
import Medal from "../medal/medal";
import Writing from "../writing/Writing";
import * as S from "./CommunityList.styles";

export default function CommunityList() {
  return (
    <S.Wrapper>
      <S.Ranking>
        <p>상담 랭킹</p>
        <S.MedalWrapper>
          <Medal label="망고떡" ranking="1st" />
          <Medal label="망고떡" ranking="2nd" />
          <Medal label="망고떡" ranking="3rd" />
          <Medal label="망고떡" ranking="4th" />
          <Medal label="망고떡" ranking="5th" />
        </S.MedalWrapper>
      </S.Ranking>
      <S.BestAnswerWrapper>
        <Answer
          name="황도롱이"
          content="대통령은 국가의 독립·영토의 보전·국가의 계속성과 헌법을 수호할 책무를 진다. 여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다.

모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다. 대통령은 국가의 안위에 관계되는 중대한 교전상태에 있어서 국가를 보위하기 위하여 긴급한 조치가 필요하고 국회의 집회가 불가능한 때에 한하여 법률의 효력을 가지는 명령을 발할 수 있다.

모든 국민은 소급입법에 의하여 참정권의 제한을 받거나 재산권을 박탈당하지 아니한다. 행정권은 대통령을 수반으로 하는 정부에 속한다. 국가는 모성의 보호를 위하여 노력하여야 한다.

명령·규칙 또는 처분이 헌법이나 법률에 위반되는 여부가 재판의 전제가 된 경우에는 "
        />
        <Answer
          name="황도롱이"
          content="대통령은 국가의 독립·영토의 보전·국가의 계속성과 헌법을 수호할 책무를 진다. 여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다.

모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다. 대통령은 국가의 안위에 관계되는 중대한 교전상태에 있어서 국가를 보위하기 위하여 긴급한 조치가 필요하고 국회의 집회가 불가능한 때에 한하여 법률의 효력을 가지는 명령을 발할 수 있다.

모든 국민은 소급입법에 의하여 참정권의 제한을 받거나 재산권을 박탈당하지 아니한다. 행정권은 대통령을 수반으로 하는 정부에 속한다. 국가는 모성의 보호를 위하여 노력하여야 한다.

명령·규칙 또는 처분이 헌법이나 법률에 위반되는 여부가 재판의 전제가 된 경우에는 "
        />
      </S.BestAnswerWrapper>
      <S.SearchSection>
        <p>
          해결하고 싶은 연애고민이 있나요?
          <br />
          다른 사람의 이야기를 들어보세요!
        </p>
        <S.SearchWrapper>
          <S.SearchBox>
            <S.SearchInput placeholder="검색어를 입력하세요." />
            <S.SearchIcon />
          </S.SearchBox>
          <S.TagBox>
            <S.HashTag>#장거리</S.HashTag>
            <S.HashTag>#100일선물</S.HashTag>
          </S.TagBox>
        </S.SearchWrapper>
      </S.SearchSection>
      <section>
        <input />
      </section>
      <S.CounselWrapper>
        <S.LatestCounsel>
          <p>최신 상담 List</p>
          <button>글 작성하기</button>
        </S.LatestCounsel>
        <S.LatestCounselWriting>
          <Writing
            name="우리사이"
            content="친한 남사친을 질투하는 남자친구..."
          />
          <Writing
            name="우리사이"
            content="친한 남사친을 질투하는 남자친구..."
          />
          <Writing
            name="우리사이"
            content="친한 남사친을 질투하는 남자친구..."
          />
        </S.LatestCounselWriting>
      </S.CounselWrapper>
    </S.Wrapper>
  );
}
