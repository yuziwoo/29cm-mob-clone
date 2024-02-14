import * as S from './HeaderCategory.styled';
import { ROUTE_PATH } from '../../../../constants/path';
import { Link } from 'react-router-dom';

interface HeaderCategoryProps {
  location?: string;
}

const HeaderCategory = ({ location = '' }: HeaderCategoryProps) => {
  
  return (
    <S.Category className="category">
      <S.CategoryWrap>
        <Link to={ROUTE_PATH.man} className={location === 'man' ? 'active' : ''}>
          <p>맨</p>
        </Link>
        <Link to={ROUTE_PATH.root} className={location === '' ? 'active' : ''}>
          <p>홈</p>
        </Link>
        <Link to={ROUTE_PATH.life} className={location === 'life' ? 'active' : ''}>
          <p>라이프</p>
        </Link>
        <Link to={ROUTE_PATH.woman} className={location === 'woman' ? 'active' : ''}>
          <p>우먼</p>
        </Link>
        <Link to={ROUTE_PATH.best} className={location === 'best' ? 'active' : ''}>
          <p>베스트</p>
        </Link>
      </S.CategoryWrap>
    </S.Category>
  );
};

export default HeaderCategory;
