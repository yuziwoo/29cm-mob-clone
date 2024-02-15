import { useRecoilState } from 'recoil';
import { headerStateDefault, headerStateRecoil } from '../../recoil/headerState';
import { useEffect } from 'react';

const LifePage = () => {
  const [headerState, setHeaderState] = useRecoilState(headerStateRecoil);
  useEffect(() => {
    if (headerState !== headerStateDefault) {
      setHeaderState(headerStateDefault);
    }
    // eslint-disable-next-line
  }, []);

  return <div>LifePage</div>;
};

export default LifePage;
