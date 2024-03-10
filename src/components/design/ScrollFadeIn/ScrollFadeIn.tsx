import { ComponentStyle as S } from './ScrollFadeIn.styled';
import { useEffect, useRef, useState } from 'react';

interface ScrollFadeInProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}

const ScrollFadeIn = ({ children, duration = 0.6, delay = 0 }: ScrollFadeInProps) => {
  /**
   * 화면에 요소가 보여지면 FadeIn 효과와 함께 나타납니다.
   *
   * @params
   * duration: 단위 s
   * delay: 단위 s
   */

  const [active, setActive] = useState(false);
  const elementRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current === null) return;

    const handleActiveEvent = (e: Event) => {
      if (elementRef.current?.getBoundingClientRect() === undefined) return;

      const rectTop = elementRef.current?.getBoundingClientRect().top;
      const triggerPoint = (window.innerHeight / 3) * 2;

      if (rectTop < triggerPoint) {
        setActive(true);
        window.removeEventListener('scroll', handleActiveEvent);
      }
    };

    window.addEventListener('scroll', handleActiveEvent);

    return () => {
      window.removeEventListener('scroll', handleActiveEvent);
    };
  }, [elementRef]);

  return (
    <S.Component ref={elementRef}>
      <S.Inner $active={active} $duration={duration} $delay={delay}>
        {children}
      </S.Inner>
    </S.Component>
  );
};

export default ScrollFadeIn;
