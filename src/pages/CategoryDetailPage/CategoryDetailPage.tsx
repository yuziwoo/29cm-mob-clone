import { useEffect, useState } from 'react';
import CommonPageAnimation from '../../components/common/motion/CommonPageAnimation/CommonPageAnimation';
import { PageStyle as S } from './CategoryDetailPage.styled';
import { useLocation } from 'react-router-dom';

const CategoryPage = () => {
  const [params, setParams] = useState<URLSearchParams | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const url = pathname;
    const params = new URLSearchParams(url.split('?')[1]);
    console.log(params);
    setParams(params);
  }, [pathname]);

  return (
    <CommonPageAnimation>
      <S.Page>Category Detail Page </S.Page>
    </CommonPageAnimation>
  );
};

export default CategoryPage;
