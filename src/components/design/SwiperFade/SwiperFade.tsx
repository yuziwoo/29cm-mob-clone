import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, EffectFade } from 'swiper/modules';

interface SwiperFadeProps {
  imgURL: string[];
  speed?: number;
  delay?: number;
}

const SwiperFade = (props: SwiperFadeProps) => {
  /**
   * 페이드인 효과로 자동 전환되는 스와이퍼입니다.
   */

  const { imgURL, speed = 600, delay = 1800 } = props;

  if (imgURL.length === 0) return <></>;
  return (
    <div style={{ width: '100%' }}>
      <SwiperContainer
        slidesPerView={1}
        effect="fade"
        loop
        speed={speed}
        autoplay={{ delay }}
        modules={[EffectFade, Autoplay]}
        className="swiper"
      >
        {imgURL.map((url, index) => (
          <SwiperSlide key={index} style={{ overflow: 'hidden' }}>
            <img src={url} alt="이미지" style={{ width: '100%', display: 'block' }} />
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </div>
  );
};

export default SwiperFade;
