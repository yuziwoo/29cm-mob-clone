import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './Header.styled';
import { theme } from '../../../styles/theme';
import { ROUTE_PATH } from '../../../constants/path';
import { formatLocation } from '../../../utils/formatLocation';
import IconLogo from '../../icons/IconLogo';
import HeaderShadow from './HeaderShadow/HeaderShadow';
import HeaderIcons from './HeaderIcons/HeaderIcons';

const Header = () => {
  // header 카테고리 강조 효과
  const { pathname } = useLocation();
  const [location, setLocation] = useState('');

  // header height만큼 content padding 적용하기
  const headerRef = useRef<null | HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState<null | number>(null);

  useEffect(() => {
    setLocation(formatLocation(pathname));

    if (headerRef.current !== null) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [pathname]);

  return (
    <>
      <S.RelatedHeaderPosition $height={headerHeight} />
      <S.Header ref={headerRef} $location={location}>
        {location === '' && <HeaderShadow />}
        <S.MainHeader className="main-header">
          <S.Logo>
            <Link to={ROUTE_PATH.root}>
              <IconLogo color={theme.color.WHITE} />
            </Link>
          </S.Logo>
          {location !== 'login' && <HeaderIcons />}
        </S.MainHeader>

        <S.Category className="category">
          <S.CategoryWrap>
            <Link to={ROUTE_PATH.man} className={location === 'man' ? 'active' : ''}>
              <p>맨</p>
            </Link>
            <Link to={ROUTE_PATH.root} className={location === '' ? 'active' : ''}>
              <p>홈</p>
            </Link>
            <Link to={ROUTE_PATH.life} className={location === 'life' ? 'active' : ''}>
              <p>라이프</p>
            </Link>
            <Link to={ROUTE_PATH.woman} className={location === 'woman' ? 'active' : ''}>
              <p>우먼</p>
            </Link>
            <Link to={ROUTE_PATH.best} className={location === 'best' ? 'active' : ''}>
              <p>베스트</p>
            </Link>
          </S.CategoryWrap>
        </S.Category>
      </S.Header>
    </>
  );
};

export default Header;
