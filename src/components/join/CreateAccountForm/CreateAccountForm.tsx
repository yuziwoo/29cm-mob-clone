import { useCallback, useId, useState } from 'react';
import { ComponentStyle as S } from './CreateAccountForm.styled';
import { useRouter } from '../../../hooks/useRouter';
import { motion } from 'framer-motion';
import { motionStyle } from '../../../styles/motion';
import TextInput from '../../common/TextInput/TextInput';
import { validateEmail } from '../../../utils/validateEmail';
import { validatePassword } from '../../../utils/validatePassword';
import { FormData } from '../../../types/login';
import { useAuth } from '../../../hooks/auth/useAuth';

const CreateAccountForm = ({ redirectPath }: { redirectPath: string }) => {
  /**
   * 회원가입 Form 입니다.
   * id, password 입력 후 유효성 검사를 하여 회원가입이 가능합니다.
   */

  const { navigate } = useRouter();
  const { createAccount } = useAuth();
  const uniqueId = useId();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.id.isValid || !formData.password.isValid) {
      window.alert(
        !formData.id.isValid ? '이메일 주소를 확인해주세요.' : '패스워드를 확인해주세요.'
      );
      return;
    }
    await createAccount.mutate({ email: formData.id.state, password: formData.password.state });
    if (createAccount.isSuccess) {
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
      password: { state: input, isValid: validatePassword(input) },
    }));
  }, []);

  return (
    <S.Component onSubmit={handleSubmit}>
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
        style={{ display: 'inline-block' }}
        whileTap={motionStyle.scaleButton.whileTap}
        transition={motionStyle.scaleButton.transition}
      >
        <S.SubmitButton>
          <p>회원가입</p>
        </S.SubmitButton>
      </motion.div>
    </S.Component>
  );
};

export default CreateAccountForm;
