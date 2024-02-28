import { Products } from '../../../types/product';
import * as S from './RecommendedProducts.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import ListProductSimple from '../ListProductSimple/ListProductSimple';

interface RecommendedProductsProps {
  products: Products;
  title?: string;
}

const RecommendedProducts = ({ title = '추천 상품', products }: RecommendedProductsProps) => {
  const productList = [];
  for (const [productId, value] of Object.entries(products)) {
    productList.push({ ...value, productId });
  }

  if (Object.keys(products).length === 0) return <div></div>;

  return (
    <S.SectionRecommenedProducts>
      <S.Title>{title}</S.Title>

      <Swiper className="swiper" spaceBetween={10} slidesPerView={2.4}>
        {productList.map((product, idx) => (
          <SwiperSlide key={product.productId} virtualIndex={idx}>
            <ListProductSimple product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.SectionRecommenedProducts>
  );
};

export default RecommendedProducts;
