import { PageStyle as S } from './MainPage.styled';
import CommonPageAnimation from '../../components/common/motion/CommonPageAnimation/CommonPageAnimation';

const MainPage = () => {
  return (
    <CommonPageAnimation>
      <S.Page>
        <h1 style={{ fontSize: '300px' }}>Main Page</h1>
      </S.Page>
    </CommonPageAnimation>
  );
};

export default MainPage;
