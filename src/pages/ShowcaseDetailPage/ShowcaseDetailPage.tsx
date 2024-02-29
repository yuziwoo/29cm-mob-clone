import { PageStyle as S } from './ShowcaseDetailPage.styled';
import { useParams } from 'react-router-dom';

const ShowcaseDetailPage = () => {
  const { id } = useParams();
  return <S.Page>ShowcaseDetailPage {id}</S.Page>;
};

export default ShowcaseDetailPage;
