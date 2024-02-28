import * as S from './ProductDetailMainSwiper.styled';
import { Pagination, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SkeletonImg from '../../skeleton/common/SkeletonImg';

interface ProductDetailMainSwiperProps {
  thumbs: string[] | undefined;
}

const ProductDetailMainSwiper = ({ thumbs }: ProductDetailMainSwiperProps) => {
  /**
   * 상품 상세페이지의 최상단 스와이퍼 컴포넌트입니다.
   * 전달된 썸네일 url 배열의 길이가 1인 경우 하나의 img 태그만 보여줍니다.
   */

  if (thumbs === undefined) return <SkeletonImg />;

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
