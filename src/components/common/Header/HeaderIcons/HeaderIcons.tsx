import { ComponentStyle as S } from './HeaderIcons.styled';
import IconAlert from '../../../icons/IconAlert';
import IconCart from '../../../icons/IconCart';
import IconSearch from '../../../icons/IconSearch';
import { theme } from '../../../../styles/theme';
import { ROUTE_PATH } from '../../../../constants/path';
import { useRouter } from '../../../../hooks/useRouter';
import useCart from '../../../../hooks/cart/useCart';
import { useEffect, useState } from 'react';
import CommonButton from '../../motion/CommonButton/CommonButton';

interface HeaderIconsProps {
  color: string;
}

const HeaderIcons = ({ color = theme.color.WHITE }: HeaderIconsProps) => {
  /**
   * Search, Alert, Cart 아이콘 묶음입니다.
   */

  const { navigate } = useRouter();
  const { cartQuery } = useCart();
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    if (cartQuery.isSuccess) {
      setCartQuantity(Object.keys(cartQuery.data).length);
    }
  }, [cartQuery]);

  const handleClickSearch = () => {
    navigate(ROUTE_PATH.search);
  };

  const handleClickAlert = () => {
    navigate(ROUTE_PATH.alert);
  };
  const handleClickCart = () => {
    navigate(ROUTE_PATH.cart);
  };

  return (
    <S.Component>
      <S.ButtonWrap onClick={handleClickSearch}>
        <CommonButton>
          <IconSearch color={color} />
        </CommonButton>
      </S.ButtonWrap>

      <S.ButtonWrap onClick={handleClickAlert}>
        <CommonButton>
          <IconAlert color={color} />
        </CommonButton>
      </S.ButtonWrap>

      <S.ButtonWrap onClick={handleClickCart}>
        <CommonButton>
          <IconCart color={color} />
        </CommonButton>
        {cartQuantity > 0 && (
          <S.Count>
            <p>{cartQuantity}</p>
          </S.Count>
        )}
      </S.ButtonWrap>
    </S.Component>
  );
};

export default HeaderIcons;
