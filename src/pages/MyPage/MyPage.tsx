import { headerStateBlack } from '../../recoil/headerState';
import useSetHeaderState from '../../hooks/useSetHeaderState';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/auth';
import { useEffect } from 'react';
import { ROUTE_PATH } from '../../constants/path';
import { useRouter } from '../../hooks/useRouter';
import * as S from './MyPage.styled';
import MyUserInfo from '../../components/my/MyUserInfo/MyUserInfo';
import { motion } from 'framer-motion';
import { motionStyle } from '../../styles/motion';
import IconRightArrow2 from '../../components/icons/IconRightArrow2';
import { theme } from '../../styles/theme';
import MyInfoBalloon from '../../components/my/MyInfoBalloon/MyInfoBalloon';

const MyPage = () => {
  useSetHeaderState(headerStateBlack);

  const [user] = useRecoilState(userState);
  const { navigate } = useRouter();

  useEffect(() => {
    if (user) return;
    navigate(ROUTE_PATH.login, { state: { path: ROUTE_PATH.my } });
    // eslint-disable-next-line
  }, []);

  if (user === null) return <div></div>;

  return (
    <S.SectionMyPage>
      <MyUserInfo user={user} />
      <MyInfoBalloon />
      
    </S.SectionMyPage>
  );
};

export default MyPage;
