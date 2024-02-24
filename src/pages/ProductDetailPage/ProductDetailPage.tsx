import { useParams } from 'react-router-dom';
import useSetHeaderState from '../../hooks/useSetHeaderState';
import { headerStateBlackBack } from '../../recoil/headerState';
import ProductDetailMainSwiper from '../../components/product/ProductDetailMainSwiper/ProductDetailMainSwiper';
import ProductLikes from '../../components/product/ProductLikes/ProductLikes';
import { useEffect, useState } from 'react';
import { useProduct } from '../../hooks/product/useProduct';
import { ProductProps } from '../../types/product';
import { motion } from 'framer-motion';
import { motionStyle } from '../../styles/motion';

const ProductDetailPage = () => {
  useSetHeaderState(headerStateBlackBack);

  const { id } = useParams();

  const { getProduct } = useProduct();
  const [product, setProduct] = useState<null | ProductProps>(null);

  useEffect(() => {
    if (id && getProduct(id)) {
      setProduct(getProduct(id));
    }
  }, [getProduct, id]);

  if (product === null) return <div></div>;
  return (
    <motion.div
      initial={motionStyle.pageOpen.initial}
      animate={motionStyle.pageOpen.animate}
      transition={motionStyle.pageOpen.transition}
    >
      <ProductDetailMainSwiper thumbs={product.thumb} />
      <ProductLikes productId={id ? id : ''} />
      <h1 style={{fontSize: '500px'}}>geelelkwjfojewf</h1>
    </motion.div>
  );
};

export default ProductDetailPage;
