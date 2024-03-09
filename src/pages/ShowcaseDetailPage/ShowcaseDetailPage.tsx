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
import TextLineTranslate from '../../components/feature/TextLineTranslate';
import ScrollShrinkImg from '../../components/design/ScrollShrinkImg/ScrollShrinkImg';

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
          <SwiperFade imgURL={showcase.mainSwiper.img} speed={1400} delay={2000} />
          <S.Carousel>
            <CarouselText
              text={showcase.mainSwiper.carouselText}
              fontStyle={{ color: theme.color.WHITE, fontSize: '4.8rem', fontWeight: '700' }}
              speed={30}
            />
          </S.Carousel>
          <S.MainLogo>
            <img src={showcase.mainSwiper.logo} alt="로고 이미지" />
          </S.MainLogo>
          <S.MainText>
            <S.CircleText>
              <img src={showcase.mainSwiper.circleText} alt="브랜드 둥근 모양의 텍스트" />
            </S.CircleText>
            <S.MainTitle>
              <TextLineTranslate
                text={showcase.mainSwiper.footerText}
                fontStyle={{
                  fontSize: '1.6rem',
                  fontWeight: '700',
                  color: theme.color.WHITE,
                  textAlign: 'right',
                }}
              />
            </S.MainTitle>
          </S.MainText>
        </S.MainBanner>

        <S.ShowcaseDescription>
          <S.ShowcaseDescriptionTitle>SHOWCASE</S.ShowcaseDescriptionTitle>
          <S.ShowcaseDescriptionText>
            이 쇼케이스는 포트폴리오를 위한 페이지입니다.
            <br />
            쇼케이스 페이지는 실제 브랜드와 관련이 없으며,
            <br />
            어떠한 상업적 이용도 없습니다.
            <br />
            이미지 출처: {showcase.imgSrc}
          </S.ShowcaseDescriptionText>
        </S.ShowcaseDescription>

        <ScrollShrinkImg imgURL={showcase.img1} alt="브랜드 이미지" />

        <div style={{paddingTop: '1200px'}}></div>
      </S.Page>
    </CommonPageAnimation>
  );
};

export default ShowcaseDetailPage;
