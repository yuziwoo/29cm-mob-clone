import { ComponentStyle as S } from './ProductDetailMainSwiper.styled';
import { Pagination, Virtual } from 'swiper/modules';
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SkeletonImg from '../../skeleton/common/SkeletonImg';
import { useEffect, useState } from 'react';
import Swiper from 'swiper';

interface ProductDetailMainSwiperProps {
  thumbs: string[] | undefined;
}

const ProductDetailMainSwiper = ({ thumbs }: ProductDetailMainSwiperProps) => {
  /**
   * 상품 상세페이지의 최상단 스와이퍼 컴포넌트입니다.
   */

  const [swiperRef, setSwiperRef] = useState<Swiper | null>(null);

  useEffect(() => {
    // 상품이 변경되면 스와이퍼를 첫번째 슬라이드로 초기화하고, 슬라이드가 한개인 경우 유저의 상호작용을 막습니다.
    if (swiperRef !== null && thumbs) {
      swiperRef.slideTo(1, 0);
      swiperRef.allowTouchMove = thumbs.length > 1;
    }
  }, [thumbs, swiperRef]);

  if (thumbs === undefined) return <SkeletonImg />;

  return (
    <S.Component>
      <SwiperContainer
        initialSlide={0}
        slidesPerView={1}
        modules={[Pagination, Virtual]}
        pagination={{
          clickable: true,
        }}
        virtual
        loop
        onSwiper={(swiper: Swiper) => {
          setSwiperRef(swiper);
        }}
      >
        {thumbs.map((imgURL, idx) => (
          <SwiperSlide key={idx} virtualIndex={idx}>
            <img src={imgURL} alt="상품 이미지" />
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </S.Component>
  );
};

export default ProductDetailMainSwiper;
