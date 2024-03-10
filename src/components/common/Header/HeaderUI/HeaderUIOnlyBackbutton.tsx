import { elementId } from '../../../../constants/elementId';
import { ComponentStyle as S } from '../Header.styled';
import HeaderBackButton from '../HeaderBackButton/HeaderBackButton';

interface HeaderUIOnlyBackbuttonProps {
  height: number | undefined;
}

const HeaderUIOnlyBackbutton = ({ height }: HeaderUIOnlyBackbuttonProps) => {
  return (
    <>
      <S.RelatedHeight $height={height} />
      <S.Header id={elementId.common.HEADER}>
        <S.MainHeader>
          <HeaderBackButton />
        </S.MainHeader>
      </S.Header>
    </>
  );
};

export default HeaderUIOnlyBackbutton;
