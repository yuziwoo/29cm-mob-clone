import { ComponentStyle as S }  from './RecommendedProducts.styled';
import { Products } from '../../../types/product';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import ListProductSimple from '../ListProductSimple/ListProductSimple';

interface RecommendedProductsProps {
  products: Products | undefined;
  title?: string;
}

const RecommendedProducts = ({ title = '추천 상품', products }: RecommendedProductsProps) => {
  /**
   * 상품 상세페이지의 추천 상품 리스트 컴포넌트입니다.
   * 제목을 바꿀 수 있고, products 파라미터에 상품 정보를 전달받아 나열합니다.
   */

  const productList = [];
  if (products !== undefined) {
    for (const [productId, value] of Object.entries(products)) {
      productList.push({ ...value, productId });
    }
  }

  if (productList.length === 0) return <></>;
  return (
    <S.Component>
      <S.Title>{title}</S.Title>

      <Swiper className="swiper" spaceBetween={10} slidesPerView={2.4}>
        {productList.map((product, idx) => (
          <SwiperSlide key={product.productId} virtualIndex={idx}>
            <ListProductSimple product={product} productId={product.productId} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Component>
  );
};

export default RecommendedProducts;
