import { useCallback, useEffect, useState } from 'react';
import { useShowcase } from '../../../hooks/showcase/useShowcase';
import CommonButton from '../../common/motion/CommonButton/CommonButton';
import { ComponentStyle as S } from './ShowcaseSwiper.styled';
import { ShowcaseProps } from '../../../types/showcase';
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
  const { showcaseQuery } = useShowcase();
  const [showcase, setShowcase] = useState<ShowcaseProps[]>([]);
  const { navigate } = useRouter();

  useEffect(() => {
    if (showcaseQuery.data === undefined || showcaseQuery.data === null) return;
    setShowcase(Object.values(showcaseQuery.data).filter(({ id }) => showcaseIds.includes(id)));
  }, [showcaseQuery.data, showcaseIds]);

  const handleClickShowcase = useCallback(
    (id: number) => {
      navigate(ROUTE_PATH.showcaseDetail.replace(':id', `${id}`));
    },
    [navigate]
  );

  if (showcase.length === 0 || showcaseQuery.isPending) return <></>;

  if (showcase.length === 1)
    return (
      <S.ShowcaseWrapSingle>
        <motion.div
          whileTap={motionStyle.scaleButton.whileTap}
          transition={motionStyle.scaleButton.transition}
          onClick={() => {
            handleClickShowcase(showcase[0].id);
          }}
        >
          <S.Showcase>
            <S.Img src={`${showcase[0].thumb}`} alt={showcase[0].title} />
            <S.Shadow />
            <S.Title>{showcase[0].title}</S.Title>
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
        {showcase.map(({ id, thumb, title }) => (
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
