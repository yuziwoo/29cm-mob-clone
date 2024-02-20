import { theme } from '../../../styles/theme';

interface IconFooterSearchProps {
  color?: string;
}

const IconFooterSearch = ({ color = theme.color.BLACK }: IconFooterSearchProps) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%' }}
    >
      <mask id="icon-footer-mask" maskUnits="userSpaceOnUse" x="3" y="4" width="22" height="21">
        <rect x="3" y="4" width="22" height="21" fill="white" />
      </mask>
      <g mask="url(#icon-footer-mask)">
        <circle cx="14" cy="13" r="8.5" stroke={color} />
        <path d="M18.4472 19.7764L22 25.5" stroke={color} />
      </g>
    </svg>
  );
};

export default IconFooterSearch;
