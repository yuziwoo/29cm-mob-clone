import * as S from './ProductReview.styled';
import { ReviewInfo } from '../../../types/product';
import { useEffect, useState } from 'react';
import StarRating from '../StarRating/StarRating';
import { theme } from '../../../styles/theme';
import ProductReviewImgs from './ProductReviewImgs/ProductReviewImgs';
import { motion } from 'framer-motion';
import { motionStyle } from '../../../styles/motion';
import IconRightArrow2 from '../../icons/IconRightArrow2';

interface ProductReviewProps {
  reviews: ReviewInfo[] | undefined;
}

const ProductReview = ({ reviews }: ProductReviewProps) => {
  const [overAllReview, setOverAllReview] = useState({
    rate: 0,
    count: 0,
  });

  useEffect(() => {
    let totalRate = 0;
    const count = reviews?.length || 0;

    if (reviews !== undefined) {
      for (const review of reviews) {
        totalRate += review.rate;
      }
    }
    const rate = Math.round((totalRate / count) * 10);

    setOverAllReview({ rate, count });
  }, [reviews]);

  if (reviews === undefined)
    return (
      <S.ReviewComponent>
        <S.TitleWrap>
          <S.Title>리뷰</S.Title>
        </S.TitleWrap>

        <S.ReviewImgsWrap>
          <ProductReviewImgs imgs={undefined} />
        </S.ReviewImgsWrap>
      </S.ReviewComponent>
    );
  return (
    <S.ReviewComponent>
      <S.TitleWrap>
        <S.Title>리뷰 ({overAllReview.count})</S.Title>
        <S.Rate>
          <StarRating color={theme.color.SIGNATURE} percentage={overAllReview.rate} />
        </S.Rate>
      </S.TitleWrap>

      <S.ReviewImgsWrap>
        <ProductReviewImgs imgs={reviews.map((review) => review.imgs[0])} />
      </S.ReviewImgsWrap>

      <div>
        {reviews.slice(0, 3).map((review, idx) => (
          <S.ReviewDetail key={idx}>
            <motion.div
              style={{ cursor: 'pointer' }}
              whileTap={motionStyle.scaleButton.whileTap}
              transition={motionStyle.scaleButton.transition}
            >
              <S.FlexSpaceBetween>
                <div>
                  <S.FlexWrap>
                    <S.ReviewDetailRate>
                      <StarRating color={theme.color.BLACK} percentage={review.rate * 10} />
                    </S.ReviewDetailRate>
                    <S.Writer>{review.writerId}</S.Writer>
                  </S.FlexWrap>

                  <S.Size>
                    체형 {review.height}cm, {review.weight}kg
                    <br />
                    {review.fit}
                  </S.Size>
                </div>
                <S.DetailImgThumb>
                  {review.imgs.length > 0 && <img src={review.imgs[0]} alt="리뷰 이미지" />}
                </S.DetailImgThumb>
              </S.FlexSpaceBetween>

              <S.Text>{review.review}</S.Text>
            </motion.div>
          </S.ReviewDetail>
        ))}
      </div>

      <motion.button
        style={{ cursor: 'pointer', width: '100%' }}
        whileTap={motionStyle.scaleButton.whileTap}
        transition={motionStyle.scaleButton.transition}
      >
        <S.ShowAllButton>
          <p>리뷰 전체 보기 ({reviews.length})</p>
          <div>
            <IconRightArrow2 color={theme.color.BLACK} />
          </div>
        </S.ShowAllButton>
      </motion.button>
    </S.ReviewComponent>
  );
};

export default ProductReview;
