import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './ProductDetailsImg.styled';
import IconDownArrow2 from '../../icons/IconDownArrow2';
import { theme } from '../../../styles/theme';
import SkeletonImg from '../../skeleton/common/SkeletonImg';

interface ProductDetailsImgProps {
  imgURL: string | undefined;
}

const ProductDetailsImg = ({ imgURL }: ProductDetailsImgProps) => {
  /**
   * 상품 상세이미지입니다.
   * height 1500px이 넘어가면 상품 설명 더보기 / 접기 버튼을 보여줍니다.
   */

  const [showAll, setShowAll] = useState(false);
  const imgRef = useRef<null | HTMLImageElement>(null);
  const [viewShowAllButton, setViewShowAllButton] = useState(true);

  useEffect(() => {
    if (imgRef.current?.offsetHeight !== undefined && imgRef.current?.offsetHeight < 1500) {
      setViewShowAllButton(false);
      return;
    }
    setViewShowAllButton(true);
  }, [imgRef]);

  const toggleShowAll = useCallback(() => {
    setShowAll((prevState) => !prevState);
  }, []);

  if (imgURL === undefined) return <SkeletonImg ratio={[1, 1.5]}></SkeletonImg>;

  return (
    <S.SectionDetailImg $showAll={showAll}>
      <S.Title>상품 설명</S.Title>
      <img src={imgURL} alt="상품 상세 이미지" ref={imgRef} />

      {viewShowAllButton && (
        <S.ShowMore>
          <S.ShowMoreButton onClick={toggleShowAll}>
            <p>상품 설명 {showAll ? '접기' : '더보기'}</p>
            <S.Arrow $showAll={showAll}>
              <IconDownArrow2 color={theme.color.BLACK} />
            </S.Arrow>
          </S.ShowMoreButton>
        </S.ShowMore>
      )}
    </S.SectionDetailImg>
  );
};

export default ProductDetailsImg;
