import { ComponentStyle as S } from './HeaderIcons.styled';
import IconAlert from '../../../icons/IconAlert';
import IconCart from '../../../icons/IconCart';
import IconSearch from '../../../icons/IconSearch';
import { theme } from '../../../../styles/theme';
import { ROUTE_PATH } from '../../../../constants/path';
import { motion } from 'framer-motion';
import { motionStyle } from '../../../../styles/motion';
import { useRouter } from '../../../../hooks/useRouter';
import useCart from '../../../../hooks/cart/useCart';
import { useEffect, useState } from 'react';

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
        <motion.button
          whileTap={motionStyle.primaryButton.whileTap}
          transition={motionStyle.primaryButton.transition}
        >
          <IconSearch color={color} />
        </motion.button>
      </S.ButtonWrap>

      <S.ButtonWrap onClick={handleClickAlert}>
        <motion.button
          whileTap={motionStyle.primaryButton.whileTap}
          transition={motionStyle.primaryButton.transition}
        >
          <IconAlert color={color} />
        </motion.button>
      </S.ButtonWrap>

      <S.ButtonWrap onClick={handleClickCart}>
        <motion.button
          whileTap={motionStyle.primaryButton.whileTap}
          transition={motionStyle.primaryButton.transition}
        >
          <IconCart color={color} />
        </motion.button>
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
