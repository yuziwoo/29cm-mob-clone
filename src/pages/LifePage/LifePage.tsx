import { headerStateDefault } from '../../recoil/headerState';
import useSetHeaderState from '../../hooks/useSetHeaderState';

const LifePage = () => {
  useSetHeaderState(headerStateDefault);

  return <div>LifePage</div>;
};

export default LifePage;
