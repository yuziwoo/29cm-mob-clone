import { headerStateBlack } from '../../recoil/headerState';
import useSetHeaderState from '../../hooks/useSetHeaderState';
import { useEffect } from 'react';
import { ROUTE_PATH } from '../../constants/path';
import { useRouter } from '../../hooks/useRouter';
import * as S from './MyPage.styled';
import MyUserInfo from '../../components/my/MyUserInfo/MyUserInfo';
import MyInfoBalloon from '../../components/my/MyInfoBalloon/MyInfoBalloon';
import MyListButton from '../../components/my/MyListButton/MyListButton';
import { motion } from 'framer-motion';
import { motionStyle } from '../../styles/motion';
import { useAuth } from '../../hooks/auth/useAuth';

const MyPage = () => {
  useSetHeaderState(headerStateBlack);

  // const [user] = useRecoilState(userState);
  const { user, logout, deleteAccount } = useAuth();
  const { navigate } = useRouter();

  useEffect(() => {
    if (user) return;
    navigate(ROUTE_PATH.login, { state: { path: ROUTE_PATH.my }, replace: true });
    // eslint-disable-next-line
  }, []);

  const productList = [
    { text: '주문배송조회', onClick: () => {} },
    { text: '취소/교환/반품 내역', onClick: () => {} },
    { text: '나의 리뷰', onClick: () => {} },
  ];

  const accountList = [
    {
      text: '비밀번호 변경',
      onClick: () => {
        if (user?.providerId !== 'firebase') {
          window.alert('소셜로그인 회원님은 비밀번호가 존재하지 않습니다.');
          return;
        }
      },
    },
    {
      text: '로그아웃',
      onClick: async () => {
        const confirm = await window.confirm('로그아웃하시겠습니까?');
        if (confirm) logout.mutate();
      },
    },
    {
      text: '회원 탈퇴',
      onClick: async () => {
        const confirm = await window.confirm('정말로 탈퇴하시겠습니까?');
        if (confirm) deleteAccount.mutate();
      },
    },
  ];

  if (user === null) return <div></div>;
  return (
    <S.SectionMyPage>
      <motion.div
        initial={motionStyle.pageOpen.initial}
        animate={motionStyle.pageOpen.animate}
        transition={motionStyle.pageOpen.transition}
      >
        <MyUserInfo user={user} />
        <MyInfoBalloon />

        <S.ListWrap>
          {productList.map(({ text, onClick }, idx) => (
            <motion.li
              key={idx}
              whileTap={motionStyle.scaleButton.whileTap}
              transition={motionStyle.scaleButton.transition}
            >
              <MyListButton text={text} onClick={onClick} />
            </motion.li>
          ))}
        </S.ListWrap>

        <S.ListWrap>
          <S.ListTitle>나의 계정</S.ListTitle>
          {accountList.map(({ text, onClick }, idx) => (
            <motion.li
              key={idx}
              whileTap={motionStyle.scaleButton.whileTap}
              transition={motionStyle.scaleButton.transition}
            >
              <MyListButton text={text} onClick={onClick} />
            </motion.li>
          ))}
        </S.ListWrap>
      </motion.div>
    </S.SectionMyPage>
  );
};

export default MyPage;
