import { useCallback, useEffect, useState } from 'react';
import { ComponentStyle as S } from './ProductReviewImgs.styled';
import { motion } from 'framer-motion';
import { motionStyle } from '../../../../styles/motion';
import SkeletonImg from '../../../skeleton/common/SkeletonImg';

interface ProductReviewImgsProps {
  imgs: string[] | undefined;
}

const ProductReviewImgs = ({ imgs }: ProductReviewImgsProps) => {
  /**
   * 상품의 리뷰 이미지를 보여주는 컴포넌트입니다.
   * 최대 6개까지 보여주며, 마지막 6번째 컴포넌트는 (더보기) 버튼으로 가려집니다.
   */

  const [displayImg, setDisplayImg] = useState<string[]>([]);

  useEffect(() => {
    if (imgs === undefined) return;

    const imgLength = imgs.length;
    const displayImgLength = Math.min(imgLength, 6);

    setDisplayImg(imgs.slice(0, displayImgLength));
  }, [imgs]);

  const handleClickShowMore = useCallback(() => {}, []);

  if (imgs === undefined)
    return (
      <S.Component>
        {[0, 1, 2, 3, 4, 5].map((value) => (
          <S.ReviewImg key={value} style={{ paddingBottom: 0 }}>
            <SkeletonImg />
          </S.ReviewImg>
        ))}
      </S.Component>
    );
  return (
    <S.Component>
      {displayImg.map((url, idx) => (
        <motion.div
          className="review-img"
          style={{ backgroundImage: `url(${url})` }}
          key={idx}
          whileTap={motionStyle.primaryButton.whileTap}
          transition={motionStyle.primaryButton.transition}
        >
          {idx === 5 && (
            <S.ShowMore onClick={handleClickShowMore}>
              <S.Shadow className="wrap">
                <S.ShadowText>
                  더보기
                  <br />+{imgs.length - 5}
                </S.ShadowText>
              </S.Shadow>
            </S.ShowMore>
          )}
        </motion.div>
      ))}
    </S.Component>
  );
};

export default ProductReviewImgs;
