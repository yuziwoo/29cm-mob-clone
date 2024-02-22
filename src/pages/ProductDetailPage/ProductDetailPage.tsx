import { useParams } from 'react-router-dom';
import useSetHeaderState from '../../hooks/useSetHeaderState';
import { headerStateBlackBack } from '../../recoil/headerState';
import ProductDetailMainSwiper from '../../components/product/ProductDetailMainSwiper/ProductDetailMainSwiper';
import ProductLikes from '../../components/product/ProductLikes/ProductLikes';

const ProductDetailPage = () => {
  useSetHeaderState(headerStateBlackBack);

  const { id } = useParams();
  // const product

  return (
    <div>
      <ProductDetailMainSwiper thumbs={['../img/products/p1003-1.jpg']} />
      <ProductLikes productId={id ? id : ''} />
    </div>
  );
};

export default ProductDetailPage;
