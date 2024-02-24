import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './Header.styled';
import { ROUTE_PATH } from '../../../constants/path';
import { formatLocation } from '../../../utils/formatLocation';
import IconLogo from '../../icons/IconLogo';
import HeaderShadow from './HeaderShadow/HeaderShadow';
import HeaderIcons from './HeaderIcons/HeaderIcons';
import HeaderCategory from './HeaderCategory/HeaderCategory';
import { motion } from 'framer-motion';
import { motionStyle } from '../../../styles/motion';
import { scrollTop } from '../../../utils/scrollTop';
import { useRecoilState } from 'recoil';
import { headerStateRecoil } from '../../../recoil/headerState';
import IconLeftArrow from '../../icons/IconLeftArrow';
import { useRouter } from '../../../hooks/useRouter';

const Header = () => {
  // location에 맞춰서 header 카테고리 강조 효과
  const { pathname } = useLocation();
  const [location, setLocation] = useState('');

  useEffect(() => {
    setLocation(formatLocation(pathname));
  }, [pathname]);

  // header height만큼 content padding 적용하기
  const headerRef = useRef<null | HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState<null | number>(null);

  const handleSetHeaderHeight = () => {
    if (headerRef.current !== null) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  };

  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout | null;
    const resizeHandler = () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }

      resizeTimeout = setTimeout(() => {
        handleSetHeaderHeight();
      }, 100);
    };
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  useEffect(() => {
    handleSetHeaderHeight();

    setTimeout(() => {
      handleSetHeaderHeight();
    }, 100);
  }, [pathname]);

  // 로고 클릭 이벤트 핸들링
  const { navigate } = useRouter();
  const handleClickLogo = () => {
    if (location === '') {
      scrollTop();
      return;
    }
    navigate(ROUTE_PATH.root);
  };

  // header view State
  const [{ color, viewLogo, viewBackButton, viewShadow, viewCategory, viewIcons }] =
    useRecoilState(headerStateRecoil);

  return (
    <>
      <div
        className="header-related-height"
        style={{ height: headerHeight ? `${headerHeight}px` : '100vh' }}
      ></div>

      <S.Header ref={headerRef} $location={location}>
        {viewShadow && <HeaderShadow />}
        <S.MainHeader className="main-header">
          {viewLogo && (
            <motion.button
              whileTap={motionStyle.primaryButton.whileTap}
              transition={motionStyle.primaryButton.transition}
              onClick={handleClickLogo}
            >
              <S.Logo>
                <IconLogo color={color} />
              </S.Logo>
            </motion.button>
          )}

          {viewBackButton && (
            <motion.button
              whileTap={motionStyle.primaryButton.whileTap}
              transition={motionStyle.primaryButton.transition}
              onClick={() => navigate(-1)}
            >
              <S.BackButton>
                <IconLeftArrow color={color} />
              </S.BackButton>
            </motion.button>
          )}

          {viewIcons && <HeaderIcons color={color} />}
        </S.MainHeader>

        {viewCategory && <HeaderCategory location={location} />}
      </S.Header>
    </>
  );
};

export default Header;
