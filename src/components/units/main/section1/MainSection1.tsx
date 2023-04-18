import styled from "@emotion/styled";
import Slider, { Settings } from "@ant-design/react-slick";

const settings: Settings = {
  arrows: false,
  // infinite: true,
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  lazyLoad: "progressive",
};

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;
const Slide = styled.div`
  img {
    height: 100%;
    width: 100%;
  }
`;
const Btn = styled.button`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  background-color: green;
`;

export default function MainSection1UI(): JSX.Element {
  return (
    // react-slick 이미지 에러 발생 원인 찾는중
    <Wrapper>
      <Slider {...settings}>
        <Slide>
          <img src="/img/main/slider_1.jpg" alt="img" />
        </Slide>
        {/* <Slide>
          <img src="/img/main/slider_2.jpg" alt="img" />
        </Slide>
        <Slide>
          <img src="/img/main/slider_3.jpg" alt="img" />
        </Slide>
        <Slide>
          <img src="/img/main/slider_4.jpg" alt="img" />
        </Slide> */}
      </Slider>
      <Btn>시작하기</Btn>
    </Wrapper>
  );
}
