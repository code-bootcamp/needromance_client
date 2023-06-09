import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import * as S from "./MainSection1.styles";

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

export default function MainSection1UI(): JSX.Element {
  return (
    <S.Wrapper>
      <Slider {...settings}>
        <S.Slide>
          <S.ImagesWrap>
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
          </S.ImagesWrap>
          <S.ImagesWrap>
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
          </S.ImagesWrap>
          <S.ImagesWrap>
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
          </S.ImagesWrap>
        </S.Slide>
        <S.Slide>
          <S.ImagesWrap>
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
          </S.ImagesWrap>
          <S.ImagesWrap>
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
          </S.ImagesWrap>
          <S.ImagesWrap>
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
          </S.ImagesWrap>
        </S.Slide>
        <S.Slide>
          <S.ImagesWrap>
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
          </S.ImagesWrap>
          <S.ImagesWrap>
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
          </S.ImagesWrap>
          <S.ImagesWrap>
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
          </S.ImagesWrap>
        </S.Slide>
        <S.Slide>
          <S.ImagesWrap>
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
          </S.ImagesWrap>
          <S.ImagesWrap>
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
          </S.ImagesWrap>
          <S.ImagesWrap>
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
          </S.ImagesWrap>
        </S.Slide>
      </Slider>
    </S.Wrapper>
  );
}
