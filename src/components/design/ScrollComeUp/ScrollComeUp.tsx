import { useEffect, useRef, useState } from 'react';
import { ComponentStyle as S } from './ScrollComeUp.styled';

interface ScrollComeUpProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}

const ScrollComeUp = ({ children, duration = 0.6, delay = 0 }: ScrollComeUpProps) => {
  /**
   * 화면에 요소가 나타나면 위로 올라오며 나타납니다.
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

export default ScrollComeUp;
