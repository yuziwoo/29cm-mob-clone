import { ComponentStyle as S } from './CarouselImg.styled';

interface CarouselImgProps {
  height: string;
  src: string;
  alt?: string;
  dir?: 'left' | 'right';
  speed?: number;
}

const CarouselImg = (props: CarouselImgProps) => {
  /**
   * 좌우로 흐르는 캐러셀 이미지입니다.
   *
   * @params
   * height: 단위를 포함한 이미지의 height값
   * src: 이미지 URL
   * alt: 이미지 alt
   * dir: 좌, 우 흐르는 방향
   * speed: 전체 한 바퀴 도는데 걸리는 시간 (s)
   */

  const { height, src, alt = '캐러셀 이미지', dir = 'left', speed = 20 } = props;

  return (
    <S.Component $height={height}>
      <S.Img src={src} alt={alt} $speed={speed} $dir={dir} />
      <S.Img src={src} alt={alt} $speed={speed} $dir={dir} />
      <S.Img src={src} alt={alt} $speed={speed} $dir={dir} />
      <S.Img src={src} alt={alt} $speed={speed} $dir={dir} />
      <S.Img src={src} alt={alt} $speed={speed} $dir={dir} />
    </S.Component>
  );
};

export default CarouselImg;
