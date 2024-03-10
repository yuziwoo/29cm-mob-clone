import { ComponentStyle as S } from './HeaderCategory.styled';
import { ROUTE_PATH } from '../../../../constants/path';
import { scrollTop } from '../../../../utils/scrollTop';
import { useRouter } from '../../../../hooks/useRouter';
import CommonButton from '../../motion/CommonButton/CommonButton';
import { theme } from '../../../../styles/theme';

interface HeaderCategoryProps {
  location?: string;
  color?: string;
}

const HeaderCategory = ({ location = '', color = theme.color.WHITE }: HeaderCategoryProps) => {
  /**
   * 맨, 홈, 라이프, 우먼, 베스트 등의 선택지가 있는 메인 페이지에서 사용되는 카테고리 리스트 입니다.
   */

  const category = [
    { path: ROUTE_PATH.man, locationKey: 'man', text: '맨' },
    { path: ROUTE_PATH.root, locationKey: '', text: '홈' },
    { path: ROUTE_PATH.life, locationKey: 'life', text: '라이프' },
    { path: ROUTE_PATH.woman, locationKey: 'woman', text: '우먼' },
    { path: ROUTE_PATH.best, locationKey: 'best', text: '베스트' },
  ];

  const { navigate } = useRouter();

  const handleClickButton = ({ path, locationKey }: { path: string; locationKey: string }) => {
    if (location === locationKey) {
      scrollTop();
      return;
    }
    navigate(path);
  };

  return (
    <S.Category>
      <S.Nav>
        {category.map(({ path, locationKey, text }) => (
          <CommonButton key={text} onClick={() => handleClickButton({ path, locationKey })}>
            <S.TextWrap $isActive={location === locationKey} $color={color}>
              <S.Text $color={color}>{text}</S.Text>
            </S.TextWrap>
          </CommonButton>
        ))}
      </S.Nav>
    </S.Category>
  );
};

export default HeaderCategory;
