import ProductDetailMainSwiper from '../../components/product/ProductDetailMainSwiper/ProductDetailMainSwiper';
import ProductInfo from '../../components/product/ProductInfo/ProductInfo';

const ProductDetailPageSkeleton = () => {
  return (
    <div style={{ paddingBottom: '180px' }}>
      <ProductDetailMainSwiper thumbs={undefined} />
      <div style={{ padding: '2rem 0' }}>
        <ProductInfo product={undefined} productId={undefined} />
      </div>
    </div>
  );
};

export default ProductDetailPageSkeleton;
