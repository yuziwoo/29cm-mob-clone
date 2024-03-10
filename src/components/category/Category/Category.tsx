import { useCallback, useEffect, useState } from 'react';
import { mockCategory } from '../../../mock/product';
import { ComponentStyle as S } from './Category.styled';
import CommonButton from '../../common/motion/CommonButton/CommonButton';
import IconRightArrow2 from '../../icons/IconRightArrow2';
import { theme } from '../../../styles/theme';
import { useRouter } from '../../../hooks/useRouter';
import { ROUTE_PATH } from '../../../constants/path';

const Category = () => {
  /**
   * 카테고리 페이지의 카테고리 컴포넌트입니다. 이 컴포넌트에서 카테고리를 설정하고, CategoryDetailPage로 이동시킵니다.
   */

  const [activeGroup, setActiveGroup] = useState(mockCategory[0].group);
  const [categoryLarges, setCategoryLarges] = useState(
    mockCategory[0].categoryLarge.map((category, index) => ({ category, active: index === 0 }))
  );
  const [categoryMediums, setCategoryMediums] = useState(mockCategory[0].categoryMedium);

  useEffect(() => {
    const category = mockCategory.find(({ group }) => group === activeGroup);
    if (category === undefined) return;

    const newCategoryLarges = category.categoryLarge.map((category, index) => ({
      category,
      active: index === 0,
    }));
    setCategoryLarges(newCategoryLarges);

    const newCategoryMediums = category.categoryMedium;
    setCategoryMediums(newCategoryMediums);
  }, [activeGroup]);

  const handleClickGroup = useCallback((group: string) => {
    setActiveGroup(group);
  }, []);

  const handleClickCategoryLarge = useCallback((newCategory: string) => {
    setCategoryLarges((prevCategory) =>
      prevCategory.map(({ category }) => ({ category, active: newCategory === category }))
    );
  }, []);

  const { navigate } = useRouter();

  const handleClickCategoryMedium = useCallback(
    (categoryMedium: string) => {
      const activeCategory = {
        group: activeGroup,
        categoryLarge:
          categoryLarges.length > 0 ? categoryLarges.find(({ active }) => active)?.category : null,
        categoryMedium,
      };

      const queryString = [];
      for (const [categoryClass, value] of Object.entries(activeCategory)) {
        if (value !== null) {
          queryString.push(`${categoryClass}=${value}`);
        }
      }

      navigate(ROUTE_PATH.categoryDetail + '/?' + queryString.join('&'));
    },
    [categoryLarges, navigate]
  );

  return (
    <S.Component>
      <S.Groups>
        {mockCategory.map(({ group }) => (
          <S.Group
            key={group}
            $isActive={activeGroup === group}
            onClick={() => {
              handleClickGroup(group);
            }}
          >
            <S.GroupText>{group}</S.GroupText>
          </S.Group>
        ))}
      </S.Groups>

      <S.CategoryWrap>
        <S.CategoryLarges>
          {categoryLarges.length > 0 ? (
            categoryLarges.map(({ category, active }) => (
              <CommonButton
                key={category}
                style={{ marginRight: '8px' }}
                onClick={() => {
                  handleClickCategoryLarge(category);
                }}
              >
                <S.CategoryLarge $isActive={active}>
                  <S.CategoryLargeText>{category}</S.CategoryLargeText>
                </S.CategoryLarge>
              </CommonButton>
            ))
          ) : (
            <CommonButton>
              <S.CategoryLarge $isActive={true}>
                <S.CategoryLargeText>ALL</S.CategoryLargeText>
              </S.CategoryLarge>
            </CommonButton>
          )}
        </S.CategoryLarges>

        <S.CategoryMediums>
          <S.CategoryMedium
            onClick={() => {
              handleClickCategoryMedium('전체');
            }}
          >
            <S.CategoryMediumText>전체</S.CategoryMediumText>
            <S.Arrow>
              <IconRightArrow2 color={theme.color.GRAY5} />
            </S.Arrow>
          </S.CategoryMedium>

          {categoryMediums.map((category) => (
            <CommonButton key={category}>
              <S.CategoryMedium
                onClick={() => {
                  handleClickCategoryMedium(category);
                }}
              >
                <S.CategoryMediumText>{category}</S.CategoryMediumText>
                <S.Arrow>
                  <IconRightArrow2 color={theme.color.GRAY5} />
                </S.Arrow>
              </S.CategoryMedium>
            </CommonButton>
          ))}
        </S.CategoryMediums>
      </S.CategoryWrap>
    </S.Component>
  );
};

export default Category;
