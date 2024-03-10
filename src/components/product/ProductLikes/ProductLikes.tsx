import IconLike from '../../icons/IconLike';
import { useLikeWithProduct } from '../../../hooks/like/useLikeWithProduct';
import { theme } from '../../../styles/theme';
import { useRecoilState } from 'recoil';
import { userState } from '../../../recoil/auth';
import { useRouter } from '../../../hooks/useRouter';
import { useCallback } from 'react';
import { ROUTE_PATH } from '../../../constants/path';
import { useLocation } from 'react-router-dom';

interface ProductLikesProps {
  productId: string;
  color?: string;
}

const ProductLikes = ({ productId, color = theme.color.BLACK }: ProductLikesProps) => {
  /**
   * 상품 좋아요 기능이 포함된 하트 아이콘 컴포넌트입니다.
   * 비로그인 유저가 클릭시 로그인 화면으로 이동합니다.
   */

  const [user] = useRecoilState(userState);
  const { navigate } = useRouter();
  const { pathname } = useLocation();

  const { liked, toggleLike } = useLikeWithProduct({ productId });

  const handleToggleLike = useCallback(() => {
    if (user) {
      toggleLike();
      return;
    }
    navigate(ROUTE_PATH.login, { state: { path: pathname }, replace: false });
  }, [toggleLike, navigate, pathname, user]);

  return (
    <div onClick={handleToggleLike} style={{ width: '100%', cursor: 'pointer' }}>
      <IconLike isLiked={liked} color={color} />
    </div>
  );
};

export default ProductLikes;
