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

  return (
    <S.SectionFooter>
      <MainFooter location={location} />
    </S.SectionFooter>
  );
};

export default Footer;
