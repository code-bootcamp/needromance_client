import styled from "@emotion/styled";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import { breakPoints } from "../../../../commons/styles/media";
import Image from "next/image";

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
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    border: solid #fff;
    border-width: 6px 6px 20px 6px;
    box-shadow: 1px 1px 5px #333;
    -webkit-box-shadow: 1px 1px 5px #333;
    -moz-box-shadow: 1px 1px 5px #333;
    /* border: 1px solid black; */
    @media ${breakPoints.mobile} {
      border-width: 4px 4px 5px 4px;
    }
  }
  /* img {
    @media ${breakPoints.mobile} {
      height: 5rem;
      width: 5rem;
      border-width: 4px 4px 15px 4px;
    }
  } */
`;

export default function MainSection1UI(): JSX.Element {
  return (
    <Wrapper>
      <Slider {...settings}>
        <Slide>
          <ImagesWrap>
            <div>
              <Image
                src="/img/main/slider_1.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_2.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_3.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_4.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
          </ImagesWrap>
          <ImagesWrap>
            <div>
              <Image
                src="/img/main/slider_5.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_6.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_7.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
          </ImagesWrap>
          <ImagesWrap>
            <div>
              <Image
                src="/img/main/slider_8.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_1.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_2.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_3.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
          </ImagesWrap>
        </Slide>
        <Slide>
          <ImagesWrap>
            <div>
              <Image
                src="/img/main/slider_4.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_5.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_6.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_7.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
          </ImagesWrap>
          <ImagesWrap>
            <div>
              <Image
                src="/img/main/slider_8.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_1.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_2.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_3.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_4.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
          </ImagesWrap>
          <ImagesWrap>
            <div>
              <Image
                src="/img/main/slider_5.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_6.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_7.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_8.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
          </ImagesWrap>
        </Slide>
        <Slide>
          <ImagesWrap>
            <div>
              <Image
                src="/img/main/slider_1.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_2.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_3.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
          </ImagesWrap>
          <ImagesWrap>
            <div>
              <Image
                src="/img/main/slider_4.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_5.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_6.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_7.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
          </ImagesWrap>
          <ImagesWrap>
            <div>
              <Image
                src="/img/main/slider_8.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_1.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_2.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
          </ImagesWrap>
        </Slide>
        <Slide>
          <ImagesWrap>
            <div>
              <Image
                src="/img/main/slider_3.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_4.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_5.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_6.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
          </ImagesWrap>
          <ImagesWrap>
            <div>
              <Image
                src="/img/main/slider_7.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_8.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_1.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
          </ImagesWrap>
          <ImagesWrap>
            <div>
              <Image
                src="/img/main/slider_2.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_3.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_4.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/img/main/slider_5.webp"
                alt="img"
                width={180}
                height={180}
                objectFit="cover"
              />
            </div>
          </ImagesWrap>
        </Slide>
      </Slider>
    </Wrapper>
  );
}
