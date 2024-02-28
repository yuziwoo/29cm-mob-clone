import * as S from './ProductDetailMainSwiper.styled';
import { Pagination, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SkeletonImg from '../../skeleton/SkeletonImg/SkeletonImg';

interface ProductDetailMainSwiperProps {
  thumbs: string[] | undefined;
}

const ProductDetailMainSwiper = ({ thumbs }: ProductDetailMainSwiperProps) => {
  if (thumbs === undefined) return <SkeletonImg />
  
  if (thumbs.length === 1)
    return <img src={thumbs[0]} alt="상품 이미지" style={{ width: '100%' }} />;
  return (
    <S.MainImg>
      <Swiper
        slidesPerView={1}
        modules={[Pagination, Virtual]}
        pagination={{
          clickable: true,
        }}
        virtual
        loop
      >
        {thumbs.map((imgURL, idx) => (
          <SwiperSlide key={idx} virtualIndex={idx}>
            <img src={imgURL} alt="상품 이미지" />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.MainImg>
  );
};

export default ProductDetailMainSwiper;
