import { NavigateOptions, To, useNavigate } from 'react-router-dom';

export const useRouter = () => {
  /**
   * useNavigate는 useRouter기능으로 사용합니다.
   * useNavigate의 preventScrollReset이 정상적으로 작동하지 않는 경우가 있기 때문이며, 추후에 router 라이브러리가 바뀔때의 대비도 쉬워집니다.
   */

  const realNavigate = useNavigate();

  const navigate = (to: To | number, options?: NavigateOptions | undefined) => {
    if (typeof to === 'number') {
      realNavigate(to);
    } else {
      if (options) {
        realNavigate(to, { ...options, preventScrollReset: true });
        return;
      }
      realNavigate(to, { preventScrollReset: true });
      window.scrollTo({ left: 0, top: 0 });
    }
  };

  return { navigate };
};
