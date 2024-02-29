import CommonPageAnimation from '../../components/common/motion/CommonPageAnimation/CommonPageAnimation';
import { PageStyle as S } from './BrandDetailPage.styled';
import { useParams } from 'react-router-dom';

const BrandDetailPage = () => {
  const { id } = useParams();
  return (
    <CommonPageAnimation>
      <S.Page>BrandDetailPage {id}</S.Page>
    </CommonPageAnimation>
  );
};

export default BrandDetailPage;
