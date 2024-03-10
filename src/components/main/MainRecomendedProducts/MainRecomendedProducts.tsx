import { useProduct } from '../../../hooks/product/useProduct';
import RecommendedProducts from '../../product/RecommendedProducts/RecommendedProducts';
import { ComponentStyle as S } from './MainRecomendedProducts.styled';

const MainRecomendedProducts = () => {
  /**
   * 메인 페이지에서 보여줄 추천 상품 리스트입니다.
   */

  const { productQuery } = useProduct();

  if (!productQuery.isSuccess) return <></>;
  return (
    <S.Component>
      <RecommendedProducts title="당신을 위한 추천 상품" products={productQuery.data} />
    </S.Component>
  );
};

export default MainRecomendedProducts;
