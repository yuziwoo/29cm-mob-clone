import { theme } from '../../../styles/theme';

interface IconFooterMyProps {
  color?: string;
}

const IconFooterMy = ({ color = theme.color.BLACK }: IconFooterMyProps) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%' }}
    >
      <line x1="14.5" y1="4" x2="14.5" y2="11" stroke={color} />
      <line x1="5.5" y1="13" x2="5.5" y2="24" stroke={color} />
      <line x1="5" y1="13.5" x2="23" y2="13.5" stroke={color} />
      <line x1="22.5" y1="13" x2="22.5" y2="24" stroke={color} />
    </svg>
  );
};

export default IconFooterMy;
