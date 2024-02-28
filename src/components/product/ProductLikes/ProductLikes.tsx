import IconLike from '../../icons/IconLike';
import { useLikeWithProduct } from '../../../hooks/like/useLikeWithProduct';
import { theme } from '../../../styles/theme';

interface ProductLikesProps {
  productId: string;
  color?: string;
}

const ProductLikes = ({ productId, color = theme.color.BLACK }: ProductLikesProps) => {
  const { liked, isReady, toggleLike } = useLikeWithProduct({ productId });

  if (!isReady) {
    return (
      <div style={{ width: '100%', cursor: 'pointer' }}>
        <IconLike isLiked={liked} color={color} />
      </div>
    );
  }

  return (
    <div onClick={toggleLike} style={{ width: '100%', cursor: 'pointer' }}>
      <IconLike isLiked={liked} color={color} />
    </div>
  );
};

export default ProductLikes;
