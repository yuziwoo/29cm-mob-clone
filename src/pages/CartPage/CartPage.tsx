import { PageStyle as S } from './CartPage.styled';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/auth';
import { useEffect } from 'react';
import { ROUTE_PATH } from '../../constants/path';
import { useRouter } from '../../hooks/useRouter';
import CommonPageAnimation from '../../components/common/motion/CommonPageAnimation/CommonPageAnimation';
import CartListWrap from '../../components/cart/CartListWrap/CartListWrap';

const CartPage = () => {
  const [user] = useRecoilState(userState);
  const { navigate } = useRouter();

  useEffect(() => {
    if (user) return;
    navigate(ROUTE_PATH.login, { state: { path: ROUTE_PATH.cart }, replace: true });
    // eslint-disable-next-line
  }, []);

  return (
    <CommonPageAnimation>
      <S.Page>
        <CartListWrap />
      </S.Page>
    </CommonPageAnimation>
  );
};

export default CartPage;
