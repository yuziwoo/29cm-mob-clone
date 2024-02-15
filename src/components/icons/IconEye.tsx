import { theme } from '../../styles/theme';

interface IconEyeProps {
  color?: string;
}

const IconEye = ({ color = theme.color.BLACK }: IconEyeProps) => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.5 13.9997C6 8.16632 15.5 -0.000344753 25.5 13.9997C22 19.4995 12.5 27.1994 2.5 13.9997Z"
        stroke={color}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <circle cx="14" cy="14" r="4" stroke={color} stroke-width="2" />
    </svg>
  );
};

export default IconEye;
