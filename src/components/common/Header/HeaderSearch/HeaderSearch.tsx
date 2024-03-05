import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ComponentStyle as S } from './HeaderSearch.styled';
import IconSearch from '../../../icons/IconSearch';
import { theme } from '../../../../styles/theme';
import CommonButton from '../../motion/CommonButton/CommonButton';
import { useRouter } from '../../../../hooks/useRouter';
import { ROUTE_PATH } from '../../../../constants/path';

const HeaderSearch = () => {
  const { navigate } = useRouter();
  const { keyword } = useParams();
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    if (keyword === undefined) {
      return;
    }

    setInputText(keyword);
  }, [keyword]);

  const handleChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }, []);

  const handleNavigateSearchDetail = useCallback(() => {
    if (inputText.length > 0) {
      navigate(ROUTE_PATH.searchDetail.replace(':keyword', inputText));
    }
  }, [inputText, navigate]);

  const handleDeleteInputText = useCallback(() => {
    setInputText('');
  }, []);

  return (
    <S.Component>
      <S.Input type="text" value={inputText} maxLength={30} onChange={handleChangeInput} />
      <S.ButtonWrap>
        {inputText.length > 0 && (
          <CommonButton onClick={handleDeleteInputText}>
            <S.DeleteButton />
          </CommonButton>
        )}
        <CommonButton onClick={handleNavigateSearchDetail}>
          <S.SearchButton>
            <IconSearch color={theme.color.BLACK} />
          </S.SearchButton>
        </CommonButton>
      </S.ButtonWrap>
    </S.Component>
  );
};

export default HeaderSearch;
