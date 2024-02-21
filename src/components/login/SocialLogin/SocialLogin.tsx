import * as S from './SocialLogin.styled';
import IconGoogle from '../../icons/IconGoogle';
import { testEmail } from '../../../mock/testEmail';
import { motion } from 'framer-motion';
import { motionStyle } from '../../../styles/motion';
import { useRouter } from '../../../hooks/useRouter';
import { useAuth } from '../../../hooks/auth/useAuth';

const SocialLogin = ({ redirectPath }: { redirectPath: string }) => {
  const { navigate } = useRouter();
  const { loginGoogle, loginEmail } = useAuth();
  const handleTestAccountLogin = async () => {
    await loginEmail.mutate(testEmail);
    if (loginEmail.isSuccess) {
      navigate(redirectPath);
    }
  };

  const handleGoogleLogin = async () => {
    await loginGoogle.mutate();
    if (loginGoogle.isSuccess) {
      navigate(redirectPath);
    }
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
