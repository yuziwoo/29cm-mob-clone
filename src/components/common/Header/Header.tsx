import { Link, useLocation } from 'react-router-dom';
import * as S from './Header.styled';
import { useEffect, useRef, useState } from 'react';
import { formatLocation } from '../../../utils/formatLocation';
import IconLogo from '../../icons/IconLogo';
import { theme } from '../../../styles/theme';
import { ROUTE_PATH } from '../../../constants/path';
import IconSearch from '../../icons/IconSearch';
import IconAlert from '../../icons/IconAlert';
import IconCart from '../../icons/IconCart';

const Header = () => {
  // header 카테고리 강조 효과
  const { pathname } = useLocation();
  const [location, setLocation] = useState('');

  // header height만큼 content padding 적용하기
  const headerRef = useRef<null | HTMLElement>(null);
  const initialHeaderHeight = 10000;
  const [headerHeight, setHeaderHeight] = useState(initialHeaderHeight);

  useEffect(() => {
    setLocation(formatLocation(pathname));

    if (headerRef.current !== null) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [pathname]);

  // header shadow 효과 : 0 ~ 19px 스크롤 이동되면 opacity 0 ~ 0.95로 증가
  const [shadowOpacity, setShadowOpacity] = useState(0);
  const MAX_SHADOW_EVENT_RANGE = 19;
  const MAX_SHADOW_OPACITY = 0.95;

  useEffect(() => {
    const handleShadowOpacity = () => {
      const top = -document.body.getBoundingClientRect().top;
      if (top < 120) {
        if (top > MAX_SHADOW_EVENT_RANGE) {
          setShadowOpacity(MAX_SHADOW_OPACITY);
          return;
        }
        setShadowOpacity(top / 20);
      }
    };

    handleShadowOpacity();
    window.addEventListener('scroll', handleShadowOpacity);

    return () => {
      window.removeEventListener('scroll', handleShadowOpacity);
    };
  }, []);

  return (
    <>
      <div
        className="header-clone"
        style={{ height: headerHeight !== initialHeaderHeight ? `${headerHeight}px` : '100vh' }}
      ></div>
      <S.Header
        ref={headerRef}
        $location={location}
        $useBlur={shadowOpacity === MAX_SHADOW_OPACITY}
      >
        <S.Shadow style={{ opacity: shadowOpacity }} />
        <S.MainHeader>
          <S.Logo>
            <Link to={ROUTE_PATH.root}>
              <IconLogo color={theme.color.WHITE} />
            </Link>
          </S.Logo>
          <S.Icons>
            <button>
              <IconSearch color={theme.color.WHITE} />
            </button>
            <button>
              <IconAlert color={theme.color.WHITE} />
            </button>
            <button>
              <IconCart color={theme.color.WHITE} />
            </button>
          </S.Icons>
        </S.MainHeader>
      </S.Header>
    </>
  );
};

export default Header;
