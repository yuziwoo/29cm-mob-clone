import { theme } from '../../styles/theme';

interface IconAlertProps {
  color?: string;
}

const IconAlert = ({ color = theme.color.BLACK }: IconAlertProps) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%' }}
    >
      <path
        d="M22.5721 9.72258C22.5721 5.12582 18.8457 1.39941 14.249 1.39941C9.65219 1.39941 5.92578 5.12582 5.92578 9.72258"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M5.92683 9.48438V16.1429L4.5 19.4722H24L22.5732 16.1429V9.48438"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M18.768 21.8506C18.768 24.4773 16.8516 26.6067 14.4875 26.6067C12.1235 26.6067 10.207 24.4773 10.207 21.8506"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

export default IconAlert;
