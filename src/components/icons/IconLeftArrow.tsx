import { theme } from '../../styles/theme';

interface IconLeftArrowProps {
  color?: string;
}

const IconLeftArrow = ({ color = theme.color.BLACK }: IconLeftArrowProps) => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.3358 5.38315C10.807 5.84978 10.807 6.62439 10.3451 7.10036L4.7368 12.7839H26.1073C26.7633 12.7839 27.2992 13.3252 27.2992 13.9972C27.2992 14.6691 26.7633 15.2104 26.1073 15.2104H4.7368L10.3543 20.894C10.8163 21.37 10.807 22.1353 10.3451 22.6112C9.87386 23.0779 9.12548 23.0779 8.65427 22.6019L1.04107 14.8558C0.939441 14.7438 0.856287 14.6225 0.791612 14.4732C0.726937 14.3238 0.699219 14.1652 0.699219 14.0065C0.699219 13.6892 0.81933 13.3906 1.04107 13.1572L8.65427 5.41115C9.107 4.92585 9.86462 4.91652 10.3358 5.38315Z"
        fill={color}
      />
    </svg>
  );
};

export default IconLeftArrow;
