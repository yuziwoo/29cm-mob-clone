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

const HeaderSearch = () => {
  const { navigate } = useRouter();
  const { keyword } = useParams();
  const { addRecentSearch } = useSearch();
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    if (keyword === undefined) return;
    setInputText(keyword);
  }, [keyword]);

  useEffect(() => {
    const input = document.getElementById(elementId.search.INPUT);
    if (input) {
      input.focus();
    }
  }, []);

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
