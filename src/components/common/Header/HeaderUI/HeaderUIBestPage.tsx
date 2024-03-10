import { elementId } from '../../../../constants/elementId';
import { theme } from '../../../../styles/theme';
import { ComponentStyle as S } from '../Header.styled';
import HeaderCategory from '../HeaderCategory/HeaderCategory';
import HeaderIcons from '../HeaderIcons/HeaderIcons';
import HeaderLogoButton from '../HeaderLogoButton/HeaderLogoButton';

interface HeaderUIBestPageProps {
  firstPath: string;
  height: number | undefined;
}

const HeaderUIBestPage = ({ firstPath, height }: HeaderUIBestPageProps) => {
  /**
   * 메인 - BEST 페이지에서 사용되는 Header UI입니다.
   */

  return (
    <>
      <S.RelatedHeight $height={height} />
      <S.HeaderUIMain id={elementId.common.HEADER} $blur={0} $useBackground={theme.color.GRAY1}>
        <S.MainHeader>
          <HeaderLogoButton firstPath={firstPath} color={theme.color.BLACK} />
          <HeaderIcons color={theme.color.BLACK} />
        </S.MainHeader>
        <HeaderCategory location={firstPath} color={theme.color.BLACK} />
      </S.HeaderUIMain>
    </>
  );
};

export default HeaderUIBestPage;
