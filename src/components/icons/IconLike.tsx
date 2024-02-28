import { theme } from '../../styles/theme';

interface IconLikeProps {
  color?: string;
  isLiked: boolean;
}

const IconLike = ({ color = theme.color.BLACK, isLiked }: IconLikeProps) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
    >
      <path
        d="M22.6291 14.1109L22.629 14.111L22.6289 14.111L22.6288 14.1112L22.6287 14.1113L22.6286 14.1114L14 23.2708L5.37144 14.1114L5.37132 14.1113L5.37119 14.1112L5.37114 14.1111L5.37102 14.111L5.36845 14.1082L5.35496 14.0935C5.34248 14.0798 5.32324 14.0583 5.29818 14.0296C5.24804 13.972 5.17479 13.8855 5.08613 13.7733C4.90846 13.5484 4.67076 13.2231 4.43331 12.8245C3.95336 12.0188 3.5 10.9565 3.5 9.84C3.5 6.86313 5.76664 4.5 8.5 4.5C11.2334 4.5 13.5 6.86178 13.5 9.84H14H14.5C14.5 6.86313 16.7666 4.5 19.5 4.5C22.2334 4.5 24.5 6.86178 24.5 9.84C24.5 10.9572 24.0466 12.0195 23.5667 12.825C23.3293 13.2235 23.0916 13.5487 22.9139 13.7734C22.8253 13.8855 22.7521 13.972 22.7019 14.0295C22.6769 14.0583 22.6576 14.0797 22.6451 14.0934L22.6317 14.1081L22.6291 14.1109Z"
        fill={isLiked ? theme.color.SIGNATURE : 'transparent'}
        stroke={isLiked ? theme.color.SIGNATURE : color}
        style={{ transition: 'fill 0.1s, stroke 0.1s' }}
      />
    </svg>
  );
};

export default IconLike;
