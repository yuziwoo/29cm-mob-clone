import { PageStyle as S } from './CartPage.styled';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/auth';
import { useEffect } from 'react';
import { ROUTE_PATH } from '../../constants/path';
import { useRouter } from '../../hooks/useRouter';
import CommonPageAnimation from '../../components/common/motion/CommonPageAnimation/CommonPageAnimation';
import CartListWrap from '../../components/cart/CartListWrap/CartListWrap';
import RecommendedProducts from '../../components/product/RecommendedProducts/RecommendedProducts';
import { useProduct } from '../../hooks/product/useProduct';

const CartPage = () => {
  const [user] = useRecoilState(userState);
  const { navigate } = useRouter();
  const { productQuery } = useProduct();

  useEffect(() => {
    if (user) return;
    navigate(ROUTE_PATH.login, { state: { path: ROUTE_PATH.cart }, replace: true });
    // eslint-disable-next-line
  }, []);

  if (!productQuery.isSuccess) return <></>;
  return (
    <CommonPageAnimation>
      <S.Page>
        <S.CartList>
          <CartListWrap />
        </S.CartList>

        <S.RecommendedProducts>
          <RecommendedProducts products={productQuery.data} title="다른 고객이 함께 구매한 상품" />
        </S.RecommendedProducts>
      </S.Page>
    </CommonPageAnimation>
  );
};

export default CartPage;
