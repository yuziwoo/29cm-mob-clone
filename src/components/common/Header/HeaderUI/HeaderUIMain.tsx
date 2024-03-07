import { useCallback, useEffect, useState } from 'react';
import { elementId } from '../../../../constants/elementId';
import { theme } from '../../../../styles/theme';
import { ComponentStyle as S } from '../Header.styled';
import HeaderCategory from '../HeaderCategory/HeaderCategory';
import HeaderIcons from '../HeaderIcons/HeaderIcons';
import HeaderLogoButton from '../HeaderLogoButton/HeaderLogoButton';

interface HeaderUIMainProps {
  firstPath: string;
  height: number | undefined;
}

const HeaderUIMain = ({ firstPath, height }: HeaderUIMainProps) => {
  /**
   * 메인페이지에서 사용되는 Header UI입니다.
   * 유저의 스크롤에 반응하여 배경의 불투명도를 지정합니다.
   */

  // 스크롤 이벤트를 가동할 범위를 px 단위로 지정합니다.
  const SCROLL_EVENT_RANGE = 60;

  // 최대값을 지정합니다.
  const MAXIMUM_BLUR_PX = 30;
  const step = SCROLL_EVENT_RANGE / MAXIMUM_BLUR_PX;
  const initialBlur = -document.body.getBoundingClientRect().top / step;
  const [blur, setBlur] = useState(initialBlur);

  const handleChangeBlur = useCallback(() => {
    const posY = -document.body.getBoundingClientRect().top;

    if (posY <= SCROLL_EVENT_RANGE) {
      setBlur(posY / step);
      return;
    }

    // 최대값을 넘긴 경우
    if (blur !== MAXIMUM_BLUR_PX) {
      setBlur(MAXIMUM_BLUR_PX);
    }
  }, [blur, step]);

  useEffect(() => {
    handleChangeBlur();
    window.addEventListener('scroll', handleChangeBlur);

    return () => {
      window.removeEventListener('scroll', handleChangeBlur);
    };
  }, [handleChangeBlur]);

  return (
    <>
      <S.RelatedHeight $height={height} />
      <S.HeaderUIMain id={elementId.common.HEADER} $blur={blur}>
        <S.Shadow $opacity={blur / 50} />
        <S.MainHeader>
          <HeaderLogoButton firstPath={firstPath} color={theme.color.WHITE} />
          <HeaderIcons color={theme.color.WHITE} />
        </S.MainHeader>
        <HeaderCategory location={firstPath} />
      </S.HeaderUIMain>
    </>
  );
};

export default HeaderUIMain;
