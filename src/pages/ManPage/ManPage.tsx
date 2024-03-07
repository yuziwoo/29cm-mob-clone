import CommonPageAnimation from '../../components/common/motion/CommonPageAnimation/CommonPageAnimation';
import { PageStyle as S } from './ManPage.styled';
import MainShowcaseSwiper from '../../components/showcase/MainShowcaseSwiper/MainShowcaseSwiper';
import { mockShowcaseIdsMan } from '../../mock/showcase';

const ManPage = () => {
  return (
    <CommonPageAnimation>
      <S.Page>
        <MainShowcaseSwiper showcaseIds={mockShowcaseIdsMan} />
      </S.Page>
    </CommonPageAnimation>
  );
};

export default ManPage;
