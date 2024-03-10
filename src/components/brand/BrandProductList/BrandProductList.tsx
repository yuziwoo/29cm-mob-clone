import { useCallback, useEffect, useState } from 'react';
import { useProduct } from '../../../hooks/product/useProduct';
import { ComponentStyle as S } from './BrandProductList.styled';
import { Products } from '../../../types/product';
import ListProductBasic from '../../product/ListProductBasic/ListProductBasic';

interface BrandProductListProps {
  brandId: number | null;
}

const BrandProductList = ({ brandId }: BrandProductListProps) => {
  /**
   * 브랜드 상세 페이지의 상품 리스트 컴포넌트입니다.
   */

  const { productQuery } = useProduct();
  const [products, setProducts] = useState<string[]>([]);

  const getBrandProductsId = useCallback(
    (products: Products) => {
      const productIds = Object.keys(products).filter(
        (productId) => products[productId].brandId === brandId
      );
      return productIds;
    },
    [brandId]
  );

  useEffect(() => {
    if (productQuery.data === undefined) return;
    setProducts(getBrandProductsId(productQuery.data));
  }, [brandId, productQuery.data, getBrandProductsId]);

  if (products.length === 0) return <></>;
  return (
    <S.Component>
      {products.map((productId) => (
        <S.Product key={productId}>
          <ListProductBasic productId={productId} />
        </S.Product>
      ))}
    </S.Component>
  );
};

export default BrandProductList;
