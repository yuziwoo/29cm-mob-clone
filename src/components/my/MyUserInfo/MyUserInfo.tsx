import { UserInfo } from '../../../types/auth';
import { ComponentStyle as S } from './MyUserInfo.styled';
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
    <S.Component>
      <S.FlexWrap>
        <S.ProfileImg
          style={{
            backgroundImage: `url(${user?.photoURL ? user.photoURL : userPlaceholder.PHOTO_URL})`,
          }}
        ></S.ProfileImg>
        <S.Text>{user?.displayName ? user.displayName : userPlaceholder.DISPLAY_NAME}님</S.Text>
        <S.Greeting>
          <S.AnimationTextWrap>
            <S.Text>안녕하세요!</S.Text>
            <S.Text>반갑습니다!</S.Text>
            <S.Text>안녕하세요!</S.Text>
          </S.AnimationTextWrap>
          <S.Text style={{ opacity: 0 }}>반갑습니다!</S.Text>
        </S.Greeting>
      </S.FlexWrap>

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
    </S.Component>
  );
};

export default MyUserInfo;
