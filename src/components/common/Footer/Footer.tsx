import { useLocation } from 'react-router-dom';
import * as S from './Footer.styled';
import { useEffect, useState } from 'react';
import { formatLocation } from '../../../utils/formatLocation';
import MainFooter from './MainFooter/MainFooter';

const Footer = () => {
  const { pathname } = useLocation();
  const [location, setLocation] = useState('');

  useEffect(() => {
    setLocation(formatLocation(pathname));
  }, [pathname]);

  const hideFooterPage = ['login', 'join'];

  return (
    <S.SectionFooter
      style={{ transform: `translate(-50%, ${hideFooterPage.includes(location) ? 100 : 0}%)` }}
    >
      <MainFooter location={location} />
    </S.SectionFooter>
  );
};

export default Footer;
