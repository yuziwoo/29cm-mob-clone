import { theme } from '../../styles/theme';

interface IconSearchProps {
  color?: string;
}

const IconSearch = ({ color = theme.color.BLACK }: IconSearchProps) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%' }}
    >
      <circle cx="12.5" cy="12.5" r="11.25" stroke={color} strokeWidth="2" />
      <path d="M21 21L27 27" stroke={color} strokeWidth="2" />
    </svg>
  );
};

export default IconSearch;
