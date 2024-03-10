import { ComponentStyle as S } from '../Header.styled';
import HeaderIcons from '../HeaderIcons/HeaderIcons';
import { elementId } from '../../../../constants/elementId';
import { theme } from '../../../../styles/theme';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import { mockSearchPlaceholder } from '../../../../mock/search';
import { useRouter } from '../../../../hooks/useRouter';
import { useCallback } from 'react';
import { ROUTE_PATH } from '../../../../constants/path';

interface HeaderUISearchModelAndIconsProps {
  height: number | undefined;
}

const HeaderUISearchModelAndIcons = ({ height }: HeaderUISearchModelAndIconsProps) => {
  const { navigate } = useRouter();

  const handleNavigateSearchPage = useCallback(() => {
    navigate(ROUTE_PATH.search);
  }, [navigate]);

  return (
    <>
      <S.RelatedHeight $height={height} />
      <S.Header id={elementId.common.HEADER}>
        <S.MainHeader>
          <div style={{ flex: 1, cursor: 'pointer' }} onClick={handleNavigateSearchPage}>
            <HeaderSearch noFocus={true} placeholder={mockSearchPlaceholder[0]} />
          </div>
          <div style={{ marginLeft: '2rem' }}>
            <HeaderIcons color={theme.color.BLACK} displayIcons={['alert', 'cart']} />
          </div>
        </S.MainHeader>
      </S.Header>
    </>
  );
};

export default HeaderUISearchModelAndIcons;
