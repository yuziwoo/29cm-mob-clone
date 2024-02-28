import * as S from './ListProductSimple.style';
import { ProductWithId } from '../../../types/product';
import { motion } from 'framer-motion';
import { useRouter } from '../../../hooks/useRouter';
import { useCallback } from 'react';
import { ROUTE_PATH } from '../../../constants/path';
import { motionStyle } from '../../../styles/motion';
import ProductLikes from '../ProductLikes/ProductLikes';
import { getDiscount } from '../../../utils/getDiscount';

interface ListProductSimpleProps {
  product: ProductWithId;
}

const ListProductSimple = ({ product }: ListProductSimpleProps) => {
  const {
    thumb,
    brandName,
    productId,
    name,
    discount: priceAfterDiscount,
    price: originalPrice,
  } = product;
  const discount = getDiscount(originalPrice, priceAfterDiscount);

  const { navigate } = useRouter();
  const navigateProductPage = useCallback(() => {
    const path = ROUTE_PATH.productDetail;
    navigate(path.replace(':id', product.productId));
  }, [navigate, product.productId]);

  return (
    <S.Item>
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
    </S.Item>
  );
};

export default ListProductSimple;
