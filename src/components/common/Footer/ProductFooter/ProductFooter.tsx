import { ComponentStyle as S } from './ProductFooter.styled';
import useCart from '../../../../hooks/cart/useCart';
import { useProduct } from '../../../../hooks/product/useProduct';
import ProductLikes from '../../../product/ProductLikes/ProductLikes';
import { theme } from '../../../../styles/theme';
import IconShare from '../../../icons/IconShare';
import { motion } from 'framer-motion';
import CommonButton from '../../motion/CommonButton/CommonButton';

interface ProductFooterProps {
  id: string | undefined;
}

const ProductFooter = ({ id }: ProductFooterProps) => {
  /**
   * ProductDetail 페이지에서 사용할 Footer입니다.
   */
  const { cartQuery, addCart } = useCart();
  const { productQuery, getProduct } = useProduct();

  const handleClickShare = () => {
    const url = window.location.href;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        window.alert('페이지 주소가 복사되었습니다.');
      });
    }
  };

  const handleClickCartButton = async () => {
    if (id === undefined || !cartQuery.isSuccess) return;
    addCart.mutate(id);
  };

  if (
    id === undefined ||
    !cartQuery.isSuccess ||
    !productQuery.isSuccess ||
    getProduct(id) === null
  )
    return <></>;

  return (
    <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.2 }}>
      <S.Component>
        <S.FlexSpaceBetween>
          <CommonButton>
            <S.LikeButton>
              <ProductLikes productId={id} color={theme.color.WHITE} />
            </S.LikeButton>
          </CommonButton>

          <CommonButton>
            <S.ShareButton onClick={handleClickShare}>
              <IconShare color={theme.color.WHITE} />
            </S.ShareButton>
          </CommonButton>
        </S.FlexSpaceBetween>

        <S.FlexSpaceBetween>
          <CommonButton>
            <S.CartButton onClick={handleClickCartButton}>장바구니</S.CartButton>
          </CommonButton>

          <div style={{ borderRight: `1px solid ${theme.color.GRAY7}`, height: '2.4rem' }}></div>

          <CommonButton>
            <S.BuyButton>구매하기</S.BuyButton>
          </CommonButton>
        </S.FlexSpaceBetween>
      </S.Component>
    </motion.div>
  );
};

export default ProductFooter;
