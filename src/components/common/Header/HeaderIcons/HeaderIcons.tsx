import * as S from './HeaderIcons.styled';
import IconAlert from '../../../icons/IconAlert';
import IconCart from '../../../icons/IconCart';
import IconSearch from '../../../icons/IconSearch';
import { theme } from '../../../../styles/theme';
import { useRecoilState } from 'recoil';
import { userState } from '../../../../recoil/auth';
import { ROUTE_PATH } from '../../../../constants/path';
import { motion } from 'framer-motion';
import { motionStyle } from '../../../../styles/motion';
import { useRouter } from '../../../../hooks/useRouter';

interface HeaderIconsProps {
  color: string;
}

const HeaderIcons = ({ color = theme.color.WHITE }: HeaderIconsProps) => {
  const [user] = useRecoilState(userState);
  const { navigate } = useRouter();

  const handleClickAlert = () => {
    if (user) {
      navigate(ROUTE_PATH.alert);
      return;
    }
    navigate(ROUTE_PATH.login, { state: { path: ROUTE_PATH.alert } });
  };
  const handleClickCart = () => {
    if (user) {
      navigate(ROUTE_PATH.cart);
      return;
    }
    navigate(ROUTE_PATH.login, { state: { path: ROUTE_PATH.cart } });
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
