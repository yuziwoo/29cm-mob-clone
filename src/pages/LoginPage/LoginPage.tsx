import { useRecoilState } from 'recoil';
import { headerStateOnlyBackButton, headerStateRecoil } from '../../recoil/headerState';
import { useEffect } from 'react';

const LoginPage = () => {
  const [headerState, setHeaderState] = useRecoilState(headerStateRecoil);
  useEffect(() => {
    if (headerState !== headerStateOnlyBackButton) {
      setHeaderState(headerStateOnlyBackButton);
    }
    // eslint-disable-next-line
  }, []);

  return <div>login</div>;
};

export default LoginPage;
