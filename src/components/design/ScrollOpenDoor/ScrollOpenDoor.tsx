import { ComponentStyle as S } from './ScrollOpenDoor.styled';
import { useEffect, useRef, useState } from 'react';

interface ScrollOpenDoorProps {
  children: React.ReactNode;
  dir?: 'left' | 'right';
}

const ScrollOpenDoor = ({ children, dir = 'left' }: ScrollOpenDoorProps) => {
  /**
   * 화면에 요소가 나타나면 문을 열듯이 이미지가 나타납니다.
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
    <S.Component ref={elementRef} $active={active} $dir={dir}>
      <S.Inner $active={active}>{children}</S.Inner>
    </S.Component>
  );
};

export default ScrollOpenDoor;
