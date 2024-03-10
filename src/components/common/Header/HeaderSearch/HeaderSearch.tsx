import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ComponentStyle as S } from './HeaderSearch.styled';
import IconSearch from '../../../icons/IconSearch';
import { theme } from '../../../../styles/theme';
import CommonButton from '../../motion/CommonButton/CommonButton';
import { useRouter } from '../../../../hooks/useRouter';
import { ROUTE_PATH } from '../../../../constants/path';
import { useSearch } from '../../../../hooks/search/useSearch';
import { elementId } from '../../../../constants/elementId';

interface HeaderSearchProps {
  placeholder?: string;
  noFocus?: boolean;
}

const HeaderSearch = ({ placeholder = '', noFocus = false }: HeaderSearchProps) => {
  /**
   * 검색 Input 컴포넌트입니다.
   * 
   * @params
   * placeholder: placeholder string
   * noFocus: true 설정시 input이 생성될때 자동 포커싱 되지 않습니다.
   */
  const { navigate } = useRouter();
  const { keyword } = useParams();
  const { addRecentSearch } = useSearch();
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    if (keyword === undefined) {
      setInputText('');
      const input = document.getElementById(elementId.search.INPUT);
      if (input && !noFocus) {
        input.focus();
      }
      return;
    }
    setInputText(keyword);
  }, [keyword, noFocus]);

  const handleSearch = useCallback(() => {
    if (inputText.length > 0) {
      addRecentSearch(inputText);
      navigate(ROUTE_PATH.searchDetail.replace(':keyword', inputText));
    }
  }, [inputText, navigate, addRecentSearch]);

  const handleChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }, []);

  const handleKeyDownInput = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === 13) {
        // Enter키를 누른 경우
        handleSearch();
        e.currentTarget.blur();
      }
    },
    [handleSearch]
  );

  const handleDeleteInputText = useCallback(() => {
    setInputText('');
  }, []);

  return (
    <S.Component>
      <S.Input
        type="text"
        value={inputText}
        maxLength={30}
        id={elementId.search.INPUT}
        onChange={handleChangeInput}
        onKeyDown={handleKeyDownInput}
        placeholder={placeholder}
      />
      <S.ButtonWrap>
        {inputText.length > 0 && (
          <CommonButton onClick={handleDeleteInputText}>
            <S.DeleteButton />
          </CommonButton>
        )}
        <CommonButton onClick={handleSearch}>
          <S.SearchButton>
            <IconSearch color={theme.color.BLACK} />
          </S.SearchButton>
        </CommonButton>
      </S.ButtonWrap>
    </S.Component>
  );
};

export default HeaderSearch;
