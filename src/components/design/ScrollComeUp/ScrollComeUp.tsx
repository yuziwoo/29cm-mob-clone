import { useEffect, useRef, useState } from 'react';
import { ComponentStyle as S } from './ScrollComeUp.styled';
import { theme } from '../../../styles/theme';

interface ScrollComeUpProps {
  children: React.ReactNode;
  transition?: string;
}

const ScrollComeUp = ({ children, transition = `all 0.6s ${theme.transition.EASE_INOUT}` }: ScrollComeUpProps) => {
  /**
   * 화면에 요소가 나타나면 위로 올라오며 나타납니다.
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
      <S.Inner $active={active} $transition={transition}>{children}</S.Inner>
    </S.Component>
  );
};

export default ScrollComeUp;
