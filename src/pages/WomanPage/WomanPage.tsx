import { useRecoilState } from 'recoil';
import { headerStateDefault, headerStateRecoil } from '../../recoil/headerState';
import { useEffect } from 'react';

const WomanPage = () => {
  const [headerState, setHeaderState] = useRecoilState(headerStateRecoil);
  useEffect(() => {
    if (headerState !== headerStateDefault) {
      setHeaderState(headerStateDefault);
    }
    // eslint-disable-next-line
  }, []);

  return <div>WomanPage</div>;
};

export default WomanPage;
