import { useRecoilState } from 'recoil';
import { headerStateDefault, headerStateRecoil } from '../../recoil/headerState';
import { useEffect } from 'react';

const MainPage = () => {
  const [headerState, setHeaderState] = useRecoilState(headerStateRecoil);
  useEffect(() => {
    if (headerState !== headerStateDefault) {
      setHeaderState(headerStateDefault);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: '300px' }}>Main Page</h1>
    </div>
  );
};

export default MainPage;
