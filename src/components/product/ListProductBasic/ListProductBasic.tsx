import { ComponentStyle as S } from './ListProductBasic.styled';
import SkeletonProductList from '../../skeleton/product/SkeletonProductList';
import { useProduct } from '../../../hooks/product/useProduct';
import { useCallback, useEffect, useState } from 'react';
import { ProductProps } from '../../../types/product';
import CommonButton from '../../common/motion/CommonButton/CommonButton';
import { useRouter } from '../../../hooks/useRouter';
import { ROUTE_PATH } from '../../../constants/path';
import ProductLikes from '../ProductLikes/ProductLikes';
import { getDiscount } from '../../../utils/getDiscount';
import IconLike from '../../icons/IconLike';
import { theme } from '../../../styles/theme';
import IconStar from '../../icons/IconStar';

interface ListProductBasicProps {
  productId: string | undefined;
}

const ListProductBasic = ({ productId }: ListProductBasicProps) => {
  /**
   * 기본 상품 리스트입니다.
   * 상품 이미지, 브랜드, 상품이름, 할인율, 할인 후 가격, 좋아요 정보, 리뷰 정보, 좋아요 기능의 버튼을 보여줍니다.
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

  const handleClickBrand = useCallback(() => {
    navigate(ROUTE_PATH.brandDetail.replace(':id', `${product?.brandId ? product.brandId : ''}`));
  }, [navigate, product?.brandId]);

  if (productId === undefined || !productQuery.isSuccess || product === null)
    return <SkeletonProductList />;

  return (
    <S.Component>
      <CommonButton style={{ width: '100%' }}>
        <S.Thumb
          onClick={handleNavigateProductPage}
          style={{ backgroundImage: `url(${product.thumb[0]})` }}
        >
          <S.ThumbSizer />
        </S.Thumb>
      </CommonButton>

      <S.Info>
        <S.InfoHeader>
          <S.Brand onClick={handleClickBrand}>{product.brandName}</S.Brand>
          <S.Heart>
            <ProductLikes productId={productId} />
          </S.Heart>
        </S.InfoHeader>

        <S.InfoBody onClick={handleNavigateProductPage}>
          <S.ProductName>{product.name}</S.ProductName>
          <S.Price>
            <S.Discount>{getDiscount(product.price, product.discount)}%</S.Discount>
            <S.FinalPrice>{product.discount.toLocaleString()}</S.FinalPrice>
          </S.Price>
        </S.InfoBody>

        <S.InfoFooter onClick={handleNavigateProductPage}>
          <S.LikeInfo>
            <IconLike activeColor={theme.color.GRAY5} isLiked={true} />
            <S.LikeInfoText>{product.likes}</S.LikeInfoText>
          </S.LikeInfo>
          <S.ReviewInfo>
            <IconStar fill={theme.color.GRAY5} stroke={theme.color.GRAY5} />
            <S.ReviewInfoText>
              {Math.round(product.reviewRating / 2) / 10} ({product.review.toLocaleString()})
            </S.ReviewInfoText>
          </S.ReviewInfo>
        </S.InfoFooter>
      </S.Info>
    </S.Component>
  );
};

export default ListProductBasic;
