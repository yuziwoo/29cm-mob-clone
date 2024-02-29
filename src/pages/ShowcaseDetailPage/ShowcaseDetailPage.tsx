import CommonPageAnimation from '../../components/common/motion/CommonPageAnimation/CommonPageAnimation';
import { PageStyle as S } from './ShowcaseDetailPage.styled';
import { useParams } from 'react-router-dom';

const ShowcaseDetailPage = () => {
  const { id } = useParams();
  return (
    <CommonPageAnimation>
      <S.Page>ShowcaseDetailPage {id}</S.Page>
    </CommonPageAnimation>
  );
};

export default ShowcaseDetailPage;
