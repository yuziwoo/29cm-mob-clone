import { PageStyle as S } from './SearchDetailPage.styled';
import { useParams } from 'react-router-dom';

const SearchDetailPage = () => {
  const { keyword } = useParams();
  return <S.Page>SearchDetailPage {keyword}</S.Page>;
};

export default SearchDetailPage;
