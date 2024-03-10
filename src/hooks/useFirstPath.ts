import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useFirstPath = () => {
  /**
   * path에 따라 반응하는 Header, Footer ui를 구현하기 위해 사용합니다.
   * pathname이 아닌 firstPath를 사용하는 이유는 useParams를 이용하는 페이지에서는 pathname을 특정할 수 없기 때문입니다.
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
