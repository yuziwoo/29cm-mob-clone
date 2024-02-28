import { useCallback, useEffect, useState } from 'react';
import * as S from './HeaderShadow.styled';

const HeaderShadow = () => {
  /**
   * 메인 페이지에서 사용되는 shadow effect 컴포넌트입니다.
   * documentElement가 0 ~ 19px 스크롤 이동되면 shadow opacity가 0 ~ 0.95로 증가합니다
   */

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
