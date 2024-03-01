import { motion } from 'framer-motion';
import { motionStyle } from '../../../../styles/motion';
import { CSSProperties } from 'styled-components';

const CommonButton = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: CSSProperties;
}) => (
  <motion.button
    whileTap={motionStyle.primaryButton.whileTap}
    transition={motionStyle.primaryButton.transition}
    style={style}
  >
    {children}
  </motion.button>
);

export default CommonButton;
