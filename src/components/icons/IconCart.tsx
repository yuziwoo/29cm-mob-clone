import { theme } from '../../styles/theme';

interface IconCartProps {
  color?: string;
}

const IconCart = ({ color = theme.color.BLACK }: IconCartProps) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%' }}
    >
      <rect x="3" y="6.5" width="22" height="21" rx="1" stroke={color} strokeWidth="2" />
      <line x1="14" y1="17.25" x2="24" y2="17.25" stroke={color} strokeWidth="2" />

      <mask id="mask_icon_cart" maskUnits="userSpaceOnUse" x="7" y="0" width="14" height="7">
        <rect x="7" width="14" height="7" fill="#FFF" />
      </mask>
      <g mask="url(#mask_icon_cart)">
        <path
          d="M19 8C19 7.35112 18.8707 5.64976 18.6194 5.05027C18.3681 4.45078 17.9998 3.90607 17.5355 3.44724C17.0712 2.98841 16.52 2.62444 15.9134 2.37612C15.3068 2.12781 14.6566 2 14 2C13.3434 2 12.6932 2.12781 12.0866 2.37612C11.48 2.62444 10.9288 2.98841 10.4645 3.44724C10.0002 3.90607 9.63188 4.45078 9.3806 5.05027C9.12933 5.64976 9 7.35112 9 8"
          stroke={color}
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

export default IconCart;
