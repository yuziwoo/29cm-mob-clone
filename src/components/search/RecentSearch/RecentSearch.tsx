import { useCallback, useEffect, useState } from 'react';
import { ComponentStyle as S } from './RecentSearch.styled';
import { localStorageAPI } from '../../../constants/localStorage';
import CommonButton from '../../common/motion/CommonButton/CommonButton';

interface RecentSearchProps {
  recentSearch: string | null;
  onChangeRecentSearch: (newRecentSearch: string) => void;
}

const RecentSearch = ({ recentSearch, onChangeRecentSearch }: RecentSearchProps) => {
  /**
   * 최근 검색어를 보여주는 컴포넌트입니다.
   */

  const [keywords, setKeywords] = useState<string[] | null>(null);

  useEffect(() => {
    setKeywords(
      recentSearch !== null
        ? recentSearch?.split(localStorageAPI.recentSearch.separateSymbol)
        : null
    );
  }, [recentSearch]);

  const handleRemoveKeyword = useCallback(
    (index: number) => {
      setKeywords((prevKeywords) => {
        if (prevKeywords === null) return prevKeywords;
        const newKeywords = [...prevKeywords];
        newKeywords.splice(index, 1);

        onChangeRecentSearch(newKeywords.join(localStorageAPI.recentSearch.separateSymbol));
        return newKeywords;
      });
    },
    [onChangeRecentSearch]
  );

  const handleRemoveAllKeywords = useCallback(() => {
    setKeywords([]);
    onChangeRecentSearch('');
  }, [onChangeRecentSearch]);

  if (keywords === null || keywords.length === 0) return <></>;

  return (
    <S.Component>
      <S.TitleWrap>
        <S.Title>최근 검색어</S.Title>
        <CommonButton onClick={handleRemoveAllKeywords}>
          <S.DeleteAll>모두 지우기</S.DeleteAll>
        </CommonButton>
      </S.TitleWrap>

      <S.Keywords>
        <S.KeywordsWrap>
          {keywords.map((keyword, index) => (
            <CommonButton
              key={index}
              onClick={() => {
                handleRemoveKeyword(index);
              }}
            >
              <S.Keyword>
                <S.KeywordText>{keyword}</S.KeywordText>
                <S.DeleteIcon />
              </S.Keyword>
            </CommonButton>
          ))}
        </S.KeywordsWrap>
      </S.Keywords>
    </S.Component>
  );
};

export default RecentSearch;
