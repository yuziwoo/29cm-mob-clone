import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ComponentStyle as S } from './HeaderSearch.styled';

const HeaderSearch = () => {
  const { keyword } = useParams();

  useEffect(() => {
    if (keyword === undefined) {
    }
  }, [keyword]);
  
  return <S.Component>

  </S.Component>;
};

export default HeaderSearch;
