import { useCallback, useEffect, useState } from 'react';
import { SearchWordRankingProps } from '../../../types/search';
import { ComponentStyle as S } from './SearchWordRanking.styled';
import { getTwoDigitString } from '../../../utils/getTwoDigitString';
import { useRouter } from '../../../hooks/useRouter';
import { ROUTE_PATH } from '../../../constants/path';
import { theme } from '../../../styles/theme';

interface SearchWordRankingComponentProps {
  words: SearchWordRankingProps | undefined;
  onClickKeywordRank: (keyword: string) => void;
}

const SearchWordRanking = ({ words, onClickKeywordRank }: SearchWordRankingComponentProps) => {
  const [resetTime, setResetTime] = useState<Date>(new Date());
  const { navigate } = useRouter();

  useEffect(() => {
    if (words === undefined) return;

    setResetTime(new Date(words.resetTime));
  }, [words]);

  const handleClickKeyword = useCallback(
    (keyword: string) => {
      onClickKeywordRank(keyword);
      navigate(ROUTE_PATH.searchDetail.replace(':keyword', keyword));
    },
    [onClickKeywordRank, navigate]
  );

  if (words === undefined) return <></>;

  return (
    <S.Component>
      <S.TitleWrap>
        <S.Title>지금 많이 찾는 검색어</S.Title>
        <S.UpdateTime>
          {getTwoDigitString(resetTime.getMonth())}.{getTwoDigitString(resetTime.getDate())}{' '}
          업데이트
        </S.UpdateTime>
      </S.TitleWrap>

      <S.Ul>
        {words.data.map((keyword, index) => (
          <S.List
            key={index}
            onClick={() => {
              handleClickKeyword(keyword);
            }}
          >
            <S.Rank $color={index < 3 ? theme.color.SIGNATURE : theme.color.BLACK}>
              {index + 1}
            </S.Rank>
            <S.Keyword>{keyword}</S.Keyword>
          </S.List>
        ))}
      </S.Ul>
    </S.Component>
  );
};

export default SearchWordRanking;
