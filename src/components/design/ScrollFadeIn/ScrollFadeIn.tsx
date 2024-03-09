import { motion } from 'framer-motion';
import { motionStyle } from '../../../styles/motion';

interface ScrollFadeInProps {
  children: React.ReactNode;
  duration?: number | null;
  delay?: number | null;
}

const ScrollFadeIn = ({ children, duration = null, delay = null }: ScrollFadeInProps) => {
  /**
   * 화면에 요소가 보여지면 FadeIn 효과와 함께 나타납니다.
   *
   * @params
   * duration: 단위 s
   * delay: 단위 s
   */

  const customDuration =
    duration === null ? motionStyle.scrollFadeIn.transition.duration : duration;
  const customDelay = delay === null ? motionStyle.scrollFadeIn.transition.delay : delay;

  const transition = {
    ...motionStyle.scrollFadeIn.transition,
    duration: customDuration,
    delay: customDelay,
  };

  return (
    <motion.div
      initial={motionStyle.scrollFadeIn.initial}
      whileInView={motionStyle.scrollFadeIn.whileInView}
      transition={transition}
      viewport={motionStyle.scrollFadeIn.viewport}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn;
