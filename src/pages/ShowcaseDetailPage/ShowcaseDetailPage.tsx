import { useParams } from 'react-router-dom';

const ShowcaseDetailPage = () => {
  const { id } = useParams();
  return <div>ShowcaseDetailPage {id}</div>;
};

export default ShowcaseDetailPage;
