import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './Header.styled';
import { theme } from '../../../styles/theme';
import { ROUTE_PATH } from '../../../constants/path';
import { formatLocation } from '../../../utils/formatLocation';
import IconLogo from '../../icons/IconLogo';
import HeaderShadow from './HeaderShadow/HeaderShadow';
import HeaderIcons from './HeaderIcons/HeaderIcons';
import HeaderCategory from './HeaderCategory/HeaderCategory';

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

        {location !== 'login' && <HeaderCategory location={location} />}
      </S.Header>
    </>
  );
};

export default Header;
