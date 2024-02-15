import { useRecoilState } from 'recoil';
import { headerStateDefault, headerStateRecoil } from '../../recoil/headerState';
import { useEffect } from 'react';

const ManPage = () => {
  const [headerState, setHeaderState] = useRecoilState(headerStateRecoil);
  useEffect(() => {
    if (headerState !== headerStateDefault) {
      setHeaderState(headerStateDefault);
    }
    // eslint-disable-next-line
  }, []);

  return <div>ManPage</div>;
};

export default ManPage;
