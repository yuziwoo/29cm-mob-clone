import { UserInfo } from '../../../types/auth';
import * as S from './MyUserInfo.styled';
import { motion } from 'framer-motion';
import IconRightArrow2 from '../../icons/IconRightArrow2';
import { motionStyle } from '../../../styles/motion';

// const { displayName, email, photoURL, providerId } = user;
const PLACEHOLDER = {
  displayName: '방문자',
  photoURL: '../img/placeholder/user1.jpg',
};

const MyUserInfo = ({ user }: { user: UserInfo }) => {
  return (
    <S.SectionUserInfo>
      <S.Info>
        <S.ImgWrap>
          <img src={user?.photoURL ? user.photoURL : PLACEHOLDER.photoURL} alt="사용자 프로필" />
        </S.ImgWrap>
        <h1>{user?.displayName ? user.displayName : PLACEHOLDER.displayName}님</h1>
        <S.TextWrap>
          <div className="container">
            <h1>안녕하세요!</h1>
            <h1>좋은 하루 보내세요.</h1>
            <h1>안녕하세요!</h1>
          </div>
          <h1 style={{ opacity: 0 }}>좋은 하루 보내세요.</h1>
        </S.TextWrap>
      </S.Info>

      <motion.div
        whileTap={motionStyle.primaryButton.whileTap}
        transition={motionStyle.primaryButton.transition}
      >
        <S.Arrow>
          <IconRightArrow2 />
        </S.Arrow>
      </motion.div>
    </S.SectionUserInfo>
  );
};

export default MyUserInfo;
