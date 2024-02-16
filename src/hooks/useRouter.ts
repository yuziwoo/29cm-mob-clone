import { NavigateOptions, To, useNavigate } from 'react-router-dom';

const scrollReset = () => {
  document.documentElement.scrollTo(0, 0);
}

export const useRouter = () => {
  const realNavigate = useNavigate();

  const navigate = (to: To | number, options?: NavigateOptions | undefined) => {
    if (typeof to === 'number') {
      realNavigate(to);
      scrollReset();
    } else {
      if (options) {
        realNavigate(to, options);
        scrollReset();
        return;
      }
      realNavigate(to);
      scrollReset();
    }
  };

  return { navigate };
};
