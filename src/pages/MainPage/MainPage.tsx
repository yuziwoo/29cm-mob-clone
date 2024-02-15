import { headerStateDefault } from '../../recoil/headerState';
import useSetHeaderState from '../../hooks/useSetHeaderState';

const MainPage = () => {
  useSetHeaderState(headerStateDefault);

  return (
    <div>
      <h1 style={{ fontSize: '300px' }}>Main Page</h1>
    </div>
  );
};

export default MainPage;
