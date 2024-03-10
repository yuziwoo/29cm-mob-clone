import Category from '../../components/category/Category/Category';
import CommonPageAnimation from '../../components/common/motion/CommonPageAnimation/CommonPageAnimation';
import { PageStyle as S } from './CategoryPage.styled';

const CategoryPage = () => {
  return (
    <CommonPageAnimation>
      <S.Page>
        <Category />
      </S.Page>
    </CommonPageAnimation>
  );
};

export default CategoryPage;
