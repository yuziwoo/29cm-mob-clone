import { useEffect, useState } from 'react';
import CommonPageAnimation from '../../components/common/motion/CommonPageAnimation/CommonPageAnimation';
import { ShowcaseModuleProps } from '../../types/showcase';
import { PageStyle as S } from './ShowcaseDetailPage.styled';
import { useParams } from 'react-router-dom';
import { mockShowcase } from '../../mock/showcase';
import NotFoundComponent from '../../components/common/NotFoundComponent/NotFoundComponent';
import SwiperFade from '../../components/design/SwiperFade/SwiperFade';
import CarouselText from '../../components/design/CarouselText/CarouselText';
import { theme } from '../../styles/theme';

const ShowcaseDetailPage = () => {
  const { id } = useParams();
  const [showcase, setShowcase] = useState<ShowcaseModuleProps | null>(null);

  useEffect(() => {
    const newShowcase = mockShowcase.find((showcase) => `${showcase.id}` === `${id}`);
    if (id === undefined || newShowcase === undefined) {
      setShowcase(null);
      return;
    }
    setShowcase(newShowcase);
  }, [id]);

  if (showcase === null) return <NotFoundComponent />;
  return (
    <CommonPageAnimation>
      <S.Page>
        <S.MainBanner>
          <SwiperFade imgURL={showcase.mainSwiper.img} />
          <S.Carousel>
            <CarouselText
              text={showcase.mainSwiper.carouselText}
              fontStyle={{ color: theme.color.WHITE, fontSize: '4.8rem', fontWeight: '700' }}
            />
          </S.Carousel>
        </S.MainBanner>
      </S.Page>
    </CommonPageAnimation>
  );
};

export default ShowcaseDetailPage;
