import { ComponentStyle as S } from './ListProductOneLine.styled';
import SkeletonProductList from '../../skeleton/product/SkeletonProductList';
import { useProduct } from '../../../hooks/product/useProduct';
import { useCallback, useEffect, useState } from 'react';
import { ProductProps } from '../../../types/product';
import { useRouter } from '../../../hooks/useRouter';
import { ROUTE_PATH } from '../../../constants/path';
import ProductLikes from '../ProductLikes/ProductLikes';
import { getDiscount } from '../../../utils/getDiscount';
import { theme } from '../../../styles/theme';

interface ListProductOneLineProps {
  productId: string | undefined;
}

const ListProductOneLine = ({ productId }: ListProductOneLineProps) => {
  /**
   * 한 줄 UI의 상품입니다. 메인페이지의 브랜드 소개에서 사용되며,
   * 상품 이미지, 브랜드, 상품이름, 할인율, 할인 후 가격, 좋아요 정보, 좋아요 기능의 버튼을 보여줍니다.
   */

  const { productQuery, getProduct } = useProduct();
  const [product, setProduct] = useState<ProductProps | null>(null);

  useEffect(() => {
    if (productQuery.isSuccess && productId !== undefined) {
      setProduct(getProduct(productId));
    }
  }, [productQuery, productId, getProduct]);

  const { navigate } = useRouter();

  const handleNavigateProductPage = useCallback(() => {
    navigate(ROUTE_PATH.productDetail.replace(':id', productId ? productId : ''));
  }, [navigate, productId]);

  if (productId === undefined || !productQuery.isSuccess || product === null)
    return <SkeletonProductList />;

  return (
    <S.Component>
      <S.Container>
        <S.Info onClick={handleNavigateProductPage}>
          <S.Thumb style={{ backgroundImage: `url(${product.thumb[0]})` }}>
            <S.ThumbSizer />
          </S.Thumb>
          <S.Text>
            <S.Brand>{product.brandName}</S.Brand>
            <S.Name>{product.name}</S.Name>
            <S.Price>
              <S.Discount>{getDiscount(product.price, product.discount)}%</S.Discount>
              <S.FinalPrice>{product.discount.toLocaleString()}</S.FinalPrice>
            </S.Price>
          </S.Text>
        </S.Info>

        <S.Heart>
          <ProductLikes productId={productId} color={theme.color.GRAY5} />
          <S.LikesCount>{product.likes}</S.LikesCount>
        </S.Heart>
      </S.Container>
    </S.Component>
  );
};

export default ListProductOneLine;
