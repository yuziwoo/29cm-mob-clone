import { mockMainPageButtons } from '../../../mock/mainPage';
import { ComponentStyle as S } from './ButtonSlider.styled';
import CommonButton from '../../common/motion/CommonButton/CommonButton';
import IconRightArrow3 from '../../icons/IconRightArrow3';
import { theme } from '../../../styles/theme';
import { useCallback, useEffect, useRef, useState } from 'react';

const ButtonSlider = () => {
  /**
   * 메인페이지에서 사용되는 슬라이드되는 버튼 리스트입니다.
   */

  // 스크롤 이벤트가 발생하면 상단(조금 더 긴 ButtonWrapper Element)를 transform하여 함께 움직이게 작동시킵니다.
  const elementToMove = useRef<HTMLDivElement | null>(null);
  const elementStandard = useRef<HTMLDivElement | null>(null);

  const [elementWidth, setElementWidth] = useState(550);
  const [translateX, setTranslateX] = useState(0);

  const scrollElement = useCallback(
    (e: React.UIEvent<Element, UIEvent>) => {
      if (elementToMove.current === null) return;

      const windowWidth = window.innerWidth > 550 ? 550 : window.innerWidth;
      const scrollWidth = e.currentTarget.scrollWidth - windowWidth;
      const progress = Math.round((e.currentTarget.scrollLeft / scrollWidth) * 100);

      const translateStep = (elementToMove.current.scrollWidth - elementWidth) / 100;
      setTranslateX(translateStep * progress);
    },
    [elementToMove, elementWidth]
  );

  // 스크롤 이벤트를 발생시키기 위해서 긴 ButtonWrapper와 짧은 ButtonWrapper의 Width 차이 값을 구해야합니다.
  useEffect(() => {
    if (elementStandard.current === null) return;

    setElementWidth(elementStandard.current.scrollWidth);
  }, [elementStandard]);

  // 컴퓨터 환경에선 가로 슬라이드가 불편하니 마우스 이벤트로 직접 만들어줍니다.
  const [mouseScrollTrigger, setMouseScrollTrigger] = useState(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMouseScrollTrigger(true);
  };

  useEffect(() => {
    const closeScrollTrigger = () => {
      setMouseScrollTrigger(false);
    };

    document.addEventListener('mouseup', closeScrollTrigger);
    return () => {
      document.removeEventListener('mouseup', closeScrollTrigger);
    };
  }, []);

  useEffect(() => {
    const scrollSlider = (e: MouseEvent) => {
      if (elementStandard.current === null || !mouseScrollTrigger) return;
      elementStandard.current.scrollBy(-e.movementX, 0);
    };

    document.addEventListener('mousemove', scrollSlider);
    return () => {
      document.removeEventListener('mousemove', scrollSlider);
    };
  }, [mouseScrollTrigger]);

  return (
    <S.Component onMouseDown={handleMouseDown}>
      <S.Slider onScroll={scrollElement} ref={elementStandard}>
        <S.TopWrapper style={{ width: `${elementWidth}px` }}>
          <S.ButtonWrap ref={elementToMove} style={{ transform: `translateX(-${translateX}px)` }}>
            {mockMainPageButtons.slice(0, 5).map(({ imgURL, text }, index) => (
              <CommonButton style={{ display: 'inline-block' }} key={index}>
                <S.Button>
                  <S.ImgWrap>
                    <S.Img src={imgURL} alt="버튼 이미지" />
                  </S.ImgWrap>
                  <S.Text>{text}</S.Text>
                  <S.Arrow>
                    <IconRightArrow3 color={theme.color.GRAY3} />
                  </S.Arrow>
                </S.Button>
              </CommonButton>
            ))}
          </S.ButtonWrap>
        </S.TopWrapper>

        <S.ButtonWrap>
          {mockMainPageButtons.slice(6, 10).map(({ imgURL, text }, index) => (
            <CommonButton style={{ display: 'inline-block' }} key={index}>
              <S.Button>
                <S.ImgWrap>
                  <S.Img src={imgURL} alt="버튼 이미지" />
                </S.ImgWrap>
                <S.Text>{text}</S.Text>
                <S.Arrow>
                  <IconRightArrow3 color={theme.color.GRAY3} />
                </S.Arrow>
              </S.Button>
            </CommonButton>
          ))}
        </S.ButtonWrap>
      </S.Slider>
    </S.Component>
  );
};

export default ButtonSlider;
