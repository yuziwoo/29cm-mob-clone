import { PageStyle as S } from './BrandDetailPage.styled';
import { useParams } from 'react-router-dom';

const BrandDetailPage = () => {
  const { id } = useParams();
  return <S.Page>BrandDetailPage {id}</S.Page>;
};

export default BrandDetailPage;
