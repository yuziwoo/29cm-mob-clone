import { useCallback, useState } from 'react';
import * as S from './ProductDetailsImg.styled';
import IconDownArrow2 from '../../icons/IconDownArrow2';
import { theme } from '../../../styles/theme';

interface ProductDetailsImgProps {
  imgURL: string | undefined;
}

const ProductDetailsImg = ({ imgURL }: ProductDetailsImgProps) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = useCallback(() => {
    setShowAll((prevState) => !prevState);
  }, []);

  if (imgURL === undefined) return <div></div>;

  return (
    <S.SectionDetailImg $showAll={showAll}>
      <S.Title>상품 설명</S.Title>
      <img src={imgURL} alt="상품 상세 이미지" />

      <S.ShowMore>
        <S.ShowMoreButton onClick={toggleShowAll}>
          <p>상품 설명 {showAll ? '접기' : '더보기'}</p>
          <S.Arrow $showAll={showAll}>
            <IconDownArrow2 color={theme.color.BLACK} />
          </S.Arrow>
        </S.ShowMoreButton>
      </S.ShowMore>
    </S.SectionDetailImg>
  );
};

export default ProductDetailsImg;
