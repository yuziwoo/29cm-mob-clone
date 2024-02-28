import * as S from './ProductInfo.styled';
import { ProductProps } from '../../../types/product';
import ProductLikes from '../ProductLikes/ProductLikes';
import IconRightArrow2 from '../../icons/IconRightArrow2';
import { theme } from '../../../styles/theme';
import { useRouter } from '../../../hooks/useRouter';
import StarRating from '../StarRating/StarRating';
import { getDiscount } from '../../../utils/getDiscount';
import { useCallback } from 'react';
import IconDownload from '../../icons/IconDownlad';
import { motion } from 'framer-motion';
import { motionStyle } from '../../../styles/motion';
import { getAccrualPoints } from '../../../utils/getAccrualPoints';
import ProductMyAvaliablePurchasePrice from './ProductMyAvaliablePurchasePrice/ProductMyAvaliablePurchasePrice';
import { mockCouponDiscount, mockPaymentDiscount } from '../../../mock/product';
import { sortDiscountList } from '../../../utils/product/sortDiscountList';
import { elementId } from '../../../constants/elementId';
import SkeletonText from '../../skeleton/common/SkeletonText';

interface ProductInfoProps {
  product: ProductProps | undefined;
  productId: string | undefined;
}

const undefinedProduct = {
  name: '',
  brandId: '',
  brandName: '',
  price: 0,
  discount: 0,
  review: 0,
  reviewRating: 0,
};

const ProductInfo = ({ product, productId }: ProductInfoProps) => {
  const {
    name,
    brandId,
    brandName,
    price,
    discount: priceAfterDiscount,
    review,
    reviewRating,
  } = product ? product : undefinedProduct;

  const { navigate } = useRouter();

  const discount = getDiscount(price, priceAfterDiscount);
  const accrualPoint = getAccrualPoints(priceAfterDiscount);

  const handleClickReview = useCallback(() => {
    const reviewSection = document.getElementById(elementId.productDetail.REVIEW);
    if (reviewSection) {
      window.scrollTo(0, reviewSection.offsetTop);
    }
  }, []);

  const couponDiscounts = sortDiscountList(mockCouponDiscount);
  const paymentDiscounts = sortDiscountList(mockPaymentDiscount);

  if (product === undefined || productId === undefined)
    return (
      <S.SectionInfo>
        <SkeletonText width="40px" height="14px" />
        <div style={{ padding: '2rem 0' }}>
          <SkeletonText width="300px" height="18px" />
        </div>
        <SkeletonText width="120px" height="12px" />

        <div style={{ padding: '4rem 0' }}>
          <SkeletonText width="70px" height="16px" />
          <div style={{ padding: '1rem 0' }}>
            <SkeletonText width="200px" height="22px" />
          </div>
          <SkeletonText width="120px" height="14px" />
        </div>
        <S.HR />
      </S.SectionInfo>
    );

  return (
    <S.SectionInfo>
      <S.BrandAndLikesWrap>
        <S.Brand
          onClick={() => {
            navigate(`/brand/${brandId}`);
          }}
        >
          <p>{brandName}</p>
          <IconRightArrow2 color={theme.color.GRAY7} />
        </S.Brand>
        <S.Like>
          <ProductLikes productId={productId ? productId : ''} />
        </S.Like>
      </S.BrandAndLikesWrap>

      <S.ProductName>{name}</S.ProductName>

      <S.Review onClick={handleClickReview}>
        <S.Star>
          <StarRating percentage={reviewRating} />
        </S.Star>
        <p>{review}개 리뷰 보기</p>
      </S.Review>

      <S.Price>
        <div>
          <S.OriginalPrice>{price.toLocaleString()}</S.OriginalPrice>
          <S.FinalPrice>
            <S.Discount>{discount}%</S.Discount>
            <S.PriceAfterDiscount>{priceAfterDiscount.toLocaleString()}</S.PriceAfterDiscount>
            <S.PriceUnit>원</S.PriceUnit>
          </S.FinalPrice>
          <S.AccrualPoint>{accrualPoint}p (1%) 적립</S.AccrualPoint>
        </div>

        <motion.button
          whileTap={motionStyle.scaleButton.whileTap}
          transition={motionStyle.scaleButton.transition}
        >
          <S.Coupon>
            <p>쿠폰받기</p>
            <IconDownload color={theme.color.WHITE} />
          </S.Coupon>
        </motion.button>
      </S.Price>

      <S.HR />

      <ProductMyAvaliablePurchasePrice
        counponDiscounts={couponDiscounts}
        paymentDiscounts={paymentDiscounts}
        originalPrice={price}
        brandDiscount={discount}
        priceAfterBrandDiscount={priceAfterDiscount}
      />

      <S.HR />

      <S.DetailContent>
        <S.DetailContentRow>
          <S.DetailContentTitle>무이자 할부</S.DetailContentTitle>
          <S.DetailContentDescription>
            최대 <span style={{ fontWeight: '700' }}>6개월 무이자</span> 할부
          </S.DetailContentDescription>
        </S.DetailContentRow>
      </S.DetailContent>

      <S.HR />

      <S.DetailContent>
        <S.DetailContentRow>
          <S.DetailContentTitle>배송 정보</S.DetailContentTitle>
          <S.DetailContentDescription>
            일반 출고
            <br />
            <span style={{ color: theme.color.BLUE, fontWeight: '700' }}>3일 이내</span> 출고 (주말,
            공휴일 제외)
          </S.DetailContentDescription>
        </S.DetailContentRow>

        <S.DetailContentRow>
          <S.DetailContentTitle>배송비</S.DetailContentTitle>
          <S.DetailContentDescription>
            배송비 3,000원 발생
            <br />
            제주도를 포함한 도서/산간 지역은 추가 배송비 3,000원
          </S.DetailContentDescription>
        </S.DetailContentRow>
      </S.DetailContent>

      <S.HR />
    </S.SectionInfo>
  );
};

export default ProductInfo;
