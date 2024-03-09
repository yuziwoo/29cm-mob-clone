import { ComponentStyle as S } from './CarouselText.styled';

interface CarouselTextProps {
  text: string;
  dir?: 'left' | 'right';
  speed?: number;
  fontStyle?: React.CSSProperties;
}

const CarouselText = (props: CarouselTextProps) => {
  /**
   * 좌우로 흐르는 캐러셀 텍스트입니다.
   *
   * @params
   * text: 문구
   * dir: 좌, 우 흐르는 방향
   * speed: 전체 한 바퀴 도는데 걸리는 시간 (s)
   * fontStyle: CSS 폰트 스타일
   */

  const { text, dir = 'left', speed = 20, fontStyle } = props;

  return (
    <S.Component>
      <S.Text style={fontStyle} $speed={speed} $dir={dir}>
        {text}
      </S.Text>
      <S.Text style={fontStyle} $speed={speed} $dir={dir}>
        {text}
      </S.Text>
      <S.Text style={fontStyle} $speed={speed} $dir={dir}>
        {text}
      </S.Text>
      <S.Text style={fontStyle} $speed={speed} $dir={dir}>
        {text}
      </S.Text>
      <S.Text style={fontStyle} $speed={speed} $dir={dir}>
        {text}
      </S.Text>
    </S.Component>
  );
};

export default CarouselText;
