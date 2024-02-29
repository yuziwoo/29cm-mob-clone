import { motion } from 'framer-motion';
import { motionStyle } from '../../../styles/motion';

interface PageCommonAnimationProps {
  children: React.ReactNode;
}

const PageCommonAnimation = ({ children }: PageCommonAnimationProps) => {
  return (
    <motion.div
      initial={motionStyle.pageOpen.initial}
      animate={motionStyle.pageOpen.animate}
      transition={motionStyle.pageOpen.transition}
      style={{ position: 'relative', width: '100%' }}
    >
      {children}
    </motion.div>
  );
};

export default PageCommonAnimation;
