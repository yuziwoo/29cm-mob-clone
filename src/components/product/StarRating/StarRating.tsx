import * as S from './StarRating.styled';
import { theme } from '../../../styles/theme';
import IconStar from '../../icons/IconStar';

interface StarRatingProps {
  color?: string;
  percentage: number;
}

const fiveArray = [0, 1, 2, 3, 4];

const StarRating = ({ color = theme.color.BLACK, percentage }: StarRatingProps) => {
  /**
   * percentage === 1 ~ 100
   */

  return (
    <S.StarRatingStyle>
      <S.EmptyStar>
        {fiveArray.map((number) => (
          <IconStar fill="transparent" stroke={color} key={number} />
        ))}
      </S.EmptyStar>

      <S.FullStar $percentage={percentage}>
        {fiveArray.map((number) => (
          <IconStar fill={color} stroke={color} key={number} />
        ))}
      </S.FullStar>
    </S.StarRatingStyle>
  );
};

export default StarRating;
