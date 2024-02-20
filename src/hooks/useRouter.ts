import { NavigateOptions, To, useNavigate } from 'react-router-dom';

export const useRouter = () => {
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
    }
  };

  return { navigate };
};
