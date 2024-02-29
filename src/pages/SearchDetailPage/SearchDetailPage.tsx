import CommonPageAnimation from '../../components/common/motion/CommonPageAnimation/CommonPageAnimation';
import { PageStyle as S } from './SearchDetailPage.styled';
import { useParams } from 'react-router-dom';

const SearchDetailPage = () => {
  const { keyword } = useParams();
  return (
    <CommonPageAnimation>
      <S.Page>SearchDetailPage {keyword}</S.Page>
    </CommonPageAnimation>
  );
};

export default SearchDetailPage;
