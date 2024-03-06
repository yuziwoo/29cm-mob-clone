import { elementId } from '../../../../constants/elementId';
import { theme } from '../../../../styles/theme';
import { ComponentStyle as S } from '../Header.styled';
import HeaderCategory from '../HeaderCategory/HeaderCategory';
import HeaderIcons from '../HeaderIcons/HeaderIcons';
import HeaderLogoButton from '../HeaderLogoButton/HeaderLogoButton';
import HeaderShadow from '../HeaderShadow/HeaderShadow';

interface HeaderUIMainProps {
  firstPath: string;
  height: number | undefined;
}

const HeaderUIMain = ({ firstPath, height }: HeaderUIMainProps) => {
  return (
    <>
      <S.RelatedHeight $height={height} />
      <S.Header id={elementId.common.HEADER} $backgroundTransparent={true}>
        <HeaderShadow />
        <S.MainHeader>
          <HeaderLogoButton firstPath={firstPath} color={theme.color.WHITE} />
          <HeaderIcons color={theme.color.WHITE} />
        </S.MainHeader>
        <HeaderCategory location={firstPath} />
      </S.Header>
    </>
  );
};

export default HeaderUIMain;
