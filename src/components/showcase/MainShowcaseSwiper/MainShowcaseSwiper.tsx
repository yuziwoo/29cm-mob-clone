import { ComponentStyle as S } from './MainShowcaseSwiper.styled';
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { useCallback, useRef, useState } from 'react';
import { useShowcase } from '../../../hooks/showcase/useShowcase';
import Swiper from 'swiper';
import { useRouter } from '../../../hooks/useRouter';
import { ROUTE_PATH } from '../../../constants/path';
import SkeletonLoading from '../../skeleton/common/SkeletonLoading';

interface MainShowcaseSwiperProps {
  showcaseIds: number[];
}

const MainShowcaseSwiper = ({ showcaseIds }: MainShowcaseSwiperProps) => {
  /**
   * 메인 페이지 메인 배너로 사용되는 스와이퍼입니다.
   * 쇼케이스들을 슬라이드로 보여주는 컴포넌트입니다.
   */

  const { showcaseQuery, currentShowcase } = useShowcase({ showcaseIds });
  const background = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { navigate } = useRouter();

  const handleClickShowcase = useCallback(
    (id: number) => {
      navigate(ROUTE_PATH.showcaseDetail.replace(':id', `${id}`));
    },
    [navigate]
  );

  if (!showcaseQuery.isSuccess)
    return (
      <S.Loading>
        <SkeletonLoading />
      </S.Loading>
    );

  if (currentShowcase.length === 0) return <></>;

  return (
    <S.Component>
      <S.MainSwiper>
        <SwiperContainer
          loop={false}
          spaceBetween={0}
          slidesPerView={1.3}
          autoplay={{
            delay: 3000,
            stopOnLastSlide: true,
            disableOnInteraction: true,
          }}
          speed={400}
          centeredSlides
          onSlideChange={(swiper: Swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          modules={[Autoplay]}
        >
          {[...currentShowcase, ...currentShowcase].map(
            ({ id, bannerURL, bannerTitle, bannerDescription }, idx) => (
              <SwiperSlide key={idx}>
                <S.Banner>
                  <S.ImgWrap $isActive={activeIndex === idx}>
                    <S.Img src={bannerURL} alt="배너 이미지" />
                  </S.ImgWrap>

                  <S.TextWrap>
                    {bannerTitle.split('\n').map((text, index) => (
                      <S.Title key={index} $isActive={activeIndex === idx}>
                        {text}
                      </S.Title>
                    ))}
                    <S.TextPadding />
                    {bannerDescription.split('\n').map((text, index) => (
                      <S.Description key={index} $isActive={activeIndex === idx}>
                        {text}
                      </S.Description>
                    ))}
                  </S.TextWrap>
                  
                  <S.EventWrap
                    $isActive={activeIndex === idx}
                    onClick={() => {
                      handleClickShowcase(id);
                    }}
                  />
                </S.Banner>
              </SwiperSlide>
            )
          )}
        </SwiperContainer>
      </S.MainSwiper>

      <S.Background ref={background} $index={activeIndex}>
        {[...currentShowcase, ...currentShowcase].map(({ bannerURL }, index) => (
          <S.BackgroundImg src={bannerURL} alt="배너 이미지" key={index} />
        ))}
        <S.Shadow />
        <S.Gradient />
      </S.Background>
    </S.Component>
  );
};

export default MainShowcaseSwiper;
