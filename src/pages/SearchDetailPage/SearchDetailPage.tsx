import { useParams } from 'react-router-dom';

const SearchDetailPage = () => {
  const { keyword } = useParams();
  return <div>SearchDetailPage {keyword}</div>;
};

export default SearchDetailPage;
