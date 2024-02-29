import { ComponentStyle as S } from './MyInfoBalloon.styled';
import { motion } from 'framer-motion';
import { motionStyle } from '../../../styles/motion';
import IconRightArrow2 from '../../icons/IconRightArrow2';
import { theme } from '../../../styles/theme';

const MyInfoBalloon = () => {
  /**
   * 마이페이지에서 고객 정보 풍선을 보여주는 컴포넌트입니다.
   * 회원등급, 사용 가능 쿠폰, 포인트를 보여주며, 현재는 API없이 임의의 데이터를 보여줍니다.
   */

  return (
    <div>
      <motion.div
        whileTap={motionStyle.primaryButton.whileTap}
        transition={motionStyle.primaryButton.transition}
        style={{ marginTop: '40px' }}
      >
        <S.Balloon>
          <S.Info>
            <S.TextSmall>
              회원 등급 <img src="../img/icon/icon_membership.png" alt="멤버쉽 아이콘" />
            </S.TextSmall>
            <S.TextBig>회원님은 VIP 등급이에요.</S.TextBig>
          </S.Info>

          <S.TextBoxSmall>
            <span>등급별 혜택</span>
          </S.TextBoxSmall>
        </S.Balloon>
      </motion.div>

      <S.BalloonContainer>
        <motion.div
          className="balloon-wrap"
          whileTap={motionStyle.primaryButton.whileTap}
          transition={motionStyle.primaryButton.transition}
        >
          <S.Balloon>
            <S.Info>
              <S.TextSmall>사용가능 쿠폰</S.TextSmall>
              <S.TextBig>1</S.TextBig>
            </S.Info>

            <S.Arrow>
              <IconRightArrow2 color={theme.color.BLACK} />
            </S.Arrow>
          </S.Balloon>
        </motion.div>

        <motion.div
          className="balloon-wrap"
          whileTap={motionStyle.primaryButton.whileTap}
          transition={motionStyle.primaryButton.transition}
        >
          <S.Balloon>
            <S.Info>
              <S.TextSmall>포인트</S.TextSmall>
              <S.TextBig>30,000</S.TextBig>
            </S.Info>

            <S.Arrow>
              <IconRightArrow2 color={theme.color.BLACK} />
            </S.Arrow>
          </S.Balloon>
        </motion.div>
      </S.BalloonContainer>
    </div>
  );
};

export default MyInfoBalloon;
