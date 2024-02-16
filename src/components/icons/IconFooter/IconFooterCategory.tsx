import { theme } from '../../../styles/theme';

interface IconFooterCategoryProps {
  color?: string;
}

const IconFooterCategory = ({ color = theme.color.BLACK }: IconFooterCategoryProps) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%' }}
    >
      <rect x="4.5" y="4.5" width="19" height="19" stroke={color} />
      <line x1="9" y1="9.5" x2="19" y2="9.5" stroke={color} />
      <line x1="9" y1="14.5" x2="19" y2="14.5" stroke={color} />
      <line x1="9" y1="19.5" x2="19" y2="19.5" stroke={color} />
    </svg>
  );
};

export default IconFooterCategory;
