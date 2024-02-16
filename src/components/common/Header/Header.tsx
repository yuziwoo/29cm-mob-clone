import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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

  useEffect(() => {
    if (headerRef.current !== null) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [headerRef.current?.offsetHeight]);

  // 로고 클릭 이벤트 핸들링
  const navigate = useNavigate();
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
      <S.RelatedHeaderPosition $height={headerHeight} />

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
              onClick={handleClickLogo}
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
