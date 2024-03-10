import { elementId } from '../../../../constants/elementId';
import { theme } from '../../../../styles/theme';
import { ComponentStyle as S } from '../Header.styled';
import HeaderBackButton from '../HeaderBackButton/HeaderBackButton';
import HeaderIcons from '../HeaderIcons/HeaderIcons';

interface HeaderUIBackbuttonAndIconsProps {
  height: number | undefined;
}

const HeaderUIBackbuttonAndIcons = ({ height }: HeaderUIBackbuttonAndIconsProps) => {
  return (
    <>
      <S.RelatedHeight $height={height} />
      <S.Header id={elementId.common.HEADER}>
        <S.MainHeader>
          <HeaderBackButton />
          <HeaderIcons color={theme.color.BLACK} />
        </S.MainHeader>
      </S.Header>
    </>
  );
};

export default HeaderUIBackbuttonAndIcons;
