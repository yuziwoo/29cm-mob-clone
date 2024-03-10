import { theme } from '../../styles/theme';
interface IconCheckbox2Props {
  checkedColor?: string;
  defaultColor?: string;
  isChecked: boolean;
}

const IconCheckbox2 = ({
  checkedColor = theme.color.BLACK,
  defaultColor = theme.color.GRAY3,
  isChecked,
}: IconCheckbox2Props) => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        width="28"
        height="28"
        fill={isChecked ? checkedColor : 'transparent'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={isChecked ? checkedColor : defaultColor}
        style={{ transition: 'all 0.2s' }}
      />
      <path
        d="M22 8L10.8 20L6 15.5"
        stroke={isChecked ? theme.color.WHITE : defaultColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: 'all 0.2s' }}
      />
    </svg>
  );
};

export default IconCheckbox2;
