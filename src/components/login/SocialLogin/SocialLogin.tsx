import * as S from './SocialLogin.styled';
import IconGoogle from '../../icons/IconGoogle';
import { fetchEmailLogin, fetchGoogleLogin } from '../../../api/firebase';
import { testEmail } from '../../../mock/testEmail';
import { UserCredential } from 'firebase/auth';
import { motion } from 'framer-motion';
import { motionStyle } from '../../../styles/motion';
import { useRouter } from '../../../hooks/useRouter';

const SocialLogin = ({ redirectPath }: { redirectPath: string }) => {
  const { navigate } = useRouter();
  const handleTestAccountLogin = () => {
    fetchEmailLogin(testEmail).then(() => {
      navigate(redirectPath);
    });
  };

  const handleGoogleLogin = () => {
    fetchGoogleLogin((result: UserCredential) => {
      if (result.user) {
        navigate(redirectPath);
      }
    });
  };

  return (
    <S.SocialLoginArticle>
      <motion.button
        whileTap={motionStyle.primaryButton.whileTap}
        transition={motionStyle.primaryButton.transition}
        onClick={handleTestAccountLogin}
      >
        <p>테스트 계정 로그인</p>
      </motion.button>
      <motion.button
        whileTap={motionStyle.primaryButton.whileTap}
        transition={motionStyle.primaryButton.transition}
        onClick={handleGoogleLogin}
      >
        <IconGoogle />
        <p>구글 로그인</p>
      </motion.button>
    </S.SocialLoginArticle>
  );
};

export default SocialLogin;
