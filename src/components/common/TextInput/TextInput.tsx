import { useCallback, useEffect, useState } from 'react';
import { theme } from '../../../styles/theme';
import IconEye from '../../icons/IconEye';
import IconEyeSlash from '../../icons/IconEyeSlash';
import { ComponentStyle as S } from './TextInput.styled';

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

const TextInput = (props: TextInputProps) => {
  /**
   * Textinput 사용 방법
   * - isValid 파라미터를 이용하여 유효한 값인지 여부를 전달해주세요.
   * - onChange 파라미터를 통해 input value를 전달 받을 수 있습니다.
   * - type을 'password'로 설정한 경우 PasswordSecurity 버튼이 활성화됩니다. (텍스트 *표시 여부)
   * - fixedPaddingBottom을 설정하지 않으면 valid한 경우 20px, Invalid한 경우 40px의 padding-bottom이 주어집니다.
   */
  
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
    <S.Component style={{ paddingBottom: paddingBottom }}>
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
    </S.Component>
  );
};

export default TextInput;
