import CommonPageAnimation from '../../components/common/motion/CommonPageAnimation/CommonPageAnimation';
import { PageStyle as S } from '../MainPage/MainPage.styled';
import MainShowcaseSwiper from '../../components/showcase/MainShowcaseSwiper/MainShowcaseSwiper';
import { mockShowcaseIdsWoman } from '../../mock/showcase';
import ButtonSlider from '../../components/main/ButtonSlider/ButtonSlider';
import BrandIntro from '../../components/main/BrandIntro/BrandIntro';
import { mockMainPageBrandIntro } from '../../mock/mainPage';
import MainRecomendedProducts from '../../components/main/MainRecomendedProducts/MainRecomendedProducts';

const WomanPage = () => {
  return (
    <CommonPageAnimation>
      <S.Page>
        <MainShowcaseSwiper showcaseIds={mockShowcaseIdsWoman} />

        <S.ButtonWrap>
          <ButtonSlider />
        </S.ButtonWrap>

        <S.BrandIntroWrap>
          <BrandIntro
            imgURL={mockMainPageBrandIntro[1].imgURL}
            title={mockMainPageBrandIntro[1].title}
            text={mockMainPageBrandIntro[1].text}
            brandId={mockMainPageBrandIntro[1].brandId}
            productIds={mockMainPageBrandIntro[1].productIds}
          />
        </S.BrandIntroWrap>

        <S.RecommendedProducts>
          <MainRecomendedProducts />
        </S.RecommendedProducts>

        <S.BrandIntroWrap style={{ paddingTop: '4rem' }}>
          <BrandIntro
            imgURL={mockMainPageBrandIntro[2].imgURL}
            title={mockMainPageBrandIntro[2].title}
            text={mockMainPageBrandIntro[2].text}
            brandId={mockMainPageBrandIntro[2].brandId}
            productIds={mockMainPageBrandIntro[2].productIds}
          />
        </S.BrandIntroWrap>
      </S.Page>
    </CommonPageAnimation>
  );
};

export default WomanPage;
