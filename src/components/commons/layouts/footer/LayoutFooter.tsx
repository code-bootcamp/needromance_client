import styled from "@emotion/styled";
import { FaGithub } from "react-icons/fa";

const Wrapper = styled.footer`
  width: 100%;
  max-width: 1100px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.8rem;
  padding: 2px;
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
  width: 30%;
  line-height: 1.6;
  display: flex;
  flex-direction: row;
  justify-content: right;
  font-size: 1.2rem;
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
          <div>
            <FaGithub />
            {"   "}
            Github
          </div>
        </InfoRight>
      </Info>
      Copyright© INeedRomance(주) All rights reserved.
    </Wrapper>
  );
}
