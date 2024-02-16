import { useState } from 'react';
import * as S from './LoginForm.styled';

type InputProps = {
  state: string;
  smallLabel: boolean;
  isValid: null | boolean;
};

const initialInputState = { state: '', smallLabel: false, isValid: null };

const LoginForm = () => {
  const [id, setId] = useState<InputProps>(initialInputState);
  const [password, setPassword] = useState<InputProps & { security: boolean }>({
    ...initialInputState,
    security: true,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <S.LoginForm onSubmit={handleSubmit}>
      <S.Id>
        <label htmlFor="login-id">이메일</label>
        <input
          type="email"
          id="login-id"
          name="login-id"
          maxLength={50}
          onInput={(e) => {setId((prevState) => ({...prevState}))}}
        />
      </S.Id>
      <S.Password></S.Password>
    </S.LoginForm>
  );
};

export default LoginForm;
