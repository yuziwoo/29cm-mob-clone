import { PageStyle as S } from './MainPage.styled';
import CommonPageAnimation from '../../components/common/motion/CommonPageAnimation/CommonPageAnimation';
import MainShowcaseSwiper from '../../components/showcase/MainShowcaseSwiper/MainShowcaseSwiper';
import { mockShowcaseIds } from '../../mock/showcase';
import ButtonSlider from '../../components/main/ButtonSlider/ButtonSlider';

const MainPage = () => {
  return (
    <CommonPageAnimation>
      <S.Page>
        <MainShowcaseSwiper showcaseIds={mockShowcaseIds} />
        <ButtonSlider />
        <div style={{ paddingBottom: '5000px' }}></div>
      </S.Page>
    </CommonPageAnimation>
  );
};

export default MainPage;
