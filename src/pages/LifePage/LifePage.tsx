import CommonPageAnimation from '../../components/common/motion/CommonPageAnimation/CommonPageAnimation';
import { PageStyle as S } from '../MainPage/MainPage.styled';
import MainShowcaseSwiper from '../../components/showcase/MainShowcaseSwiper/MainShowcaseSwiper';
import { mockShowcaseIdsLife } from '../../mock/showcase';
import ButtonSlider from '../../components/main/ButtonSlider/ButtonSlider';
import { mockMainPageBrandIntro } from '../../mock/mainPage';
import BrandIntro from '../../components/main/BrandIntro/BrandIntro';

const LifePage = () => {
  // brandIntro에 사용할 mock 데이터
  const { imgURL, title, text, brandId, productIds } = mockMainPageBrandIntro[2];

  return (
    <CommonPageAnimation>
      <S.Page>
        <MainShowcaseSwiper showcaseIds={mockShowcaseIdsLife} />

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
      </S.Page>
    </CommonPageAnimation>
  );
};

export default LifePage;
