import * as S from './StarRating.styled';
import { theme } from '../../../styles/theme';
import IconStar from '../../icons/IconStar';

interface StarRatingProps {
  color?: string;
  percentage: number | undefined;
}

const fiveArray = [0, 1, 2, 3, 4];

const StarRating = ({ color = theme.color.BLACK, percentage }: StarRatingProps) => {
  /**
   * 리뷰 점수를 보여줄 때 사용합니다.
   *
   * @params
   * percentage: 1~ 100 사이의 퍼센트 값에 따라 별을 색칠합니다.
   */

  return (
    <S.StarRatingStyle>
      <S.EmptyStar>
        {fiveArray.map((number) => (
          <IconStar fill="transparent" stroke={color} key={number} />
        ))}
      </S.EmptyStar>

      <S.FullStar $percentage={percentage !== undefined ? percentage : 0}>
        {fiveArray.map((number) => (
          <IconStar fill={color} stroke={color} key={number} />
        ))}
      </S.FullStar>
    </S.StarRatingStyle>
  );
};

export default StarRating;
