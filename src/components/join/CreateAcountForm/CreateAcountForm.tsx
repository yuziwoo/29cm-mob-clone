import { useState } from 'react';
import * as S from './CreateAcountForm.styled';
import { validateEmail } from '../../../utils/validateEmail';
import { LoginInputProps, LoginPasswordProps } from '../../../types/login';
import IconEye from '../../icons/IconEye';
import { theme } from '../../../styles/theme';
import IconEyeSlash from '../../icons/IconEyeSlash';
import { createEmailUser } from '../../../api/firebase';
import { useRouter } from '../../../hooks/useRouter';
import { motion } from 'framer-motion';
import { motionStyle } from '../../../styles/motion';

const initialInputState = { state: '', smallLabel: false, isValid: null, message: '' };

const CreateAcountForm = ({ redirectPath }: { redirectPath: string }) => {
  const [id, setId] = useState<LoginInputProps>(initialInputState);
  const [password, setPassword] = useState<LoginPasswordProps>({
    ...initialInputState,
    security: true,
  });

  const { navigate } = useRouter();

  const handleIdInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const isValid = validateEmail(email);
    const message = isValid ? '' : '잘못된 형식의 이메일 주소입니다.';

    setId({ state: email, smallLabel: true, isValid, message });
  };

  const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPassword = e.target.value;
    const isValid = inputPassword.length >= 6;
    const message = isValid ? '' : '패스워드는 6자 이상 입력해주세요.';

    setPassword((prevState) => ({ ...prevState, state: inputPassword, isValid, message }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id.isValid || !password.isValid) {
      window.alert(!id.isValid ? '이메일 주소를 확인해주세요.' : '패스워드를 입력해주세요.');
      return;
    }
    createEmailUser({ email: id.state, password: password.state }, () => {
      navigate(redirectPath);
    });
  };

  return (
    <S.CreateAccount onSubmit={handleSubmit}>
      <S.Id $isValid={id.isValid} $smallLabel={id.smallLabel}>
        <label htmlFor="login-id">이메일*</label>
        <input
          type="email"
          id="login-id"
          name="login-id"
          maxLength={50}
          onFocus={() => setId((prevState) => ({ ...prevState, smallLabel: true }))}
          onBlur={() => {
            if (id.state.length === 0) {
              setId((prevState) => ({ ...prevState, smallLabel: false }));
            }
          }}
          onChange={handleIdInputChange}
          value={id.state}
          placeholder=""
          required
        />
        <p className="message">{id.message}</p>
      </S.Id>

      <S.Password
        $isValid={password.isValid}
        $smallLabel={password.smallLabel}
        $security={password.security}
      >
        <label htmlFor="login-password">패스워드*</label>
        <input
          type={password.security ? 'password' : 'text'}
          id="login-password"
          name="login-password"
          maxLength={50}
          onChange={handlePasswordInputChange}
          onFocus={() => setPassword((prevState) => ({ ...prevState, smallLabel: true }))}
          onBlur={() => {
            if (password.state.length === 0) {
              setPassword((prevState) => ({ ...prevState, smallLabel: false }));
            }
          }}
          value={password.state}
          placeholder=""
          required
        />
        <S.PasswordSecurity
          onClick={() =>
            setPassword((prevState) => ({ ...prevState, security: !prevState.security }))
          }
        >
          {password.security ? (
            <IconEyeSlash color={theme.color.BLACK} />
          ) : (
            <IconEye color={theme.color.BLACK} />
          )}
        </S.PasswordSecurity>

        <p className="message">{password.message}</p>
      </S.Password>

      <motion.div
        style={{ display: 'inline-block' }}
        whileTap={motionStyle.scaleButton.whileTap}
        transition={motionStyle.scaleButton.transition}
      >
        <S.Submit>
          <p>회원가입</p>
        </S.Submit>
      </motion.div>
    </S.CreateAccount>
  );
};

export default CreateAcountForm;
