import { headerStateDefault } from '../../recoil/headerState';
import useSetHeaderState from '../../hooks/useSetHeaderState';

const ManPage = () => {
  useSetHeaderState(headerStateDefault);

  return <div>ManPage</div>;
};

export default ManPage;
