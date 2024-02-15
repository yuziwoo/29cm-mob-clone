import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { headerStateDefault, headerStateRecoil } from '../../recoil/headerState';

const BestPage = () => {
  const [headerState, setHeaderState] = useRecoilState(headerStateRecoil);
  useEffect(() => {
    if (headerState !== headerStateDefault) {
      setHeaderState(headerStateDefault);
    }
    // eslint-disable-next-line
  }, []);

  return <div>BestPage</div>;
};

export default BestPage;
