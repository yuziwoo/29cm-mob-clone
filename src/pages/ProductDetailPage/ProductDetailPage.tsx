import { useParams } from 'react-router-dom';
import useSetHeaderState from '../../hooks/useSetHeaderState';
import { headerStateBlackBack } from '../../recoil/headerState';
import ProductDetailMainSwiper from '../../components/product/ProductDetailMainSwiper/ProductDetailMainSwiper';
import { useEffect, useState } from 'react';
import { useProduct } from '../../hooks/product/useProduct';
import { ProductProps } from '../../types/product';
import { motion } from 'framer-motion';
import { motionStyle } from '../../styles/motion';
import ProductInfo from '../../components/product/ProductInfo/ProductInfo';
import SkeletonImg from '../../components/skeleton/SkeletonImg/SkeletonImg';

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

  if (id === undefined)
    return <h1 style={{ textAlign: 'center', padding: '120px 16px' }}>상품을 찾을 수 없습니다.</h1>;

  if (product === null) return <SkeletonImg ratio={1}></SkeletonImg>;

  return (
    <motion.div
      initial={motionStyle.pageOpen.initial}
      animate={motionStyle.pageOpen.animate}
      transition={motionStyle.pageOpen.transition}
    >
      <ProductDetailMainSwiper thumbs={product.thumb} />
      <ProductInfo product={product} productId={id} />
    </motion.div>
  );
};

export default ProductDetailPage;
