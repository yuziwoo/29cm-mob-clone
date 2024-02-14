import { useEffect, useState } from 'react';
import * as S from './HeaderShadow.styled';

const HeaderShadow = () => {
  // header shadow 효과 : 0 ~ 19px 스크롤 이동되면 opacity 0 ~ 0.95로 증가
  const [shadowOpacity, setShadowOpacity] = useState(0);
  const SHADOW_EVENT_RANGE = 19;
  const MAX_SHADOW_OPACITY = 0.95;
  const MAX_SHADOW_EVENT_RANGE = 120;
  const shadowStep = SHADOW_EVENT_RANGE / MAX_SHADOW_OPACITY;

  useEffect(() => {
    const handleShadowOpacity = () => {
      const top = -document.body.getBoundingClientRect().top;
      if (top < MAX_SHADOW_EVENT_RANGE) {
        if (top > SHADOW_EVENT_RANGE) {
          setShadowOpacity(MAX_SHADOW_OPACITY);
          return;
        }
        setShadowOpacity(top / shadowStep);
      }
    };

    handleShadowOpacity();
    window.addEventListener('scroll', handleShadowOpacity);

    return () => {
      window.removeEventListener('scroll', handleShadowOpacity);
    };
    // eslint-disable-next-line
  }, []);

  return <S.Shadow className="shadow" style={{ opacity: shadowOpacity }}></S.Shadow>;
};

export default HeaderShadow;
