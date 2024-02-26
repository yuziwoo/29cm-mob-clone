import { theme } from '../../styles/theme';

interface IconStarProps {
  fill?: string;
  stroke?: string;
}

const IconStar = ({ fill = theme.color.BLACK, stroke = theme.color.BLACK }: IconStarProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%' }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.455 4.29167L1 4.81917L3.5 7.38167L2.91 11L6 9.29167L9.09 11L8.5 7.38167L11 4.81917L7.545 4.29167L6 1L4.455 4.29167Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="0.5"
      />
    </svg>
  );
};

export default IconStar;
