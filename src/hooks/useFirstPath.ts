import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useFirstPath = () => {
  /**
   * path에 따라 반응하는 Header, Footer ui를 구현하기 위해 사용합니다.
   * useParams를 이용하게되면 pathname을 특정할 수 없기 때문에 Header, Footer의 UI구분은 firstPath로 합니다.
   *
   * @return
   * firstPath: pathname의 첫번째 패스를 반환합니다.
   */

  const { pathname } = useLocation();
  const [firstPath, setFirstPath] = useState('');

  const getFirstPath = (pathname: string): string => {
    return pathname.split('/')[1] ? pathname.split('/')[1] : '';
  };

  useEffect(() => {
    setFirstPath(getFirstPath(pathname));
  }, [pathname]);

  return { firstPath };
};
