import styled from "@emotion/styled";
import { FaGithub } from "react-icons/fa";

const Wrapper = styled.footer`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.8rem;
  padding: 20px 4px;
  font-family: var(--eng-font);
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const InfoLeft = styled.div`
  line-height: 1.6;
`;

const InfoRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  font-size: 1.2rem;
`;

const GitBtn = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: right;
  span {
    margin-left: 2px;
    line-height: 1.2;
  }
`;

export default function LayoutFooter() {
  return (
    <Wrapper>
      <Info>
        <InfoLeft>
          (주)로맨스가 필요해
          <br />
          대표 : 2조 조신정김
          <br />
          고객센터 : 2222 - 1004
          <br />
          (평일 09:00~18:00/점심시간 13:00~14:00/ 주말 및 공휴일 휴무)
          <br />
          사업자등록번호 : 000-00-00000 <br />
        </InfoLeft>
        <InfoRight>
          <GitBtn
            onClick={() =>
              window.open(
                "https://github.com/code-bootcamp/pbp1_team02_client",
                "_blank"
              )
            }
          >
            <FaGithub />
            <span>Github</span>
          </GitBtn>
        </InfoRight>
      </Info>
      Copyright© INeedRomance(주) All rights reserved.
    </Wrapper>
  );
}
