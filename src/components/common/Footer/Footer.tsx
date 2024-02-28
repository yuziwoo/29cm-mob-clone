import * as S from './Footer.styled';
import MainFooter from './MainFooter/MainFooter';
import { footerUI } from '../../../constants/footerUI';
import ProductFooter from './ProductFooter/ProductFooter';
import { useParams } from 'react-router-dom';

interface FooterProps {
  firstPath: string;
}

const Footer = ({ firstPath }: FooterProps) => {
  /**
   * Footer는 firstPath에 따라 다른 UI를 유저에게 보여줍니다.
   */

  const { id } = useParams();

  if (footerUI.HIDDEN.includes(firstPath)) return <></>;
  if (footerUI.PRODUCT.includes(firstPath))
    return (
      <S.SectionFooter style={{ transform: `translate(-50%, 0%)` }}>
        <ProductFooter id={id} />
      </S.SectionFooter>
    );

  return (
    <S.SectionFooter style={{ transform: `translate(-50%, 0%)` }}>
      <MainFooter firstPath={firstPath} />
    </S.SectionFooter>
  );
};

export default Footer;
