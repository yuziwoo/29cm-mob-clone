import { useState } from 'react';
import * as S from './LoginForm.styled';
import { validateEmail } from '../../../utils/validateEmail';
import { LoginInputProps, LoginPasswordProps } from '../../../types/login';
import IconEye from '../../icons/IconEye';
import { theme } from '../../../styles/theme';
import IconEyeSlash from '../../icons/IconEyeSlash';
import { fetchEmailLogin } from '../../../api/firebase';
import { useRouter } from '../../../hooks/useRouter';

const initialInputState = { state: '', smallLabel: false, isValid: null, message: '' };

const LoginForm = ({ redirectPath }: { redirectPath: string }) => {
  const [id, setId] = useState<LoginInputProps>(initialInputState);
  const [password, setPassword] = useState<LoginPasswordProps>({
    ...initialInputState,
    security: true,
  });

  const { navigate } = useRouter();

  const handleIdInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const isValid = validateEmail(email);
    const message = isValid ? '' : '잘못된 이메일 주소입니다.';

    setId({ state: email, smallLabel: true, isValid, message });
  };

  const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPassword = e.target.value;
    const isValid = inputPassword.length > 0;
    const message = isValid ? '' : '패스워드를 입력해주세요.';

    setPassword((prevState) => ({ ...prevState, state: inputPassword, isValid, message }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id.isValid) {
      window.alert('이메일 주소를 확인해주세요.');
    }
    if (!password.isValid) {
      window.alert('패스워드를 입력해주세요.');
    }
    fetchEmailLogin({ email: id.state, password: password.state }).then(() => {
      navigate(redirectPath);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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

      <S.Submit>
        <p>로그인</p>
      </S.Submit>
    </form>
  );
};

export default LoginForm;
