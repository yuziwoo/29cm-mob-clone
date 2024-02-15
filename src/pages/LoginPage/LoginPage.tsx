import { headerStateOnlyBackButton } from '../../recoil/headerState';
import useSetHeaderState from '../../hooks/useSetHeaderState';

const LoginPage = () => {
  useSetHeaderState(headerStateOnlyBackButton);

  return <div>login</div>;
};

export default LoginPage;
