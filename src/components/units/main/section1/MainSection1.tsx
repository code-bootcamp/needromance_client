import styled from "@emotion/styled";
import Slider, { Settings } from "@ant-design/react-slick";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import CustomBtn from "../../../commons/buttons/CustomBtn";
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
const BtnPosition = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
`;

export default function MainSection1UI(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

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
      <BtnPosition>
        <CustomBtn
          type={"Md"}
          fill={true}
          text={"시작하기"}
          onClickMoveToPage={onClickMoveToPage("/admin")}
        />
      </BtnPosition>
    </Wrapper>
  );
}
