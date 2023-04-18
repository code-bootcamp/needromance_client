import styled from "@emotion/styled";

const Wrapper = styled.div`
  /* position: relative; */
  /* height: 100vh; */
  width: 100%;
`;
const WrapperTop = styled.div`
  height: 300px;
  background-color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div:nth-of-type(1) {
    display: flex;
    align-items: center;
    font-size: var(--font-size-lg);
    span {
      margin-left: 10px;
      font-size: var(--font-size-md);
    }
  }

  div:nth-of-type(2) {
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--point-color-green);
  }
`;
const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  /* height: 1500px; */
`;
const BodyCommentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 200px 0px;
  > p {
    margin: 20px 0;
    font-size: var(--font-size-lg);
  }
`;
const BodyImgBox = styled.div`
  position: relative;
  height: 900px;
  > div {
    position: absolute;
  }
  .section2_img1 {
    left: 0px;
    width: 40%;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  .section2_img2 {
    top: 0px;
    right: 100px;
    width: 40%;
    > img {
      width: 100%;
      height: 100%;
    }
  }
`;
export default function MainSection2UI(): JSX.Element {
  return (
    <Wrapper>
      <WrapperTop>
        <TopBox>
          <div>
            52,975 <span>건</span>
          </div>
          <div>상담수</div>
        </TopBox>
        <TopBox>
          <div>
            52,975 <span>건</span>
          </div>
          <div>답변 수</div>
        </TopBox>
        <TopBox>
          <div>
            28,975 <span>명</span>
          </div>
          <div>회원 수</div>
        </TopBox>
      </WrapperTop>
      <WrapperBody>
        <BodyCommentsBox>
          <p>당신의 소중한 이야기는 내면을 성장시키는 씨앗입니다.</p>
          <p>이제 그 씨앗을 행복과 희망을 기르는 새싹으로 성장시켜주세요.</p>
          <p>그리고 그 새싹은 많은 사람들에게도 희망과 위로가 되어줄거예요.</p>
        </BodyCommentsBox>
        <BodyImgBox>
          <div className="section2_img1">
            <img src="/img/main/section2_img1.png" alt="img" />
          </div>
          <div className="section2_img2">
            <img src="/img/main/section2_img2.png" alt="img" />
          </div>
        </BodyImgBox>
        <BodyCommentsBox>
          <p>당신의 이야기를 들려주세요.</p>
          <p>오늘은 당신이 주인공이니까요!</p>
        </BodyCommentsBox>
        <button>채팅하러가기</button>
      </WrapperBody>
    </Wrapper>
  );
}
