import { ComponentStyle as S } from './SocialLogin.styled';
import IconGoogle from '../../icons/IconGoogle';
import { testEmail } from '../../../mock/testEmail';
import { motion } from 'framer-motion';
import { motionStyle } from '../../../styles/motion';
import { useRouter } from '../../../hooks/useRouter';
import { useAuth } from '../../../hooks/auth/useAuth';

const SocialLogin = ({ redirectPath }: { redirectPath: string }) => {
  /**
   * 소셜 로그인 버튼을 모아둔 컴포넌트입니다.
   */

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
    <S.Component>
      <motion.button
        whileTap={motionStyle.primaryButton.whileTap}
        transition={motionStyle.primaryButton.transition}
        onClick={handleTestAccountLogin}
      >
        <S.Text>테스트 계정 로그인</S.Text>
      </motion.button>
      <motion.button
        whileTap={motionStyle.primaryButton.whileTap}
        transition={motionStyle.primaryButton.transition}
        onClick={handleGoogleLogin}
      >
        <S.Icon>
          <IconGoogle />
        </S.Icon>
        <S.Text>구글 로그인</S.Text>
      </motion.button>
    </S.Component>
  );
};

export default SocialLogin;
