import CommonPageAnimation from '../../components/common/motion/CommonPageAnimation/CommonPageAnimation';
import { PageStyle as S } from './LifePage.styled';
import MainShowcaseSwiper from '../../components/showcase/MainShowcaseSwiper/MainShowcaseSwiper';
import { mockShowcaseIdsLife } from '../../mock/showcase';

const LifePage = () => {
  return (
    <CommonPageAnimation>
      <S.Page>
        <MainShowcaseSwiper showcaseIds={mockShowcaseIdsLife} />
      </S.Page>
    </CommonPageAnimation>
  );
};

export default LifePage;
