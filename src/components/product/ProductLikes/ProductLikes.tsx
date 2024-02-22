import IconLike from '../../icons/IconLike';
import { useLikeWithProduct } from '../../../hooks/like/useLikeWithProduct';

interface ProductLikesProps {
  productId: string;
}

const ProductLikes = ({ productId }: ProductLikesProps) => {
  const { liked, isReady, toggleLike } = useLikeWithProduct({ productId });

  if (!isReady) {
    return (
      <div style={{ width: '32px', height: '32px' }}>
        <IconLike isLiked={liked} />
      </div>
    );
  }

  return (
    <div onClick={toggleLike} style={{ width: '32px', height: '32px' }}>
      <IconLike isLiked={liked} />
    </div>
  );
};

export default ProductLikes;
