import { useEffect, useState } from 'react';
import { SearchWordRankingProps } from '../../../types/search';
import { ComponentStyle as S } from './SearchWordRanking.styled';

interface SearchWordRankingComponentProps {
  words: SearchWordRankingProps | undefined;
}

const SearchWordRanking = ({ words }: SearchWordRankingComponentProps) => {
  const [resetTime, setResetTime] = useState<Date>(new Date());

  useEffect(() => {
    if (words === undefined) return;

    setResetTime(new Date(words.resetTime));
  }, [words]);
  if (words === undefined) return <></>;

  return (
    <S.Component>
      <S.TitleWrap>
        <S.Title>지금 많이 찾는 검색어</S.Title>
        <S.UpdateTime>
          {resetTime.getMonth()}.{resetTime.getDate()} 업데이트
        </S.UpdateTime>
      </S.TitleWrap>
    </S.Component>
  );
};

export default SearchWordRanking;
