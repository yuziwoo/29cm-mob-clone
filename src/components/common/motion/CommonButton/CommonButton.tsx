import { motion } from 'framer-motion';
import { motionStyle } from '../../../../styles/motion';
import { CSSProperties } from 'styled-components';

interface CommonButtonProps {
  children: React.ReactNode;
  style?: CSSProperties;
  onClick?: () => void;
  className?: string;
}

const CommonButton = ({ children, style, onClick, className }: CommonButtonProps) => (
  <motion.button
    whileTap={motionStyle.primaryButton.whileTap}
    transition={motionStyle.primaryButton.transition}
    style={style}
    onClick={onClick}
    className={className}
  >
    {children}
  </motion.button>
);

export default CommonButton;
