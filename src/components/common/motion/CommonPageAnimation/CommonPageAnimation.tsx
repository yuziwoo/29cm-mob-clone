import { AnimatePresence, motion } from 'framer-motion';
import { motionStyle } from '../../../../styles/motion';

interface CommonPageAnimationProps {
  children: React.ReactNode;
}

const CommonPageAnimation = ({ children }: CommonPageAnimationProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={motionStyle.pageOpen.initial}
        animate={motionStyle.pageOpen.animate}
        transition={motionStyle.pageOpen.transition}
        exit={motionStyle.pageOpen.exit}
        style={{ position: 'relative', width: '100%' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default CommonPageAnimation;
