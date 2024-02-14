import * as S from './MainFooter.styled';

interface MainFooterProps {
  location: string;
}

const MainFooter = ({ location = '' }: MainFooterProps) => {
  return <S.Main></S.Main>;
};

export default MainFooter;
