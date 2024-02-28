import { UserInfo } from '../../../types/auth';
import * as S from './MyUserInfo.styled';
import { motion } from 'framer-motion';
import IconRightArrow2 from '../../icons/IconRightArrow2';
import { motionStyle } from '../../../styles/motion';
import { useRouter } from '../../../hooks/useRouter';
import { ROUTE_PATH } from '../../../constants/path';
import { userPlaceholder } from '../../../constants/user';

const MyUserInfo = ({ user }: { user: UserInfo }) => {
  /**
   * 마이페이지에서 유저의 프로필 이미지와 이름 정보를 나타냅니다.
   * 화살표를 클릭하면 유저 정보 수정 페이지로 이동됩니다.
   */

  const { navigate } = useRouter();

  return (
    <S.SectionUserInfo>
      <S.Info>
        <S.ImgWrap
          style={{
            backgroundImage: `url(${user?.photoURL ? user.photoURL : userPlaceholder.PHOTO_URL})`,
          }}
        ></S.ImgWrap>
        <h1>{user?.displayName ? user.displayName : userPlaceholder.DISPLAY_NAME}님</h1>
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
        <S.Arrow
          onClick={() => {
            navigate(ROUTE_PATH.myEditInfo);
          }}
        >
          <IconRightArrow2 />
        </S.Arrow>
      </motion.div>
    </S.SectionUserInfo>
  );
};

export default MyUserInfo;
