import { GithubFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

const Wrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.8rem;
  padding: 20px 5px;
  font-family: var(--eng-font);
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InfoLeft = styled.div`
  line-height: 1.6;
`;

const InfoRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  font-size: 1.2rem;
`;

const GitBtn = styled.a`
  cursor: pointer;
  > span {
    font-weight: bold;
    font-size: var(--font-size-sm);
    margin-left: 5px;
  }
`;

export default function LayoutFooter() {
  return (
    <Wrapper>
      <Info>
        <InfoLeft>
          (주)로맨스가 필요해
          <br />
          대표 : 조신정김
          <br />
          고객센터 : 2222 - 1004 | (평일 09:00~18:00/점심시간 13:00~14:00/ 주말
          및 공휴일 휴무)
          <br />
          사업자등록번호 : 000-00-00000 | Copyright© Needromance(주) All rights
          reserved.
        </InfoLeft>
        <InfoRight>
          <GitBtn
            href="https://github.com/code-bootcamp/pbp1_team02_client"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubFilled />
            <span>프론트 저장소</span>
          </GitBtn>
          <GitBtn
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubFilled />
            <span>백엔드 저장소</span>
          </GitBtn>
        </InfoRight>
      </Info>
    </Wrapper>
  );
}
