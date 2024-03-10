import { useEffect, useMemo, useState } from 'react';
import { useProduct } from '../../../hooks/product/useProduct';
import SkeletonLoading from '../../skeleton/common/SkeletonLoading';
import { ComponentStyle as S } from './CategoryProducts.styled';
import { CATEGORY_PARAMS } from '../../../constants/path';
import ListProductBasic from '../../product/ListProductBasic/ListProductBasic';
import { getCategoryResultProduct } from '../../../mock/getCategoryResultProducts';

interface CategoryProductsProps {
  params: URLSearchParams;
}

const CategoryProducts = ({ params }: CategoryProductsProps) => {
  /**
   * queryString을 전달받아 상품의 리스트를 나열하는 컴포넌트입니다.
   * api로 처리될 상품 리스트를 받는 부분은 임시로 생성하여 사용했습니다.
   */

  const [productIds, setProductIds] = useState<string[]>([]);
  const { productQuery } = useProduct();

  useEffect(() => {
    if (!productQuery.isSuccess) return;

    const newProductIds = getCategoryResultProduct({
      products: productQuery.data,
      params,
    });

    setProductIds(newProductIds);
  }, [params, productQuery.isSuccess, productQuery.data]);

  const getTitle = useMemo(() => {
    const medium = params.get(CATEGORY_PARAMS.categoryMedium);
    if (medium !== '전체') return medium ? medium : '';

    return `${params.get(CATEGORY_PARAMS.group)} 전체 보기`;
  }, [params]);

  if (!productQuery.isSuccess)
    return (
      <S.Loading>
        <SkeletonLoading />
      </S.Loading>
    );

  return (
    <S.Component>
      <S.Title>{getTitle}</S.Title>

      <S.ProductList>
        {productIds.map((productId) => (
          <S.Product key={productId}>
            <ListProductBasic productId={productId} />
          </S.Product>
        ))}
      </S.ProductList>
    </S.Component>
  );
};

export default CategoryProducts;
