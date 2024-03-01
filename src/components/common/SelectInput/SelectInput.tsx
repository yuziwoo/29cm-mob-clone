import { useCallback, useEffect, useState } from 'react';
import { ComponentStyle as S } from './SelectInput.styled';
import IconDownArrow2 from '../../icons/IconDownArrow2';
import { theme } from '../../../styles/theme';

interface SelectInputProps {
  title: string;
  values: string[];
  onChange: (value: string) => void;
}

const SelectInput = ({ title, values, onChange }: SelectInputProps) => {
  /**
   * select, option 태그의 기능을 하는 컴포넌트 입니다.
   * 숨겨져있던 option 태그들은 윈도우의 height와 현재 select의 위치에 따라 위에 나타날지 아래에서 나타날지 바뀝니다.
   */

  const [showOption, setShowOption] = useState(false);
  const [showDirection, setShowDirection] = useState<'down' | 'up'>('up');

  const handleShowOption = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setShowOption((prevShowOption) => !prevShowOption);
    const direction = window.innerHeight / 2 < e.pageY ? 'down' : 'up';
    setShowDirection(direction);
  }, []);

  const handleClickOption = useCallback(
    (value: string) => {
      onChange(value);
      setShowOption(false);
    },
    [onChange]
  );

  return (
    <S.Component>
      <S.MainBlock onClick={handleShowOption}>
        <S.Text>{title}</S.Text>
        <S.Arrow $isOpen={showOption}>
          <IconDownArrow2 color={theme.color.GRAY3} />
        </S.Arrow>
      </S.MainBlock>
      <S.Select $isOpen={showOption} $direction={showDirection}>
        {values.map((value, index) => (
          <S.Option
            key={index}
            onClick={(e) => {
              handleClickOption(value);
            }}
          >
            <S.Text>{value}</S.Text>
          </S.Option>
        ))}
      </S.Select>
    </S.Component>
  );
};

export default SelectInput;
