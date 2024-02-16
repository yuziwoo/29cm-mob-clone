import { theme } from '../../../styles/theme';

interface IconFooterHomeProps {
  color?: string;
}

const IconFooterHome = ({ color = theme.color.BLACK }: IconFooterHomeProps) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%' }}
    >
      <rect x="3" y="4" width="10" height="10" fill={color} />
      <rect x="3" y="15" width="10" height="10" fill={color} />
      <rect x="14" y="4" width="10" height="10" fill={color} />
      <rect x="14" y="15" width="10" height="10" fill={color} />
    </svg>
  );
};

export default IconFooterHome;
