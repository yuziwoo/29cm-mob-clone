import CommonPageAnimation from '../../components/common/motion/CommonPageAnimation/CommonPageAnimation';
import { PageStyle as S } from '../MainPage/MainPage.styled';
import MainShowcaseSwiper from '../../components/showcase/MainShowcaseSwiper/MainShowcaseSwiper';
import { mockShowcaseIdsMan } from '../../mock/showcase';
import ButtonSlider from '../../components/main/ButtonSlider/ButtonSlider';
import BrandIntro from '../../components/main/BrandIntro/BrandIntro';
import { mockMainPageBrandIntro } from '../../mock/mainPage';
import MainRecomendedProducts from '../../components/main/MainRecomendedProducts/MainRecomendedProducts';

const ManPage = () => {
  // brandIntro에 사용할 mock 데이터
  const { imgURL, title, text, brandId, productIds } = mockMainPageBrandIntro[0];

  return (
    <CommonPageAnimation>
      <S.Page>
        <MainShowcaseSwiper showcaseIds={mockShowcaseIdsMan} />

        <S.ButtonWrap>
          <ButtonSlider />
        </S.ButtonWrap>

        <S.BrandIntroWrap>
          <BrandIntro
            imgURL={imgURL}
            title={title}
            text={text}
            brandId={brandId}
            productIds={productIds}
          />
        </S.BrandIntroWrap>

        <S.RecommendedProducts>
          <MainRecomendedProducts />
        </S.RecommendedProducts>
      </S.Page>
    </CommonPageAnimation>
  );
};

export default ManPage;
