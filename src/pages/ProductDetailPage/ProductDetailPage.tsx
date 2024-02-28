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
import ProductDetailsImg from '../../components/product/ProductDetailsImg/ProductDetailsImg';
import RecommendedProducts from '../../components/product/RecommendedProducts/RecommendedProducts';
import { getRecommendedProducts } from '../../utils/product/getRecommendedProducts';

const ProductDetailPage = () => {
  useSetHeaderState(headerStateBlackBack);

  const { id } = useParams();

  const { getProduct, productQuery } = useProduct();
  const [product, setProduct] = useState<undefined | null | ProductProps>(undefined);

  useEffect(() => {
    if (id && getProduct(id)) {
      setProduct(getProduct(id));
      return;
    }
    if (id && productQuery.isSuccess) {
      setProduct(null);
    }
  }, [getProduct, id, productQuery]);

  if (!productQuery.isSuccess) return <div>loading</div>;
  if (id === undefined || product === null) return <div>상품을 찾을 수 없습니다.</div>;

  return (
    <motion.div
      initial={motionStyle.pageOpen.initial}
      animate={motionStyle.pageOpen.animate}
      transition={motionStyle.pageOpen.transition}
      style={{ paddingBottom: '180px' }}
    >
      <ProductDetailMainSwiper thumbs={product?.thumb} />
      <ProductInfo product={product} productId={id} />
      <ProductDetailsImg imgURL={product?.imgURL} />
      <RecommendedProducts
        products={getRecommendedProducts({ id, products: productQuery.data || {} })}
      />
    </motion.div>
  );
};

export default ProductDetailPage;
