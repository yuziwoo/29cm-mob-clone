import { ProductProps } from '../../../types/product';
import ProductLikes from '../ProductLikes/ProductLikes';

interface ProductInfoProps {
  product: ProductProps;
  productId: string;
}

const ProductInfo = ({ product, productId }: ProductInfoProps) => {
  // const {} = product;

  return (
    <div>
      <ProductLikes productId={productId ? productId : ''} />
    </div>
  );
};

export default ProductInfo;
