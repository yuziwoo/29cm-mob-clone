import { useCallback, useId, useState } from 'react';
import { ComponentStyle as S } from './LoginForm.styled';
import { validateEmail } from '../../../utils/validateEmail';
import { FormData } from '../../../types/login';
import { useRouter } from '../../../hooks/useRouter';
import { motion } from 'framer-motion';
import { motionStyle } from '../../../styles/motion';
import TextInput from '../../common/TextInput/TextInput';
import { useAuth } from '../../../hooks/auth/useAuth';

const LoginForm = ({ redirectPath }: { redirectPath: string }) => {
  /**
   * 로그인 폼입니다.
   * id, password의 유효성 검사를 실행한 후 로그인 할 수 있습니다.
   */

  const { navigate } = useRouter();
  const { loginEmail } = useAuth();
  const uniqueId = useId();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.id.isValid || !formData.password.isValid) {
      window.alert(
        !formData.id.isValid ? '이메일 주소를 확인해주세요.' : '패스워드를 확인해주세요.'
      );
      return;
    }
    await loginEmail.mutate({ email: formData.id.state, password: formData.password.state });
    if (loginEmail.isSuccess) {
      navigate(redirectPath);
    }
  };

  const [formData, setFormData] = useState<FormData>({
    id: {
      state: '',
      isValid: null,
    },
    password: {
      state: '',
      isValid: null,
    },
  });

  const handleIdInputChange = useCallback((input: string) => {
    setFormData((prevData) => ({
      id: { state: input, isValid: validateEmail(input) },
      password: prevData.password,
    }));
  }, []);

  const handlePasswordInputChange = useCallback((input: string) => {
    setFormData((prevData) => ({
      id: prevData.id,
      password: { state: input, isValid: input.length > 0 },
    }));
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        type="email"
        id={`${uniqueId}-id`}
        onChange={handleIdInputChange}
        isValid={formData.id.isValid}
        placeholder="이메일*"
        maxLength={50}
        required={true}
        invalidMessage="잘못된 형식의 이메일 주소입니다."
      />
      <TextInput
        type="password"
        id={`${uniqueId}-password`}
        isValid={formData.password.isValid}
        onChange={handlePasswordInputChange}
        placeholder="패스워드*"
        maxLength={20}
        required={true}
        invalidMessage="영문, 숫자, 특수문자를 6자 이상 조합하여주세요."
        fixedPaddingBottom="40px"
      />

      <motion.div
        whileTap={motionStyle.scaleButton.whileTap}
        transition={motionStyle.scaleButton.transition}
      >
        <S.SubmitButton>
          <p>로그인</p>
        </S.SubmitButton>
      </motion.div>
    </form>
  );
};

export default LoginForm;
