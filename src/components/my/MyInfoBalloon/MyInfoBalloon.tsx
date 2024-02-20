import { motion } from 'framer-motion';
import { motionStyle } from '../../../styles/motion';
import IconRightArrow2 from '../../icons/IconRightArrow2';
import { theme } from '../../../styles/theme';
import * as S from './MyInfoBalloon.styled'

const MyInfoBalloon = () => {
  return (
    <div>
      <motion.div
        whileTap={motionStyle.primaryButton.whileTap}
        transition={motionStyle.primaryButton.transition}
        style={{ marginTop: '40px' }}
      >
        <S.Balloon>
          <div className="info">
            <p>
              회원 등급 <img src="../img/icon/icon_membership.png" alt="멤버쉽 아이콘" />
            </p>
            <h1>회원님은 VIP 등급이에요.</h1>
          </div>

          <div className="text-small">
            <h6>등급별 혜택</h6>
          </div>
        </S.Balloon>
      </motion.div>

      <S.BalloonContainer>
        <motion.div
          className="balloon-wrap"
          whileTap={motionStyle.primaryButton.whileTap}
          transition={motionStyle.primaryButton.transition}
        >
          <S.Balloon>
            <div className="info">
              <p>사용가능 쿠폰</p>
              <h1>1</h1>
            </div>

            <div className="icon-arrow">
              <IconRightArrow2 color={theme.color.BLACK} />
            </div>
          </S.Balloon>
        </motion.div>

        <motion.div
          className="balloon-wrap"
          whileTap={motionStyle.primaryButton.whileTap}
          transition={motionStyle.primaryButton.transition}
        >
          <S.Balloon>
            <div className="info">
              <p>포인트</p>
              <h1>30,000</h1>
            </div>

            <div className="icon-arrow">
              <IconRightArrow2 color={theme.color.BLACK} />
            </div>
          </S.Balloon>
        </motion.div>
      </S.BalloonContainer>
    </div>
  );
};

export default MyInfoBalloon;
