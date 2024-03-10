import { Products } from '../../types/product';

interface GetRecommendedProductsProps {
  id: string;
  products: Products;
}

export const getRecommendedProducts = ({ id, products }: GetRecommendedProductsProps) => {
  const recommendedProducts: Products = {};

  for (const [key, value] of Object.entries(products)) {
    if (key !== id) {
      recommendedProducts[key] = value;
    }
  }

  return recommendedProducts;
};
