import { headerStateDefault } from '../../recoil/headerState';
import useSetHeaderState from '../../hooks/useSetHeaderState';

const BestPage = () => {
  useSetHeaderState(headerStateDefault);

  return <div>BestPage</div>;
};

export default BestPage;
