import { ComponentStyle as S } from './ListProductSimple.style';
import { ProductProps } from '../../../types/product';
import { motion } from 'framer-motion';
import { useRouter } from '../../../hooks/useRouter';
import { useCallback } from 'react';
import { ROUTE_PATH } from '../../../constants/path';
import { motionStyle } from '../../../styles/motion';
import ProductLikes from '../ProductLikes/ProductLikes';
import { getDiscount } from '../../../utils/getDiscount';
import { mockProduct } from '../../../mock/product';
import SkeletonProductList from '../../skeleton/product/SkeletonProductList';

interface ListProductSimpleProps {
  product: ProductProps | undefined;
  productId: string | undefined;
}

const ListProductSimple = ({ product, productId }: ListProductSimpleProps) => {
  /**
   * Recommended Products에 표시될 상품 리스트 UI입니다.
   * 비교적 간단한 UI를 가졌으며,
   * 썸네일, 브랜드, 상품 이름, 할인율, 할인 후 가격, 좋아요 여부를 표시합니다.
   */

  const {
    thumb,
    brandName,
    name,
    discount: priceAfterDiscount,
    price: originalPrice,
  } = product !== undefined ? product : mockProduct.product;
  const discount = getDiscount(originalPrice, priceAfterDiscount);

  const { navigate } = useRouter();
  const navigateProductPage = useCallback(() => {
    navigate(ROUTE_PATH.productDetail.replace(':id', productId !== undefined ? productId : ''));
  }, [navigate, productId]);

  if (product === undefined || productId === undefined) return <SkeletonProductList />;

  return (
    <S.Component>
      <S.Thumb onClick={navigateProductPage}>
        <motion.img
          src={thumb[0]}
          whileTap={motionStyle.scaleImg.whileTap}
          transition={motionStyle.scaleImg.transition}
        />
      </S.Thumb>

      <S.FlexSpaceBetween>
        <S.Brand onClick={navigateProductPage}>{brandName}</S.Brand>
        <S.Heart>
          <ProductLikes productId={productId} />
        </S.Heart>
      </S.FlexSpaceBetween>

      <S.Detail onClick={navigateProductPage}>
        <S.Name>{name}</S.Name>
        <S.FlexStart>
          <S.Discount>{discount}%</S.Discount>
          <S.Price>{priceAfterDiscount}</S.Price>
        </S.FlexStart>
      </S.Detail>
    </S.Component>
  );
};

export default ListProductSimple;
