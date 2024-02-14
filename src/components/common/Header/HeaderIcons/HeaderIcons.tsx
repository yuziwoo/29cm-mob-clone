import * as S from './HeaderIcons.styled';
import IconAlert from '../../../icons/IconAlert';
import IconCart from '../../../icons/IconCart';
import IconSearch from '../../../icons/IconSearch';
import { theme } from '../../../../styles/theme';
import { useRecoilState } from 'recoil';
import { userState } from '../../../../recoil/auth';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '../../../../constants/path';
import { motion } from 'framer-motion';
import { motionStyle } from '../../../../styles/motion';

const HeaderIcons = () => {
  const [user] = useRecoilState(userState);
  const navigate = useNavigate();

  const handleClickAlert = () => {
    if (user) {
      navigate(ROUTE_PATH.alert);
      return;
    }
    navigate(ROUTE_PATH.login);
  };
  const handleClickCart = () => {
    if (user) {
      navigate(ROUTE_PATH.cart);
      return;
    }
    navigate(ROUTE_PATH.login);
  };

  return (
    <S.Icons className="icons">
      <motion.button
        whileTap={motionStyle.primaryButton.whileTap}
        transition={motionStyle.primaryButton.transition}
      >
        <IconSearch color={theme.color.WHITE} />
      </motion.button>
      <motion.button
        onClick={handleClickAlert}
        whileTap={motionStyle.primaryButton.whileTap}
        transition={motionStyle.primaryButton.transition}
      >
        <IconAlert color={theme.color.WHITE} />
      </motion.button>
      <motion.button
        onClick={handleClickCart}
        whileTap={motionStyle.primaryButton.whileTap}
        transition={motionStyle.primaryButton.transition}
      >
        <IconCart color={theme.color.WHITE} />
      </motion.button>
    </S.Icons>
  );
};

export default HeaderIcons;
