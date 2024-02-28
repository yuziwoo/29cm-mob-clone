import { useLocation } from 'react-router-dom';
import * as S from './Footer.styled';
import { useEffect, useState } from 'react';
import { formatLocation } from '../../../utils/formatLocation';
import MainFooter from './MainFooter/MainFooter';
import { ROUTE_PATH } from '../../../constants/path';

const hideFooter = [ROUTE_PATH.login.replace('/', ''), ROUTE_PATH.join.replace('/', '')];
const productFooter = [ROUTE_PATH.productDetail.split('/')[1]];

const page = {
  hideFooter,
  productFooter,
};

const Footer = () => {
  const { pathname } = useLocation();
  const [location, setLocation] = useState('');

  useEffect(() => {
    setLocation(formatLocation(pathname));
  }, [pathname]);

  if (page.hideFooter.includes(location)) return <></>;
  if (page.productFooter.includes(location))
    return (
      <S.SectionFooter style={{ transform: `translate(-50%, 0%)` }}>
        상품 구매 footer
      </S.SectionFooter>
    );

  return (
    <S.SectionFooter style={{ transform: `translate(-50%, 0%)` }}>
      <MainFooter location={location} />
    </S.SectionFooter>
  );
};

export default Footer;
