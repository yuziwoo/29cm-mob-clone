import { ComponentStyle as S } from './Footer.styled';
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
      <S.Footer>
        <ProductFooter id={id} />
      </S.Footer>
    );

  return (
    <S.Footer>
      <MainFooter firstPath={firstPath} />
    </S.Footer>
  );
};

export default Footer;
