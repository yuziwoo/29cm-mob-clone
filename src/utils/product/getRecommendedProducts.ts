import { Products } from '../../types/product';

interface GetRecommendedProductsProps {
  id: string;
  products: Products;
}

export const getRecommendedProducts = ({ id, products }: GetRecommendedProductsProps) => {
  // 상품 종류가 많지 않아서 임시로 구현
  const recommendedProducts: Products = {};

  for (const [key, value] of Object.entries(products)) {
    if (key !== id) {
      recommendedProducts[key] = value;
    }
  }

  return recommendedProducts;
};
