import ProductDetailMainSwiper from '../../components/product/ProductDetailMainSwiper/ProductDetailMainSwiper';
import ProductInfo from '../../components/product/ProductInfo/ProductInfo';
import ProductDetailsImg from '../../components/product/ProductDetailsImg/ProductDetailsImg';

const ProductDetailPageSkeleton = () => {
  return (
    <div style={{ paddingBottom: '180px' }}>
      <ProductDetailMainSwiper thumbs={undefined} />
      <div style={{ padding: '2rem 0' }}>
        <ProductInfo product={undefined} productId={undefined} />
        <ProductDetailsImg imgURL={undefined} />
      </div>
    </div>
  );
};

export default ProductDetailPageSkeleton;
