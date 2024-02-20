import { useCallback, useEffect, useState } from 'react';
import { theme } from '../../../styles/theme';
import IconEye from '../../icons/IconEye';
import IconEyeSlash from '../../icons/IconEyeSlash';
import * as S from './TextInput.styled';

interface TextInputProps {
  type: 'email' | 'text' | 'password';
  id: string;
  placeholder: string;
  isValid: boolean | null;
  maxLength?: number;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (input: string) => void;
  required?: boolean;
  fixedPaddingBottom?: string;
  invalidMessage?: string;
}

/**
 * type === 'password'인 경우 PasswordSecurity 버튼이 생성됩니다. 버튼을 눌러 패스워드의 *표처리 여부를 정합니다.
 * fixedPaddingBottom : 설정하지 않은 경우 기본 값으로 validator를 통과하면 20px, false인 경우 40px이 적용됩니다.
 */

const TextInput = (props: TextInputProps) => {
  const {
    type,
    id,
    placeholder,
    isValid,
    maxLength = 50,
    onFocus = () => {},
    onBlur = () => {},
    onChange = (input) => {},
    required = false,
    fixedPaddingBottom,
    invalidMessage = '잘못된 입력입니다.',
  } = props;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [text, setText] = useState('');
  const [smallLabel, setSmallLabel] = useState(false);
  const [paddingBottom, setPaddingBottom] = useState(
    fixedPaddingBottom ? fixedPaddingBottom : '20px'
  );

  useEffect(() => {
    setPaddingBottom(fixedPaddingBottom ? fixedPaddingBottom : isValid === false ? '40px' : '20px');
    // eslint-disable-next-line
  }, [isValid, fixedPaddingBottom]);

  const handleChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
      onChange(e.target.value);
    },
    [onChange]
  );

  const handleFocusInput = useCallback(() => {
    setSmallLabel(true);
    onFocus();
  }, [onFocus]);

  const handleBlurInput = useCallback(() => {
    if (text.length === 0) {
      setSmallLabel(false);
    }
    onBlur();
    // eslint-disable-next-line
  }, [onBlur]);

  const handleClickPasswordSecurity = useCallback(() => {
    setIsPasswordVisible((prev) => !prev);
  }, []);

  return (
    <S.InputWrap style={{ paddingBottom: paddingBottom }}>
      <S.Label htmlFor={id} $isValid={isValid} $smallLabel={smallLabel}>
        {placeholder}
      </S.Label>
      <S.Input
        $isValid={isValid}
        type={type !== 'password' ? type : isPasswordVisible ? 'text' : 'password'}
        id={id}
        name={id}
        maxLength={maxLength}
        onChange={handleChangeInput}
        onFocus={handleFocusInput}
        onBlur={handleBlurInput}
        required={required}
      />
      {isValid === false && <S.Message>{invalidMessage}</S.Message>}

      {type === 'password' && (
        <S.PasswordSecurity onClick={handleClickPasswordSecurity}>
          {isPasswordVisible ? (
            <IconEye color={theme.color.BLACK} />
          ) : (
            <IconEyeSlash color={theme.color.BLACK} />
          )}
        </S.PasswordSecurity>
      )}
    </S.InputWrap>
  );
};

export default TextInput;
