import { useCallback, useEffect, useState } from 'react';
import * as S from './HeaderShadow.styled';

const HeaderShadow = () => {
  // header shadow 효과 : 0 ~ 19px 스크롤 이동되면 opacity 0 ~ 0.95로 증가
  const SHADOW_EVENT_RANGE = 30;
  const MAX_SHADOW_OPACITY = 0.6;
  const shadowStep = SHADOW_EVENT_RANGE / MAX_SHADOW_OPACITY;
  const initialOpacity = -document.body.getBoundingClientRect().top / shadowStep;
  const [shadowOpacity, setShadowOpacity] = useState(initialOpacity);

  const handleShadowOpacity = useCallback(() => {
    const top = -document.body.getBoundingClientRect().top;

    if (top <= SHADOW_EVENT_RANGE) {
      setShadowOpacity(top / shadowStep);
      return;
    }
    if (shadowOpacity !== MAX_SHADOW_OPACITY) {
      setShadowOpacity(MAX_SHADOW_OPACITY);
    }

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
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
