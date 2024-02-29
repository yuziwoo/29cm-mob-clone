import { motion } from 'framer-motion';
import { motionStyle } from '../../../../styles/motion';

const CommonButton = ({ children }: { children: React.ReactNode }) => (
  <motion.button
    whileTap={motionStyle.primaryButton.whileTap}
    transition={motionStyle.primaryButton.transition}
  >
    {children}
  </motion.button>
);

export default CommonButton;
