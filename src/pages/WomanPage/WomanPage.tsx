import CommonPageAnimation from '../../components/common/motion/CommonPageAnimation/CommonPageAnimation';
import { PageStyle as S } from './WomanPage.styled';
import MainShowcaseSwiper from '../../components/showcase/MainShowcaseSwiper/MainShowcaseSwiper';
import { mockShowcaseIdsWoman } from '../../mock/showcase';

const WomanPage = () => {
  return (
    <CommonPageAnimation>
      <S.Page>
        <MainShowcaseSwiper showcaseIds={mockShowcaseIdsWoman} />
      </S.Page>
    </CommonPageAnimation>
  );
};

export default WomanPage;
