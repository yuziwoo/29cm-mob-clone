import { motion } from 'framer-motion';
import { motionStyle } from '../../../../styles/motion';
import { CSSProperties } from 'styled-components';

interface CommonButtonProps {
  children: React.ReactNode;
  style?: CSSProperties;
  onClick?: () => void;
}

const CommonButton = ({ children, style, onClick }: CommonButtonProps) => (
  <motion.button
    whileTap={motionStyle.primaryButton.whileTap}
    transition={motionStyle.primaryButton.transition}
    style={style}
    onClick={onClick}
  >
    {children}
  </motion.button>
);

export default CommonButton;
