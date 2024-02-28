import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useProduct } from '../../hooks/product/useProduct';
import { ProductProps } from '../../types/product';
import { motion } from 'framer-motion';
import { motionStyle } from '../../styles/motion';
import ProductDetailMainSwiper from '../../components/product/ProductDetailMainSwiper/ProductDetailMainSwiper';
import ProductInfo from '../../components/product/ProductInfo/ProductInfo';
import ProductDetailsImg from '../../components/product/ProductDetailsImg/ProductDetailsImg';
import RecommendedProducts from '../../components/product/RecommendedProducts/RecommendedProducts';
import ProductDetailPageSkeleton from './ProductDetailPageSkeleton';
import { getRecommendedProducts } from '../../utils/product/getRecommendedProducts';
import * as S from './ProductDetailPage.styled';
import ProductReview from '../../components/product/ProductReview/ProductReview';
import { mockReview } from '../../mock/product';

const ProductDetailPage = () => {
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

  if (!productQuery.isSuccess) return <ProductDetailPageSkeleton />;
  if (id === undefined || product === null) return <h1>상품을 찾을 수 없습니다.</h1>;

  return (
    <motion.div
      initial={motionStyle.pageOpen.initial}
      animate={motionStyle.pageOpen.animate}
      transition={motionStyle.pageOpen.transition}
    >
      <S.Page>
        <ProductDetailMainSwiper thumbs={product?.thumb} />
        <ProductInfo product={product} productId={id} />
        <ProductDetailsImg imgURL={product?.imgURL} />
        <RecommendedProducts
          products={getRecommendedProducts({ id, products: productQuery.data || {} })}
        />
        <RecommendedProducts
          products={getRecommendedProducts({ id, products: productQuery.data || {} })}
          title="함께 구매한 상품"
        />

        <S.HR />

        <ProductReview reviews={mockReview} />

        <S.HR />
      </S.Page>
    </motion.div>
  );
};

export default ProductDetailPage;
