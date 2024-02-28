import * as S from './Footer.styled';
import MainFooter from './MainFooter/MainFooter';
import { ROUTE_PATH } from '../../../constants/path';

const hideFooter = [ROUTE_PATH.login.replace('/', ''), ROUTE_PATH.join.replace('/', '')];
const productFooter = [ROUTE_PATH.productDetail.split('/')[1]];

const page = {
  hideFooter,
  productFooter,
};

interface FooterProps {
  firstPath: string;
}

const Footer = ({ firstPath }: FooterProps) => {
  /**
   * Footer는 firstPath에 따라 다른 UI를 유저에게 보여줍니다.
   */

  if (page.hideFooter.includes(firstPath)) return <></>;
  if (page.productFooter.includes(firstPath))
    return (
      <S.SectionFooter style={{ transform: `translate(-50%, 0%)` }}>
        상품 구매 footer
      </S.SectionFooter>
    );

  return (
    <S.SectionFooter style={{ transform: `translate(-50%, 0%)` }}>
      <MainFooter firstPath={firstPath} />
    </S.SectionFooter>
  );
};

export default Footer;
