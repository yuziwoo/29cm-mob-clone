import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ComponentStyle as S } from './Header.styled';
import { theme } from '../../../styles/theme';
import { headerUI } from '../../../constants/headerUI';
import { elementId } from '../../../constants/elementId';
import HeaderShadow from './HeaderShadow/HeaderShadow';
import HeaderIcons from './HeaderIcons/HeaderIcons';
import HeaderCategory from './HeaderCategory/HeaderCategory';
import HeaderBackButton from './HeaderBackButton/HeaderBackButton';
import HeaderLogoButton from './HeaderLogoButton/HeaderLogoButton';
import HeaderSearch from './HeaderSearch/HeaderSearch';

interface HeaderProps {
  firstPath: string;
}

const Header = ({ firstPath }: HeaderProps) => {
  /**
   * header는 (pathname의 첫번째 패스)에 따라 UI를 다르게 보여줍니다.
   * 패스의 개수가 3개 이상 중첩된 경우에는 뒤로가기 버튼만 보여줍니다. ('my/edit/info')
   * 컴포넌트 수정의 편의성을 위해 경우에 따라 달라지는 Header를 모두 따로따로 분리하였습니다.
   */

  const { pathname } = useLocation();

  const [height, setHeight] = useState<undefined | number>(undefined);
  useEffect(() => {
    setTimeout(() => {
      setHeight(document.getElementById(elementId.common.HEADER)?.offsetHeight);
    }, 100);
  }, [pathname]);

  if (headerUI.HIDDEN.includes(firstPath)) return <></>;

  if (headerUI.MAIN.includes(firstPath))
    return (
      <>
        <S.RelatedHeight $height={height} />
        <S.Header id={elementId.common.HEADER} $backgroundTransparent={true}>
          <HeaderShadow />
          <S.MainHeader>
            <HeaderLogoButton firstPath={firstPath} />
            <HeaderIcons color={theme.color.WHITE} />
          </S.MainHeader>
          <HeaderCategory location={firstPath} />
        </S.Header>
      </>
    );

  if (headerUI.ONLY_BACKBUTTON.includes(firstPath) || pathname.split('/').length >= 4)
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

  if (headerUI.BACKBUTTON_AND_ICONS.includes(firstPath))
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

  if (headerUI.SEARCH.includes(firstPath))
    return (
      <>
        <S.RelatedHeight $height={height} />
        <S.Header id={elementId.common.HEADER}>
          <S.MainHeader>
            <HeaderBackButton />
            <HeaderSearch />
          </S.MainHeader>
        </S.Header>
      </>
    );

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

export default Header;
