import styled from "@emotion/styled";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import CustomBtn from "../../../commons/buttons/CustomBtn";
import { breakPoints } from "../../../../commons/styles/media";

const settings: Settings = {
  arrows: false,
  dots: false,
  infinite: true,
  speed: 2800,
  autoplay: true,
  autoplaySpeed: 2800,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  // lazyLoad: "ondemand",
  lazyLoad: "progressive",
};

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Slide = styled.div`
  height: auto;
  width: 100%;
`;

const ImagesWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;

  @media ${breakPoints.mobile} {
    gap: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  img {
    height: 12.5rem;
    width: 12.5rem;
    object-fit: cover;
    background: #000; /*Change this to a background image or remove*/
    border: solid #fff;
    border-width: 6px 6px 20px 6px;
    box-shadow: 1px 1px 5px #333; /* Standard blur at 5px. Increase for more depth */
    -webkit-box-shadow: 1px 1px 5px #333;
    -moz-box-shadow: 1px 1px 5px #333;

    @media ${breakPoints.mobile} {
      height: 5rem;
      width: 5rem;
      border-width: 4px 4px 15px 4px;
    }
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
    <Wrapper>
      <Slider {...settings}>
        <Slide>
          <ImagesWrap>
            <img src="/img/main/slider_1.jpg" alt="img" />
            <img src="/img/main/slider_2.jpg" alt="img" />
            <img src="/img/main/slider_3.jpg" alt="img" />
            <img src="/img/main/slider_4.jpg" alt="img" />
          </ImagesWrap>
          <ImagesWrap>
            <img src="/img/main/slider_1.jpg" alt="img" />
            <img src="/img/main/slider_2.jpg" alt="img" />
            <img src="/img/main/slider_3.jpg" alt="img" />
          </ImagesWrap>
          <ImagesWrap>
            <img src="/img/main/slider_1.jpg" alt="img" />
            <img src="/img/main/slider_2.jpg" alt="img" />
            <img src="/img/main/slider_3.jpg" alt="img" />
            <img src="/img/main/slider_4.jpg" alt="img" />
          </ImagesWrap>
        </Slide>
        <Slide>
          <ImagesWrap>
            <img src="/img/main/slider_2.jpg" alt="img" />
            <img src="/img/main/slider_3.jpg" alt="img" />
            <img src="/img/main/slider_4.jpg" alt="img" />
            <img src="/img/main/slider_3.jpg" alt="img" />
          </ImagesWrap>
          <ImagesWrap>
            <img src="/img/main/slider_1.jpg" alt="img" />
            <img src="/img/main/slider_2.jpg" alt="img" />
            <img src="/img/main/slider_3.jpg" alt="img" />
            <img src="/img/main/slider_4.jpg" alt="img" />
            <img src="/img/main/slider_1.jpg" alt="img" />
          </ImagesWrap>
          <ImagesWrap>
            <img src="/img/main/slider_2.jpg" alt="img" />
            <img src="/img/main/slider_3.jpg" alt="img" />
            <img src="/img/main/slider_4.jpg" alt="img" />
            <img src="/img/main/slider_1.jpg" alt="img" />
          </ImagesWrap>
        </Slide>
        <Slide>
          <ImagesWrap>
            <img src="/img/main/slider_1.jpg" alt="img" />
            <img src="/img/main/slider_2.jpg" alt="img" />
            <img src="/img/main/slider_3.jpg" alt="img" />
          </ImagesWrap>
          <ImagesWrap>
            <img src="/img/main/slider_1.jpg" alt="img" />
            <img src="/img/main/slider_2.jpg" alt="img" />
            <img src="/img/main/slider_3.jpg" alt="img" />
            <img src="/img/main/slider_4.jpg" alt="img" />
          </ImagesWrap>
          <ImagesWrap>
            <img src="/img/main/slider_1.jpg" alt="img" />
            <img src="/img/main/slider_2.jpg" alt="img" />
            <img src="/img/main/slider_3.jpg" alt="img" />
          </ImagesWrap>
        </Slide>
        <Slide>
          <ImagesWrap>
            <img src="/img/main/slider_1.jpg" alt="img" />
            <img src="/img/main/slider_2.jpg" alt="img" />
            <img src="/img/main/slider_3.jpg" alt="img" />
            <img src="/img/main/slider_4.jpg" alt="img" />
          </ImagesWrap>
          <ImagesWrap>
            <img src="/img/main/slider_1.jpg" alt="img" />
            <img src="/img/main/slider_2.jpg" alt="img" />
            <img src="/img/main/slider_3.jpg" alt="img" />
          </ImagesWrap>
          <ImagesWrap>
            <img src="/img/main/slider_1.jpg" alt="img" />
            <img src="/img/main/slider_2.jpg" alt="img" />
            <img src="/img/main/slider_3.jpg" alt="img" />
            <img src="/img/main/slider_4.jpg" alt="img" />
          </ImagesWrap>
        </Slide>
      </Slider>
      <BtnPosition>
        <CustomBtn
          type={"Sm"}
          fill={true}
          text={"시작하기"}
          onClick={onClickMoveToPage("/admin")}
        />
      </BtnPosition>
    </Wrapper>
  );
}
