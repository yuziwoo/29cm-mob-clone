import { elementId } from '../../../../constants/elementId';
import { theme } from '../../../../styles/theme';
import { ComponentStyle as S } from '../Header.styled';
import HeaderIcons from '../HeaderIcons/HeaderIcons';
import HeaderLogoButton from '../HeaderLogoButton/HeaderLogoButton';

interface HeaderUIDefaultProps {
  firstPath: string;
  height: number | undefined;
}

const HeaderUIDefault = ({ firstPath, height }: HeaderUIDefaultProps) => {
  return (
    <>
      <S.RelatedHeight $height={height} />
      <S.Header id={elementId.common.HEADER}>
        <S.MainHeader>
          <HeaderLogoButton firstPath={firstPath} />
          <HeaderIcons color={theme.color.BLACK} />
        </S.MainHeader>
      </S.Header>
    </>
  );
};

export default HeaderUIDefault;
