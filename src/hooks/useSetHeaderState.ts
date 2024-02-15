import { useRecoilState } from 'recoil';
import { HeaderStateProps, headerStateRecoil } from '../recoil/headerState';
import { useEffect } from 'react';

const useSetHeaderState = (newHeaderState: HeaderStateProps) => {
  const [headerState, setHeaderState] = useRecoilState(headerStateRecoil);
  useEffect(() => {
    if (headerState !== newHeaderState) {
      setHeaderState(newHeaderState);
    }
    // eslint-disable-next-line
  }, []);

  return newHeaderState;
};

export default useSetHeaderState;
