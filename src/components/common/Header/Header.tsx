import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { headerUI } from '../../../constants/headerUI';
import { elementId } from '../../../constants/elementId';
import HeaderUIDefault from './HeaderUI/HeaderUIDefault';
import HeaderUIMain from './HeaderUI/HeaderUIMain';
import HeaderUIOnlyBackbutton from './HeaderUI/HeaderUIOnlyBackbutton';
import HeaderUIBackbuttonAndIcons from './HeaderUI/HeaderUIBackbuttonAndIcons';
import HeaderUISearch from './HeaderUI/HeaderUISearch';
import HeaderUIAlert from './HeaderUI/HeaderUIAlert';
import HeaderUIBestPage from './HeaderUI/HeaderUIBestPage';
import HeaderUISearchModelAndIcons from './HeaderUI/HeaderUISearchModelAndIcons';

interface HeaderProps {
  firstPath: string;
}

const Header = ({ firstPath }: HeaderProps) => {
  /**
   * header는 (pathname의 첫번째 패스)에 따라 다르게 다양한 UI를 보여줍니다.
   * 패스의 수가 3개 이상인 경우, 뒤로가기 버튼만 보여줍니다. (ex. 'my/edit/info')
   * 컴포넌트 수정의 편의성을 위해 경우에 따라 달라지는 Header를 모두 따로따로 분리하여 관리합니다.
   */

  const { pathname } = useLocation();

  const [height, setHeight] = useState<undefined | number>(undefined);
  useEffect(() => {
    setTimeout(() => {
      setHeight(document.getElementById(elementId.common.HEADER)?.offsetHeight);
    }, 100);
  }, [pathname]);

  // 헤더를 숨기는 경우
  if (headerUI.HIDDEN.includes(firstPath)) return <></>;

  // 메인 페이지의 헤더 (로고, 아이콘, 네비바, 반투명한 배경)
  if (headerUI.MAIN.includes(firstPath))
    return <HeaderUIMain firstPath={firstPath} height={height} />;

  // BestPage의 헤더 (로고, 아이콘, 네비바, 회색 배경)
  if (headerUI.BEST.includes(firstPath))
    return <HeaderUIBestPage firstPath={firstPath} height={height} />;

  // 뒤로가기 버튼만 있는 헤더
  if (headerUI.ONLY_BACKBUTTON.includes(firstPath) || pathname.split('/').length >= 4)
    return <HeaderUIOnlyBackbutton height={height} />;

  // 뒤로가기 버튼과 아이콘을 가진 헤더
  if (headerUI.BACKBUTTON_AND_ICONS.includes(firstPath))
    return <HeaderUIBackbuttonAndIcons height={height} />;

  // 뒤로가기와 검색 Input을 가진 헤더
  if (headerUI.SEARCH.includes(firstPath)) return <HeaderUISearch height={height} />;

  // Search 모형과 아이콘을 가진 헤더
  if (headerUI.SEARCH_MODEL_AND_ICONS.includes(firstPath))
    return <HeaderUISearchModelAndIcons height={height} />;

  // 뒤로가기와 "알림" 타이틀 문구를 가진 헤더
  if (headerUI.ALERT.includes(firstPath)) return <HeaderUIAlert height={height} />;

  // 기본 메인 헤더 (로고, 아이콘)
  return <HeaderUIDefault firstPath={firstPath} height={height} />;
};

export default Header;
