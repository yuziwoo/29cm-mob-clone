import * as S from './HeaderIcons.styled';
import IconAlert from '../../../icons/IconAlert';
import IconCart from '../../../icons/IconCart';
import IconSearch from '../../../icons/IconSearch';
import { theme } from '../../../../styles/theme';
import { ROUTE_PATH } from '../../../../constants/path';
import { motion } from 'framer-motion';
import { motionStyle } from '../../../../styles/motion';
import { useRouter } from '../../../../hooks/useRouter';

interface HeaderIconsProps {
  color: string;
}

const HeaderIcons = ({ color = theme.color.WHITE }: HeaderIconsProps) => {
  const { navigate } = useRouter();

  const handleClickAlert = () => {
    navigate(ROUTE_PATH.alert);
  };
  const handleClickCart = () => {
    navigate(ROUTE_PATH.cart);
  };

  return (
    <S.Icons className="icons">
      <motion.button
        whileTap={motionStyle.primaryButton.whileTap}
        transition={motionStyle.primaryButton.transition}
      >
        <IconSearch color={color} />
      </motion.button>
      <motion.button
        onClick={handleClickAlert}
        whileTap={motionStyle.primaryButton.whileTap}
        transition={motionStyle.primaryButton.transition}
      >
        <IconAlert color={color} />
      </motion.button>
      <motion.button
        onClick={handleClickCart}
        whileTap={motionStyle.primaryButton.whileTap}
        transition={motionStyle.primaryButton.transition}
      >
        <IconCart color={color} />
      </motion.button>
    </S.Icons>
  );
};

export default HeaderIcons;
