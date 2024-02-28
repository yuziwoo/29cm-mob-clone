import * as S from './Footer.styled';
import MainFooter from './MainFooter/MainFooter';
import { footerUI } from '../../../constants/footerUI';

interface FooterProps {
  firstPath: string;
}

const Footer = ({ firstPath }: FooterProps) => {
  /**
   * Footer는 firstPath에 따라 다른 UI를 유저에게 보여줍니다.
   */

  if (footerUI.HIDDEN.includes(firstPath)) return <></>;
  if (footerUI.PRODUCT.includes(firstPath))
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
