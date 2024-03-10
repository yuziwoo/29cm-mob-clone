import { useCallback } from 'react';
import { useShowcase } from '../../../hooks/showcase/useShowcase';
import { ComponentStyle as S } from './ShowcaseSwiper.styled';
import { Autoplay, Pagination, Virtual } from 'swiper/modules';
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useRouter } from '../../../hooks/useRouter';
import { ROUTE_PATH } from '../../../constants/path';
import { motion } from 'framer-motion';
import { motionStyle } from '../../../styles/motion';

interface ShowcaseSwiperProps {
  showcaseIds: number[];
}

const ShowcaseSwiper = ({ showcaseIds }: ShowcaseSwiperProps) => {
  const { showcaseQuery, currentShowcase } = useShowcase({ showcaseIds });
  const { navigate } = useRouter();

  const handleClickShowcase = useCallback(
    (id: number) => {
      navigate(ROUTE_PATH.showcaseDetail.replace(':id', `${id}`));
    },
    [navigate]
  );

  if (currentShowcase.length === 0 || showcaseQuery.isPending) return <></>;

  if (currentShowcase.length === 1)
    return (
      <S.ShowcaseWrapSingle>
        <motion.div
          whileTap={motionStyle.scaleButton.whileTap}
          transition={motionStyle.scaleButton.transition}
          onClick={() => {
            handleClickShowcase(currentShowcase[0].id);
          }}
        >
          <S.Showcase>
            <S.Img src={`${currentShowcase[0].thumb}`} alt={currentShowcase[0].title} />
            <S.Shadow />
            <S.Title>{currentShowcase[0].title}</S.Title>
          </S.Showcase>
        </motion.div>
      </S.ShowcaseWrapSingle>
    );

  return (
    <S.Component>
      <SwiperContainer
        initialSlide={0}
        slidesPerView={1}
        virtual
        autoplay={{ delay: 3000 }}
        modules={[Pagination, Virtual, Autoplay]}
        pagination={{
          clickable: true,
        }}
        className="swiper"
      >
        {currentShowcase.map(({ id, thumb, title }) => (
          <SwiperSlide key={id} virtualIndex={id}>
            <S.ShowcaseWrap>
              <motion.div
                whileTap={motionStyle.scaleButton.whileTap}
                transition={motionStyle.scaleButton.transition}
                onClick={() => {
                  handleClickShowcase(id);
                }}
              >
                <S.Showcase>
                  <S.Img src={`${thumb}`} alt={title} />
                  <S.Shadow />
                  <S.Title>{title}</S.Title>
                </S.Showcase>
              </motion.div>
            </S.ShowcaseWrap>
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </S.Component>
  );
};

export default ShowcaseSwiper;
