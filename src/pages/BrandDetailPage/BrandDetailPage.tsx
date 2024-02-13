import { useParams } from 'react-router-dom';

const BrandDetailPage = () => {
  const { id } = useParams();
  return <div>BrandDetailPage {id}</div>;
};

export default BrandDetailPage;
