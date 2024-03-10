import { useEffect, useState } from 'react';
import CommonPageAnimation from '../../components/common/motion/CommonPageAnimation/CommonPageAnimation';
import { PageStyle as S } from './CategoryDetailPage.styled';
import CategoryProducts from '../../components/category/CategoryProducts/CategoryProducts';
import NotFoundComponent from '../../components/common/NotFoundComponent/NotFoundComponent';

const CategoryPage = () => {
  const [params, setParams] = useState<URLSearchParams | null>(null);

  useEffect(() => {
    const url = window.location.href;
    const params = new URLSearchParams(url.split('?')[1]);
    setParams(params);
  }, []);

  if (params === null)
    return (
      <CommonPageAnimation>
        <NotFoundComponent />
      </CommonPageAnimation>
    );

  return (
    <CommonPageAnimation>
      <S.Page>
        <CategoryProducts params={params} />
      </S.Page>
    </CommonPageAnimation>
  );
};

export default CategoryPage;
