import { headerStateDefault } from '../../recoil/headerState';
import useSetHeaderState from '../../hooks/useSetHeaderState';

const WomanPage = () => {
  useSetHeaderState(headerStateDefault);

  return <div>WomanPage</div>;
};

export default WomanPage;
